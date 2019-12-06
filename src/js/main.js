var initialIndex = 1;
var leftValue = 0;
var slideBox;
var badgesBox;
var imageWidth;
var imageCount;
var imageCountMargin;
var sliderWidth;


function menu(item) {
  document.getElementsByClassName("box-menu")[0].style.display = "none";
  document.getElementsByClassName("menu")[0].innerHTML = "☰";
  var boxToddler = document.getElementsByClassName("box-toddler")[0];
  var boxCreate = document.getElementsByClassName("box-create")[0];
  if (item === "toddler") {
    boxToddler.style.display = "block";
    boxCreate.style.display = "none";
    setDefault(0)
  } else {
    boxToddler.style.display = "none";
    boxCreate.style.display = "block";
    setDefault(1)
  }
}

function setDefault(item) {
  leftValue = 0;
  slideBox = document.getElementsByClassName("slide")[item];
  badgesBox = document.getElementsByClassName("badges")[item]
  imageWidth = slideBox.children[0].offsetWidth +50
  imageCount = slideBox.children.length
  imageCountMargin = imageCount * 100
  sliderWidth = imageWidth * imageCount + imageCountMargin
  slideBox.style.width = sliderWidth + "px"
  badges()
  active()
}


function menuToggle() {
  var menuBox = document.getElementsByClassName("box-menu")[0];
  var menu = document.getElementsByClassName("menu")[0];
  var boxToddler = document.getElementsByClassName("box-toddler")[0];
  var boxCreate = document.getElementsByClassName("box-create")[0];
  if (menuBox.style.display === "block") {
    menuBox.style.display = "none";
    boxToddler.style.display = "block";
    boxCreate.style.display = "none";
    menu.innerHTML = "☰"
  } else {
    menuBox.style.display = "block";
    boxToddler.style.display = "none";
    boxCreate.style.display = "none";
    menu.innerHTML = "X";
  }
}

function badges() {
  badgesBox.innerHTML = "";
  for (i = 0; i < imageCount; i++) {
    var node = document.createElement("SPAN");
    node.className = "badge" 
    badgesBox.appendChild(node);
  } 
}

function prev() {
    if(leftValue >= 0) return;
    leftValue += imageWidth 
    slideBox.style.left = leftValue+'px'
    active()
}

function next() {
    if(leftValue-imageWidth <= (-imageWidth * imageCount)) return;
    leftValue += -imageWidth;
    slideBox.style.left = leftValue+'px';
    active()  
}

function active() {
    for (i = 0; i < imageCount; i++) {
      slideBox.children[i].className = slideBox.children[i].className.replace(" active", "");
      badgesBox.children[i].className = badgesBox.children[i].className.replace("badge-active", "badge");
    }
    var active = Math.abs(leftValue / imageWidth)
    slideBox.children[active].className += " active";
    badgesBox.children[active].className = badgesBox.children[active].className.replace("badge", "badge-active");
}

menu("toddler")
 