getStyle = function() {
  var element = document.getElementsByTagName("div")[0];
  element.classList.add("element");
}

changeElement = function() {
  var element = document.getElementById('element');
  element.classList.add("changeElement");
}

addText = function() {
  var element = document.getElementsByClassName("element")[1];
  var text = document.createTextNode("Dit is tekst, wat leuk.");
  element.appendChild(text);
}

addList = function() {
  var element = document.getElementsByClassName("element")[2];
  var list = document.createElement("li");
  var item = document.createTextNode("Item");
  list.appendChild(item);
  element.appendChild(list);
}
