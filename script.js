// add delete in a list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("Delete");
  span.className = "delete";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a delete to delete the current list item
var deleted = document.getElementsByClassName("delete");
var i;
for (i = 0; i < deleted.length; i++) {
  deleted[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// to add a new task in a list when click on add button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("inputtext").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("Please Enter something!");
    } else {
      document.getElementById("mylist").appendChild(li);
    }
    document.getElementById("inputtext").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("delete");
  span.className = "delete";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < deleted.length; i++) {
    deleted[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  }
  