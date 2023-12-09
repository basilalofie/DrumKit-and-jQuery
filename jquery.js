

$("p").before("<button>don't touch me</button>"); //there is alost after and prepend 
$("h1").css("color", "red"); // access modify if just access it will give size 
$("h2").addClass("he");// add class or removeclass
$("p").text("nosotros muy mal") // just text
$("a").attr("href", "https://www.w3schools.com/html/html_attributes.asp")
// you can also deplo the classes or what ever the element has by .atrr ("class") 


$("button").click(function () {
    $("h1").css("color", "green");
    $("h1").toggle();
});



$(document).keypress(function (whatever) {
    $("h1").text(whatever.key);
    alert("h1 has changed");
});