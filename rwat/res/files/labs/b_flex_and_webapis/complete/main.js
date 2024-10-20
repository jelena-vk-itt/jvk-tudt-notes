window.addEventListener("load", function () {
  // =============== CONSTANTS  =========================//
  const COMPLEXITY = { low: 10, medium: 20, high: 30 };
  const STORED_IMAGE_ORDER = "stored-image-order";
  const STORED_MOVE_COUNT = "stored-move-count";

  // ================ DATA SHARED BY VIEWS ========================//
  class SharedData {
    static inst = new SharedData();
    static reset() {
      SharedData.inst = new SharedData();
    }
    constructor() {
      // gamecfg -> playgame
      this.complexity = 0;

      // playgame -> savegame
      // resgame -> playgame
      this.imageOrder = "";

      // playgame -> gameend
      // playgame -> savegame
      // resgame -> playgame
      this.moveCount = 0;
      this.moveCountS = "";
    }
    // set move count using function so that we
    // can change the ending of the text 'move'
    setMoveCount(count) {
      this.moveCount = count;
      this.moveCountS = this.moveCount > 1 ? "s" : "";
    }
  }

  // ========================== KICK OFF THE APPLICATION ==============//
  // it starts with the data source view
  datasrc();

  // ================ VIEW UTILITIES ===========================//
  // for the sake of producing more generally applicable code,
  // the HTML file does not contain a view and all views are
  // loaded dynamically

  // allows use of template arguments in view HTML
  function tt(strings, ...keys) {
    return (dict) => {
      return strings.map((s, i) => `${s}${dict[keys[i]] || ""}`).join("");
    };
  }

  function setView(view_data) {
    // add the view HTML, passing in the shared data as they
    // will contain any template parameters (like moveCount in endmsg)
    document.getElementById(view_data.hook).innerHTML =
      view_data?.html?.(SharedData.inst) ?? "";

    // set up button handlers for moving onto other views
    let buttons = this.document.querySelectorAll("button");
    this.document.querySelectorAll("button").forEach((b) => {
      if (/(^button-|\ button-)/.test(b.className)) {
        b.addEventListener("click", () => {
          eval(
            b.className.replace(/(^|.* )button-([^ ]+)( .*|$)/, "$2") + "()"
          );
        });
      }
    });
  }

  // ================ VIEW FUNCTIONS ==============================//
  function datasrc() {
    setView({
      hook: "topcontainer",
      html: tt`<div class="game-choice centred">
            <button class="button-resgame">Resume previous game</button>
            <button class="button-gamecfg">Play a new game</button>
        </div>`,
    });
  }

  function gamecfg() {
    setView({
      hook: "topcontainer",
      html: tt`<h3>Please choose a complexity level</h3>
        <p><input type="radio" id="c-low" name="complexity" value="low">
        <label for="c-low">low</label></p>
        <p><input type="radio" id="c-medium" name="complexity" value="medium">
        <label for="c-medium">medium</label></p>
        <p><input type="radio" id="c-high" name="complexity" value="high">
        <label for="c-high">high</label></p>
        <button class="button-playgame" disabled>Start</button>`,
    });

    document.querySelectorAll('input[name="complexity"]').forEach((el) => {
      el.addEventListener("change", (event) => {
        SharedData.inst.complexity = COMPLEXITY[event.target.value];
        document.querySelector(".button-playgame").disabled = false;
      });
    });
  }

  function playgame() {
    setView({
      hook: "topcontainer",
      html: tt`<div id="board" class="centred">
            <div class="board-row">
                <div class="board-cell"><img src="images/p1.png" /></div>
                <div class="board-cell"><img src="images/p2.png" /></div>
                <div class="board-cell"><img src="images/p3.png" /></div>
            </div>
            <div class="board-row">
                <div class="board-cell"><img src="images/p4.png" /></div>
                <div class="board-cell"><img src="images/p5.png" /></div>
                <div class="board-cell"><img src="images/p6.png" /></div>
            </div>
            <div class="board-row">
                <div class="board-cell"><img src="images/p7.png" /></div>
                <div class="board-cell"><img src="images/p8.png" /></div>
                <div class="board-cell"><img src="images/p9.png" /></div>
            </div>
        </div>
        <div id="belowboard" class="container">
            <button class="button-savegame centred">Save for later</button>
        </div`,
    });

    // -------------- OPERATIONAL DATA SETUP AND BOARD VALIDITY CHECKS --- //
    // (strictly speaking, the validity checks are not needed in this context
    // where we have full control over the board layout, however, it is good
    // to build in resilience into the code, so that it can be used in a more
    // general context in the future)
    // get the board row elements, for convenience
    let rows = document.getElementById("board").querySelectorAll(".board-row");

    // Check that there are at least two rows
    if (rows.length < 2) {
      throw new Error("There must be at least two rows");
    }

    let lastRowCells = rows[rows.length - 1].querySelectorAll(".board-cell");
    rows.forEach((row, i) => {
      let rowCells = row.querySelectorAll(".board-cell");
      // check that all rows have the same number of cells and that it is at least 2
      if (!(rowCells.length == lastRowCells.length)) {
        throw new Error("All rows must have the same number of cells");
      }

      // store grid posStrs on cells (having these data will
      // make the checking of move validity more straightforward)
      rowCells.forEach((cell, j) => {
        cell.dataset.posStr = i + "." + j;
      });
    });
    if (lastRowCells.length < 2) {
      throw new Error("There must be at least two columns");
    }

    // pre-prepare board by removing one image and store
    // information about the target of the game
    let endProcessor = new (function () {
      this.emptyCell = lastRowCells[lastRowCells.length - 1];
      this.removedImg = this.emptyCell.removeChild(
        this.emptyCell.querySelector("img")
      );
      this.targetImgOrder = imageOrderString();
      this.check = function () {
        if (SharedData.inst.imageOrder == this.targetImgOrder) {
          this.emptyCell.appendChild(this.removedImg);
          gameend();
        }
      };
    })();

    // prepare the board (the implemented possibilities are to
    // randomly shuffle or to restore from local storage)
    setInitialImgOrder();

    //------------------- DRAGGABILITY SETUP -------------------//
    document
      .getElementById("board")
      .querySelectorAll(".board-cell")
      .forEach((cell) => {
        let img = cell.querySelector("img");
        if (img) {
          img.addEventListener("dragstart", function (e) {
            // as the image starts being dragged, use the data transfer
            // to send its position to the receiver (empty) cell
            e.dataTransfer.setData(
              "text",
              e.target.parentElement.dataset.posStr
            );
          });
        }

        cell.addEventListener("dragover", function (e) {
          // only if the dragover is happening on the empty cell should be allow the drop
          if (e.target.classList.contains("board-cell") && isEmpty(e.target)) {
            e.preventDefault();
          }
        });

        cell.addEventListener("drop", function (e) {
          // get the position of the image that is being dragged from the data transfer
          let fromPos = gridPos(e.dataTransfer.getData("text"));
          if (
            isEmpty(cell) &&
            positionsAreAdjacent(fromPos, gridPos(cell.dataset.posStr))
          ) {
            let fromCell =
              rows[fromPos[0]].querySelectorAll(".board-cell")[fromPos[1]];
            moveImage(fromCell, cell);
            SharedData.inst.setMoveCount(SharedData.inst.moveCount + 1);
            // check if that's the end
            endProcessor.check();
          }
        });
      });

    //------------------- UTILITY FUNCTIONS -------------------//
    // allow template arguments in the view strings
    function gridPos(pos_data) {
      return pos_data.split(".").map((s) => +s);
    }

    // put all the src strings together as a quick way to identify the image order
    // we insert "---" for the missing image
    function imageOrderString() {
      return Array.from(
        document.getElementById("board").querySelectorAll(".board-cell")
      )
        .map((cell) => {
          let img = cell.querySelector("img");
          return img
            ? img.src.replace(/.*\/[^0-1]+([0-9]+)\.[a-z]{3}/, "$1")
            : "-";
        })
        .join("_");
    }

    //------------------- BOARD MANIPULATION FUNCTIONS -------------------//
    function isEmpty(cell) {
      return !cell.querySelector("img");
    }

    function positionsAreAdjacent(pos1, pos2) {
      return [0, 1].some((i) => {
        return Math.abs(pos1[i] - pos2[i]) == 1 && pos1[1 - i] == pos2[1 - i];
      });
    }

    function moveImage(fromCell, toCell) {
      toCell.appendChild(fromCell.querySelector("img"));
      SharedData.inst.imageOrder = imageOrderString();
    }

    //----------------- INITIAL BOARD PREP FUNCTIONS -----------------//
    // this function shuffles the tiles at the beginning
    function setInitialImgOrder() {
      if (!SharedData.inst.imageOrder) {
        // reset the move count
        shuffle();
        SharedData.inst.setMoveCount(0);
      } else {
        setImageOrder(SharedData.inst.imageOrder);
      }
    }

    function setImageOrder(img_order) {
      let cells = document
        .getElementById("board")
        .querySelectorAll(".board-cell");

      let images = Array.from(cells)
        .map((cell) => cell.querySelector("img"))
        .filter((img) => img);

      img_order.split("_").forEach((imgIndex, indexIndex) => {
        if (imgIndex != "-") {
          cells[indexIndex].appendChild(images[imgIndex - 1]);
        }
      });
    }

    function shuffle() {
      let cells = document
        .getElementById("board")
        .querySelectorAll(".board-cell");
      let emptyCell = endProcessor.emptyCell;
      let times = SharedData.inst.complexity;

      // keep trying to move until times imgs have been moved
      while (times) {
        // random potential position for moving the image from
        let sourceCell = cells[Math.floor(Math.random() * cells.length)];
        // move only if the positions is adjacent to the empty cell
        if (
          positionsAreAdjacent(
            gridPos(sourceCell.dataset.posStr),
            gridPos(emptyCell.dataset.posStr)
          )
        ) {
          moveImage(sourceCell, emptyCell);
          emptyCell = sourceCell;
          --times;
        }
      }
    }
  }

  function savegame() {
    try {
      localStorage.setItem(STORED_IMAGE_ORDER, SharedData.inst.imageOrder);
      localStorage.setItem(STORED_MOVE_COUNT, SharedData.inst.moveCount);
      setView({
        hook: "topcontainer",
        html: tt`<h2 class="dodgerblue">Your game is now saved. You can come back to it later.</h2>`,
      });
      SharedData.reset();
    } catch (error) {
      setView({
        hook: "topcontainer",
        html: tt`<h2 class="red">Sorry, the game could not be saved due to an error.</h2>
               <button class="button-gamecfg centred">Play a new game</button>`,
      });
    }
  }

  function resgame() {
    try {
      SharedData.inst.imageOrder = localStorage.getItem(STORED_IMAGE_ORDER);
      SharedData.inst.moveCount = +localStorage.getItem(STORED_MOVE_COUNT);
    } catch (error) {
      setView({
        hook: "topcontainer",
        html: tt`<h2 class="red">Sorry, a saved game could not be retrieved.</h2>
               <button class="button-gamecfg centred">Play a new game</button>`,
      });
    }
    playgame();
  }

  function gameend() {
    setView({
      hook: "belowboard",
      html: tt`<h2 class="dodgerblue">Well done! You completed the puzzle in ${"moveCount"} move${"moveCountS"}.</h2>
            <button class="button-gamecfg centred">Play again</button>`,
    });
    let styleEl = document.querySelector("head style");
    styleEl.innerHTML +=
      "@media print {" +
      "   .board-cell { border: none; }" +
      "   #board { border: 20px solid maroon; }" +
      "   #belowboard { display: none; }" +
      "}";
    SharedData.reset();
  }
});
