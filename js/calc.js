const displayBox = $("#display-box");
const displayBox2 = $("#display-box2");

var firstnumber, secondnumber, result, operation;
// if (typeof firstnumber !=='undefined') {
//     console.log('nothin');
// } else {
//     console.log('someti');
// }
const display = (params) => {
  const value = displayBox.val() + "" + params;
  displayBox.val(value);
};
const clr = () => {
  displayBox.val("");
  displayBox2.val("");
  (firstnumber = undefined),
    (secondnumber = undefined),
    (result = undefined),
    (operation = undefined);
};
const addition = () => {
  const value =
    typeof firstnumber === "undefined"
      ? displayBox.val()
      : displayBox.val() == ""
      ? firstnumber
      : equalsto();
  firstnumber = parseInt(value);
  firstnumber = parseInt(value);
  displayBox.val("");
  operation = "add";
  displayBox2.val(firstnumber + "+");
};
const subtraction = () => {
  const value =
    typeof firstnumber === "undefined"
      ? displayBox.val()
      : displayBox.val() == ""
      ? firstnumber
      : equalsto();
  firstnumber = parseInt(value);
  displayBox.val("");
  operation = "subtract";
  displayBox2.val(firstnumber + "-");
};
const multiplication = () => {
  const value =
    typeof firstnumber === "undefined"
      ? displayBox.val()
      : displayBox.val() == ""
      ? firstnumber
      : equalsto();
  firstnumber = parseInt(value);
  displayBox.val("");
  operation = "multiply";
  displayBox2.val(firstnumber + "*");
};
const division = () => {
  const value =
    typeof firstnumber === "undefined"
      ? displayBox.val()
      : displayBox.val() == ""
      ? firstnumber
      : equalsto();
  firstnumber = parseInt(value);
  displayBox.val("");
  operation = "divide";
  displayBox2.val(firstnumber + "/");
};

const equalsto = () => {
  secondnumber = parseInt(displayBox.val());
  var operateValue;
  if (displayBox.val() == "") {
    result = firstnumber;
    displayBox.val("");
    displayBox.val(result);
    displayBox2.val(firstnumber + " = " + result);
  } else {
    if (operation == "add") {
      result = firstnumber + secondnumber;
      operateValue = "+";
    } else if (operation == "multiply") {
      result = firstnumber * secondnumber;
      operateValue = "*";
    } else if (operation == "subtract") {
      result = firstnumber - secondnumber;
      operateValue = "-";
    } else if (operation == "divide") {
      result = firstnumber / secondnumber;
      operateValue = "/";
    }
    displayBox.val("");
    displayBox.val(result);
    displayBox2.val(firstnumber + operateValue + secondnumber + " = " + result);
  }
  return result;
};
