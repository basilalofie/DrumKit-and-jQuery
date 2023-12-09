var CountButtun = document.querySelectorAll(".drum").length;

for (var i = 0; i < CountButtun; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function () { //for click click is evenlsitener function

    var buttun = this.innerHTML; //refer it to the document

    makeSound(buttun);

    AnimationKey(buttun);

  });

}

document.addEventListener("keypress", function (event) { // for keybored press

  makeSound(event.key);

  AnimationKey(event.key);

});

function AnimationKey(currentKey) {

  var keypressed = document.querySelector("." + currentKey);

  keypressed.classList.add("pressed");

  setTimeout(function() {
    keypressed.classList.remove("pressed");
  }, 100);

}


function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;


    default: console.log("enter a letter of the shown");

  }
}