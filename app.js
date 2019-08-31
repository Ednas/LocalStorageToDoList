// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");

for (var i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");

for (var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      var completedDiv = document.getElementById("completed");
      completedDiv.appendChild(div);
    };
  }

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


var todoItems = ["Hit the gym",
"Pay bills",
"Station Duties",
"Buy eggs & Milk",
"Study for A+ exam",
"Organize office"];
for (var i=0; i<todoItems.length; i++){
    localStorage.setItem(`todoItems${i}`, todoItems[i]);
}

function initialElement() {
    for (var j=0; j<todoItems.length; j++){
        var ToDoItemfromStorage = localStorage.getItem(`todoItems${j}`);
        console.log(`${j}`)
        var li = document.createElement("li");
        var t = document.createTextNode(ToDoItemfromStorage);
        li.appendChild(t);
        document.getElementById("myUL").appendChild(li);

// Need to create a closing span for each list item
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);

        for (i = 0; i < close.length; i++) {
            close[i].onclick = function() {
              var div = this.parentElement;
              var completedDiv = document.getElementById("completed");
              completedDiv.appendChild(div);
            //   var closed = document.getElementsByClassName('close');
            //   console.log(closed);
            //   div.removeChild(closed);
            };
          }
    }
}
initialElement();

// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        var completedDiv = document.getElementById("completed");
        completedDiv.appendChild(div);
      };
    }
  }
  