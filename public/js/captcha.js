/* ------ RANDOM CODES ------ */

// Function to generate combination of characters

var code = "";
var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";
var btnvalue;
var getCode = "";

function generateCode() {
  for (let i = 1; i <= 8; i++) {
    var char = Math.random() * str.length;
    code += str.charAt(char);
  }

  return code;
}

document.getElementById("codes").innerHTML = generateCode();

// Function to disable button

// function disableButton(btnvalue) {
//   document.getElementById("submit").disabled = btnvalue;
//   if (btnvalue == true) {
//     document.getElementById("submit").style.backgroundColor = "#4e7512";
//     document.getElementById("submit").style.color = "rgba(255,255,255,0.5)";
//   } else {
//     document.getElementById("submit").style.backgroundColor = "#8cc63f";
//     document.getElementById("submit").style.color = "rgba(255,255,255,1)";
//   }
// }

// var codebox = document.getElementById("codeentered");
// codebox.addEventListener("input", evaluateCode);

// function evaluateCode() {
//   getCode = document.getElementById("codeentered").value;
//   var charset1 = getCode.trim();
//   var charset2 = code.trim();

//   if (charset1.length == charset2.length && charset1 == charset2) {
//     disableButton(false);
//   }
// }

// disableButton();