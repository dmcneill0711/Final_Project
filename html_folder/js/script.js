/******************************************************************************************************************************
Waypoints
*******************************************************************************************************************************/ 

$(document).ready(function() {

	$('.wp1').waypoint(function() {
		$('.wp1').addClass('animated fadeInLeft');
	}, {
		offset: '75%'
	});
	$('.wp2').waypoint(function() {
		$('.wp2').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated fadeInDown');
	}, {
		offset: '55%'
	});
	$('.wp4').waypoint(function() {
		$('.wp4').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});
	$('.wp5').waypoint(function() {
		$('.wp5').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp6').waypoint(function() {
		$('.wp6').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});

});

/******************************************************************************************************************************
Nav Button
*******************************************************************************************************************************/ 

$(window).load(function() {

	$('.nav_slide_button').click(function() {
		$('.pull').slideToggle();
	});

});


$(function() {

	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top - 125
				}, 1000);
				return false;
			}
		}
	});

});

/******************************************************************************************************************************
Nav Transform
*******************************************************************************************************************************/ 

document.querySelector("#nav-toggle").addEventListener("click", function() {
	this.classList.toggle("active");
});

/******************************************************************************************************************************
Flexsliders
*******************************************************************************************************************************/ 

$(window).load(function() {

	$('#blogSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: false,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});

	$('#servicesSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: true,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});

	$('#teamSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: true,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});
	
		$('#clientSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: true,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});

});

// Main Page Start Button
var startButton = document.querySelector("#startQuiz");
// Start Page Content Div
var mainContent = document.querySelector("#mainContent");
// Card Title
var questionEl = document.querySelector("#title");
// Question Options Div
var quizContent = document.querySelector("#quizContent");
// Div For Showing Answer Is Correct/wrong
var resultDiv = document.querySelector("#answer");
// Div For Displaying Final Scores When Quiz Completed
var scoreDiv = document.querySelector("#score");

var questionIndex = 0,correct = 0 ;
var totalQuestions = questions.length;
var question , option1, option2, option3;
var choiceArray = [], divArray = [];

// Create Buttons For Choices
for(var i = 0 ; i < 3 ; i++){
    var dv = document.createElement("div");
    var ch = document.createElement("button");
    ch.setAttribute("data-index",i);
    ch.setAttribute("class","btn btn-primary rounded-pill mb-2");
    choiceArray.push(ch);
    divArray.push(dv);
}

// Create P For Showing Answer Correct/Wrong
var result = document.createElement("p");
result.setAttribute("class","text-muted font-italic");
resultDiv.appendChild(result);

// Start Quiz function
function startQuiz(){    
    buildQuestion();  
}

function buildQuestion(){
   
// Hide Start Page Content
    questionEl.style.display= "none";
    mainContent.style.display = "none";
    quizContent.style.display= "none";

// If Question Index Is Less Than Total Questions  
    if(questionIndex > totalQuestions - 1){
        return;
    }
    else{
        highRisk =  questions[questionIndex].highRisk;
        mediumRisk = questions[questionIndex].mediumRisk;
        lowRisk = questions[questionIndex].lowRisk;

// Display Question 
        questionEl.innerHTML = questions[questionIndex].title;
        questionEl.setAttribute("class","text-left");
        questionEl.style.display= "block";

        for(var j = 0 ; j < 3 ; j++){
            var index = choiceArray[j].getAttribute("data-index");
            choiceArray[j].textContent = (+index+1) +". "+questions[questionIndex].choices[index];
            divArray[j].appendChild(choiceArray[j]);
            quizContent.appendChild(divArray[j]);
        }   
    }

// Display Options
    quizContent.style.display= "block";
}

// Event Listener For Options Buttons
quizContent.addEventListener("click",function(event){
    
    var element = event.target;
    var userAnswer = element.textContent;
    var userOption   = userAnswer.substring(3, userAnswer.length);
     
// Use If Statement To Check For What Scores To Add For Each Risk Factor (With high risk being the highest point score per question available.)
    if(userOption === highRisk){
        correct = correct + 3;
            console.log(correct); 
         
        resultDiv.style.display = "block"; 
        
        result.textContent = "On To The Next Question!"
        
        setTimeout(function(){
            result.textContent = "";
        },500);

// Use Else If For The Medium Risk Answers Being The Second Highest Addition Of The Number Of Points
    } else if(userOption === mediumRisk){
        correct = correct + 1.5;
        console.log(correct); 

        resultDiv.style.display = "block"; 
        
        result.textContent = "On To The Next Question!"
        
        setTimeout(function(){
            result.textContent = "";
        },500);

// Use Else For The Low Risk Answers Accumulating 0 Points
    } else {
        console.log(correct);
        result.textContent = "On To The Next Questions!"
        
        setTimeout(function(){
            result.textContent = "";
        },500);       
    }

// Set The End Of The Quiz To Trigger When The Question Index Is 1 Greater Than The Total Number Of Questions
    questionIndex++;

        if(questionIndex > totalQuestions-1){
            
        resultDiv.style.display = "none";
        quizContent.style.display = "none";
        viewResult();
        }

    buildQuestion(); 
      
});


// Function To Show Score When Quiz Is Completed
function viewResult(){  

// Let The Taker Know That The Quiz Is Done
    questionEl.innerHTML = "Quiz Completed!";
    questionEl.style.display= "block";

// Show Their Final Score
    var s = document.createElement("p");
    s.textContent = "Your final Score : "+correct;
    scoreDiv.appendChild(s);

// Tell Them What Their Results Mean (Basically: <p></p> and appending)
    

    var highRiskResults = document.createElement("p");
    highRiskResults.textContent = "If You Scored Over 6, you are considered to be a HIGH RISK for having a stroke.";
    scoreDiv.appendChild(highRiskResults);

    var mediumRiskResults = document.createElement("p");
    mediumRiskResults.textContent = "If You Scored Between 3 And 6, you are considered to be a MEDIUM RISK for having a stroke.";
    scoreDiv.appendChild(mediumRiskResults);

    var lowRiskResults = document.createElement("p");
    lowRiskResults.textContent = "If You Scored Below A 3, you are considered to be a LOW RISK for having a stroke. ";
    scoreDiv.appendChild(lowRiskResults);
    
    form.appendChild(label);
    form.appendChild(text);    
}

//Start Button Event Listener On Start Page Which Starts The Quiz
startButton.addEventListener("click",startQuiz);


