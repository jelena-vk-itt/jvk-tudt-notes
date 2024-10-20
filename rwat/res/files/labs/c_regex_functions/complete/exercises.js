// ===== 1 =====
// 1a
/<[a-z]+>/;
// 1b
/<\/[a-z]+>/;
// 1c
/<\/?[^>]+>/;
// 1d
/([a-z])\1/;
// 1e - this will match many URLs
// (a fully comprehensive regular expression
// for URLs would be more complicated)
/[a-z]+:\/\/[a-z\.]+(\/[a-z]+)*\/?/;
// 1f - all unicode characters are allowed
// but this simpler solution with a-z is sufficient
/[a-z_\$][a-z_\$0-9]*/;

// ===== 2 =====
const STUDENT_DATA_JSON =
  "[" +
  '{"name": "Annie Apple","id": "X00111111","address": "Phibsboro, D7","grades": [60, 71, 55, 53, 44, 62]},' +
  '{"name": "Ben Bounce","id": "B00111111","address": "Rathmines, D6","grades": [44, 22, 77, 33, 41, 50]},' +
  '{"name": "Charlie Curry","id": "B00222222","address": "Phibsboro, D7","grades": [80, 88, 75, 81, 90, 77]},' +
  '{"name": "Dan Dreamer","id": "X00222222","address": "Cabra, D7","grades": [64, 55, 66, 65, 78, 62]},' +
  '{"name": "Emmy Ember","id": "X00333333","address": "Stoneybatter, D7","grades": [53, 55, 55, 52, 51, 60]},' +
  '{"name": "Fiona Falls","id": "C00111111","address": "Grangegorman, D7","grades": [90, 91, 88, 80, 81, 97]},' +
  '{"name": "Georgina Gull","id": "C00222222","address": "City Centre, D1","grades": [76, 67, 63, 71, 55, 82]},' +
  '{"name": "Harry Hops","id": "C00333333","address": "Cabra, D7","grades": [50, 33, 55, 11, 42, 61]},' +
  '{"name": "Iris Indie","id": "X00444444","address": "Tallaght, D24","grades": [61, 71, 58, 70, 65, 67]},' +
  '{"name": "Jack Jobs","id": "C00444444","address": "Phibsboro, D7","grades": [60, 71, 55, 53, 44, 62]},' +
  '{"name": "Kat Kid","id": "C00555555","address": "Grangegorman, D7","grades": [41, 41, 50, 48, 55, 44]},' +
  '{"name": "Lula Lock","id": "C00666666","address": "Cabra, D7","grades": [77, 80, 85, 80, 78, 81]}' +
  "]";
const data = JSON.parse(STUDENT_DATA_JSON);

// 2g
document.body.insertAdjacentHTML("beforeend", "<h3>2g - list of ids</h3>");
document.body.insertAdjacentHTML("beforeend", data.map((s) => s.id).join(", "));

// 2h
let data2 = data.map((s) => {
  [s.firstname, s.surname] = s.name.split(" ");
  delete s.name;
  [s.town, s.postcode] = s.address.split(", ");
  s.postcode = s.postcode.replace(/[a-z]*/i, "");
  delete s.address;
  s.gradeaverage = Math.round(
    s.grades.reduce((sum, grd) => (sum += grd), 0) / s.grades.length
  );
  return s;
});
let highestAvg = Math.max(...data2.map((s) => s.gradeaverage));
data2 = data2.map((s) => {
  s.category =
    s.gradeaverage < 40 ? "F" : s.gradeaverage == highestAvg ? "A" : "P";
  return s;
});
function insertDataTable(element, caption, dataObj, headings) {
  element.insertAdjacentHTML("beforeend", "<h3>" + caption + "</h3>");
  element.insertAdjacentHTML(
    "beforeend",
    "<table>" +
      "<tr>" +
      headings.map((h) => `<th>${h}</th>`).join("") +
      "</tr>" +
      dataObj
        .map((s) => {
          return (
            "<tr>" + headings.map((h) => `<td>${s[h]}</td>`).join("") + "</tr>"
          );
        })
        .join("") +
      "</table>"
  );
}
insertDataTable(document.body, "2h - student info table", data2, [
  "firstname",
  "surname",
  "id",
  "town",
  "postcode",
  "grades",
  "gradeaverage",
  "category",
]);

// 2i
insertDataTable(document.body, "2i - summary student table", data2, [
  "firstname",
  "surname",
  "id",
  "category",
]);

// 2j
let someStudentsFailed = data2.some((s) => s.category == "F");
document.body.insertAdjacentHTML("beforeend", "<h3>2j</h3>");
document.body.insertAdjacentHTML(
  "beforeend",
  "<p>Some students failed: " + someStudentsFailed + "</p>"
);

// 2k
insertDataTable(
  document.body,
  "2k - students who failed",
  data2.filter((s) => s.category == "F"),
  ["firstname", "surname", "id", "category"]
);

// 2l
document.body.insertAdjacentHTML("beforeend", "<h3>2l</h3>");
document.body.insertAdjacentHTML(
  "beforeend",
  "<p>Class grade average: " +
    data2.map((s) => s.gradeaverage).reduce((sum, grd) => (sum += grd), 0) /
      data2.length +
    "</p>"
);

// ===== 3 =====
function tt(strings, ...keys) {
  return (dict) => {
    return strings.map((s, i) => `${s}${dict[keys[i]] || ""}`).join("");
  };
}

let messageTemplates = {
  P: tt`Dear ${"firstname"}, your average result for the semester is ${"gradeaverage"}. Congratulations on your progression to the next semester!`,
  F: tt`Dear ${"firstname"}, your average result for the semester is ${"gradeaverage"}. Unfortunately, you have not passed and will have to repeat some exams.`,
  A: tt`Dear ${"firstname"}, your average result for the semester is ${"gradeaverage"}. Congratulations, you have won the Best in Class award!`,
};

document.body.insertAdjacentHTML("beforeend", "<h3>3 - messages</h3>");
document.body.insertAdjacentHTML(
  "beforeend",
  data2.map((s) => "<p>" + messageTemplates[s.category](s) + "</p>").join("")
);

// ===== 4 =====
let names = (async function* () {
  while (true) {
    for (let s of data2) {
      yield s.firstname;
      // wait (we have not covered this in class yet!)
      await new Promise((resolve) => setTimeout(resolve, Math.random() * 3000));
    }
  }
})();

document.body.insertAdjacentHTML("beforeend", "<h3>4 - hello</h3>");
document.body.insertAdjacentHTML(
  "beforeend",
  '<h1 style="color:red" id="hello-students"></h1>'
);
let helloEl = document.getElementById("hello-students");
(async () => {
  while (true) {
    helloEl.innerHTML = "Hello " + (await names.next()).value + "!";
  }
})();
