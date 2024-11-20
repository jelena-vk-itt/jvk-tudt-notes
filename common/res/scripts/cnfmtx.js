import { set_canvas_width_to_parent_width } from "./modules/canvas.js"

var CM_LEVEL_MARGIN = 0.07;
var CM_LABEL_SIZE = 0.5;
var CM_LABELS = ["TP", "FP", "FN", "TN"];
function draw_confusion_matrix(element) {

	set_canvas_width_to_parent_width(element);
	element.height = element.width;

	var pclts = JSON.parse(element.getAttribute("data-pclts"));

	var ctx = element.getContext("2d");

	var boxsize = element.width / 2;

	pclts.forEach(function (pclt) {

		var pos = pclt.position;
		var colour = pclt.colour;
		var level = pclt.level;
		var text = pclt.text;

		var xpos = (pos % 2) ? 0 : 1;
		var ypos = (pos > 2) ? 1 : 0;

		var x = (xpos + level * CM_LEVEL_MARGIN) * boxsize;
		var y = (ypos + level * CM_LEVEL_MARGIN) * boxsize;
		var w = (1 - 2 * level * CM_LEVEL_MARGIN) * boxsize;
		var h = w;

		ctx.fillStyle = colour;
		ctx.fillRect(x, y, w, h);
		ctx.fillStyle = 'black';
		ctx.strokeRect(x, y, w, h);

		if (text) {
			var fontSize = CM_LABEL_SIZE * boxsize;
			ctx.font = (fontSize | 0) + 'px Arial';
			ctx.textAlign = 'center';
			ctx.textBaseline = 'middle';
			ctx.fillStyle = 'white';
			ctx.fillText(CM_LABELS[pos - 1], x + w / 2, y + h / 2);
			ctx.fillStyle = 'black';
			ctx.strokeText(CM_LABELS[pos - 1], x + w / 2, y + h / 2);
		}
	});
}


Array.from(document.getElementsByTagName("canvas")).forEach((c) => {
	draw_confusion_matrix(c);
});
