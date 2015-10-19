function updateHeader() {
	var newHeader = document.getElementById("myTextBox").value;
  var oldHeader = document.getElementById("header");
  var oldP = document.getElementById("theP");
  var appear1 = document.getElementById("appear");
  oldHeader.innerHTML = "Howdy " + newHeader + "!";
  oldHeader.className =  "newColor";
  oldP.className = "disappear";
  appear1.style.visibility="visible";
  eraseButton.style.visibility="visible";
};
