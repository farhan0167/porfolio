
//The projects that I'll be including goes in the object below
let projectCard = {
  image: [
    "todo.png",
    "pricepredict.png",
    "todo.png",

  ],
  title: [
    "Yelp Extension",
    "Web Car",
    "Todo List",
  ],
  description: [
    "Replicated Yelp's website using PHP, MySQL, HTML, CSS and Javascript",
    "Created a web application using Reactjs to make an estimation of car prices in Bangladesh",
    "Built a todo list utilizing flask-restx to gain a core understanding of API and how to build them",
  ]
};
var temp = ""; //temporary variable to use the for loop for the purpose of appending
var temp2 = "";

//code for modal down below based on bootstrap doc:
var modalcode = (
  "<div class='modal fade' id='exampleModal' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>"+
  " <div class='modal-dialog' role='document'>" +
  "<div class='modal-content'>"+
  "<div class='modal-header'>"+
  "<h5 class='modal-title' id='exampleModalLabel'>Modal title</h5>"+
  "<button type='button' class='close' data-dismiss='modal' aria-label='Close'>" +
  '<span aria-hidden="true">&times;</span>' +
  '</button>'+
  '</div>' +
  '<div class="modal-body">...' +
  '</div>' +
  '<div class="modal-footer">' +
  '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'+
  '</div>'+
  '</div>'+
  '</div>' +
  '</div>'
);

for (var i = 0; i < 3; i++) {
  temp =(temp +
    "<div class='card'>" +
    "<img class='card-img' src='imgs/" + projectCard.image[i] + "' alt='preview'>" +
    "<div class='card-body'>" +
    "<p class='card-title'>" + projectCard.title[i] + "</p>" +
    "<p class='card-text'>" + projectCard.description[i] + "</p>" +
    "<button type='button' class='btn btn-primary' data-toggle='modal' data-target='#exampleModal'>Read More</button>" +
    "</div>" +
    "</div>"+ modalcode
  );
}
for (var i = 3; i < 6; i++) {
  temp2 =(temp2+
    "<div class='card'>" +
    "<img class='card-img' src='imgs/" + projectCard.image[i] + "' alt='preview'>" +
    "<div class='card-body'>" +
    "<p class='card-title'>" + projectCard.title[i] + "</p>" +
    "<p class='card-text'>" + projectCard.description[i] + "</p>" +
    "<a href='#' class='btn btn-primary'>Read More</a>" +
    "</div>" +
    "</div>"
  )
}



$(document).ready(function(){
  $(".card-group").append(temp);
  $("#feature").click(function(){
    alert("hello");
  });
  //Make nav-bar fixed after certain pixel
  $(window).scroll(function(){
    if ($(window).scrollTop() > 600) {
      $('.navbar').addClass('fixed-top');
    }

    if ($(window).scrollTop() < 601) {
      $('.navbar').removeClass('fixed-top');
    }
  })
});
