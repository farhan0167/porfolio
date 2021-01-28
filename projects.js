var yelpsum = (
"This project is a replication of <a target='_blank' href='https://www.yelp.com/search?cflt=restaurants&find_loc=New+York%2C+NY'> Yelp.com</a> as part of our Web Applications Development class. Throughout the semester we were introduced to several technologies to develop web applications, and this project is a showcase of what I learnt. My extension of the popular review website helps users browse through restaurants and leave reviews. All the data, such as restaurant and reviews, are stored in a MySQL database from which it is displayed to the user. This was a team effort; I was responsible for producing the prototype and leading my team through the software design process. I was also responsible for the database design/implementation, and to turn the HTML and CSS layout, created by my team, into PHP code. "
);
var webcarsum = (
  "During my travel back home during Winter 2019, I worked on an idea to estimate the price of used cars in Bangladesh. People back home still rely on brick-and-mortar dealerships, and websites that list cars have limited functionalities such as displaying photos, car features, and contact information. The project’s sole purpose was to automate a price estimation feature that would be displayed on a user interface. The data used to make the prediction was scrapped from <a target='_blank' href='https://bikroy.com/en'> Bikroy.com</a>, using the BeautifulSoup package in Python. I performed an analysis on the data, cleaned it and fitted a linear regression model to predict the prices. By developing the website, a user would only need to select the car and its features to get a price estimate instantaneously, which previously would have taken over an hour to do manually."
);
var todosum = (
  "Having attended two Hackathons as a participant and one hackathon as a mentor, I’ve come across the term API quite often. I worked on this project during my free time to understand how an API is built from scratch by following a Udemy instruction. Through this project, I developed an understanding of how flask applications are structured for building API’s and how resources can be used to interact with the frontend. This project also allowed me to strengthen my object-oriented programming skills in Python. There are definitely some areas to improve such as having an option for PUT, and making the application more interactive."
);



//The projects that I'll be including goes in the object below
let projectCard = {
  image: [
    "yelp.png",
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
  ],
  location: [
    "https://github.com/farhan0167/yelp-extension",
    "https://github.com/farhan0167/web-car",
    "https://github.com/farhan0167/todo-list"
  ],
  summary: [yelpsum, webcarsum, todosum],
  takeaway: [
    "Team Work, Project Planning, Leadership, Code Review, Software Design",
    "Web Scrapping, Data Cleaning, Data Engineering, Data Analysis, Project Pipeline Understanding",
    "API Development, Resources and Models, Database Implementation"
  ],
  languages: [
    "HTML, CSS, Javascript/Jquery, PHP, MySQL",
    "Reactjs, Python",
    "Reactjs, Python, SQL Alchemy"
  ]
};
var temp = ""; //temporary variable to use the for loop for the purpose of appending
var temp2 = "";

//code for modal down below based on bootstrap doc:
/*var modalcode = (
  "<div class='modal fade' id='exampleModal' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>"+
  " <div class='modal-dialog' role='document'>" +
  "<div class='modal-content'>"+
  "<div class='modal-header'>"+
  "<h5 class='modal-title' id='exampleModalLabel'>"+projectCard.title[i]+"</h5>"+
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
  '</div>' //end of modal
);
*/
for (var i = 0; i < 3; i++) {
  temp =(temp +
    '<div class="card project-card">' +
    "<div id='card-header-color"+i+"' class='card-header'></div>"+
    "<img class='card-img' src='imgs/" + projectCard.image[i] + "' alt='preview'>" +
    "<div class='card-body'>" +
    "<p class='card-title'>" + projectCard.title[i] + "</p>" +
    "<p class='card-text'>" + projectCard.description[i] + "</p>" +
    "<button type='button' class='btn btn-primary project-card-btn' data-toggle='modal' data-target='#exampleModalLong" + i + "'>Read More</button>" +
    "<div class='modal fade' id='exampleModalLong" + i + "' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>"+ //start of modal
    " <div class='modal-dialog' role='document'>" +
    "<div class='modal-content'>"+
    "<div class='modal-header'>"+
    "<h3 class='modal-title' id='exampleModalLabel'>"+projectCard.title[i]+"</h3>"+
    "<button type='button' class='close btn-danger' data-dismiss='modal' aria-label='Close'>" +
    '<span aria-hidden="true">&times;</span>' +
    '</button>'+
    '</div>' + //end of div started on line 65.
    '<div class="modal-body">' +
    '<div><h4>Summary</h4>' +
    '<p class="modal-text">'+ projectCard.summary[i] + '</p>'+
    '<h4>Takeaway</h4><p class="modal-text" id="takeaway">' + projectCard.takeaway[i] + '</p>'+
    '<h4>Languages</h4><p class="modal-text" id="languages">' + projectCard.languages[i] + '</p>'+
    '</div>' + //end of div started on line 72.
    '</div>' + //end of div started on line 64.
    '<div class="modal-footer">' +
    "<a target='_blank' class='viewcode' href= '" + projectCard.location[i] + "'><button type='button' class='btn btn-warning'>View Code</button></a>"+
    '<button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>'+
    '</div>'+
    '</div>'+
    '</div>' +
    '</div>' +//end of modal
    "</div>" +
    "</div>" //end of card
  );
}

/*for (var i = 3; i < 6; i++) {
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
} //use this for another row of projects */



$(document).ready(function(){
  $(".card-group").append(temp);
  $("#feature").click(function(){
    alert("hello");//change this when you work there
  });
  //Make nav-bar fixed after certain pixel
  $(window).scroll(function(){
    if ($(window).scrollTop() > 700) {
      $('.navbar').addClass('fixed-top');
    }

    if ($(window).scrollTop() < 701) {
      $('.navbar').removeClass('fixed-top');
    }
  })
});
