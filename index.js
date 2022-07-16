
//Animations with jquery 
$("h4").on("click",function(){
    $("h4").slideUp().slideDown().animate({opacity:0.5});
});

$("h3").click(function(){
    $("h3").animate({opacity:0.5}); //animate will accept only css rules with only numeric values
});

$("p").click(function(){
    $("h1").slideToggle("slow"); //fadeOut() fadeIn() fadeToggle() toggle() slideUp() slideDown() slideToggle()
});

$("button").on("click",function(){
    $("h1").hide();
});

$(document).keypress(function(){
    $("h1").show(); 
});



//Removing and adding Elements with jQeury 
$("h1").before("<button>New</button>"); 

$("h1").after("<h2>After</h2>");

$("h1").prepend("<button>Prepend</button>");

$("h1").append("<h3>Append</h3>");

$("button").remove();




//Adding event listeners jq
$("h1").on("mouseover", function(){
    $("h1").css("color","blue");
});

$("body").keypress(function(event){
    $("h1").text(event.key);
});

$("body").keypress(function(event){
    console.log(event.key);
});

$("input").keypress(function(event){
    console.log(event.key);
});

$("h1").click(function(){
    $("h1").css("color","green");
});

$("button").click(function(){
    $("h1").css("color","yellow");
})




//manipulating attributes 'attr'
//set the value of the attr.
$("a").attr("href","https://www.yahoo.com"); //changes the href link from google to yahoo;
$("img").attr("src","dice5.png"); //this sets the dice img from dice6 to dice5;

//getting the value of the attr
console.log($("img").attr("src"));




//Changing text innerHTML
$("h1").text("Hey");
$("button").text("Press ME");
$("button").html("<em>Click them</em>")

//check for class
$("h1").hasClass("center-set");

//Add more classes with a space
$("h1").addClass("big-title center-set");

// add and remove classes. 
$("h1").addClass("big-title"); 
$("h1").removeClass("big-title");

$("h1").css("color", "#0078AA"); //jquery style of setting colors. 

document.querySelectorAll("button"); //js, select all buttons
$("button") //jq to select all buttons

document.querySelector("h1"); //js 
$("h1") //jq 
