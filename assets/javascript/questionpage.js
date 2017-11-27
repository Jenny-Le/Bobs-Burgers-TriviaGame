$(document).ready(function() {
	var location = "";
	var toy = "";
	var itch = "";
	var holiday = "";
	var collection = "";
	var correctAnswers = 0;
	var inCorrectAnswers = 0;
	var unAnswered = 0;
	var resultCalculator = function() {
		if(location == "New York"){
			correctAnswers++
			// else statements do not need parenthasis ()
			// the statement needs to be in brakets
		} else if(location == "") {
			unAnswered++
		} else {
			inCorrectAnswers++
		};

		if(toy == "Coochie Kopi"){
			correctAnswers++
		} else{
			inCorrectAnswers++
		};
		if(itch == "Her crotch"){
			correctAnswers++
		} else{
			inCorrectAnswers++
		}
		if(holiday == "Thanksgiving"){
			correctAnswers++
		} else{
			inCorrectAnswers++
		}
		if(collection == "Porcelain babies"){
			correctAnswers++
		} else{
			inCorrectAnswers++
		}

		var resultString = ""
		resultString += "<h2> Correct Answers: " + correctAnswers + "</h2>"
		resultString += "<h2> Incorrect Answers: " + inCorrectAnswers + "</h2>"
		resultString += "<h2> Unanswered: " + unAnswered + "</h2>"

		$( "body" ).replaceWith(resultString);
	};		
	//attached click handler to input radio button
	$("input[type=radio]").click(function(){
		var formName = $(this).closest("form").attr('name')
		if (formName == "location"){
			location = $(this).val();
			console.log(location);
		} else if (formName == "toy")  {
			toy = $(this).val();
			console.log(toy);
		} else if (formName == "itch") { 
		  	itch = $(this).val();
		  	console.log(itch);
		} else if (formName == "holiday") { 
		  	holiday = $(this).val();
		  	console.log(holiday);
		} else if (formName == "collection") { 
		  	collection = $(this).val();
		  	console.log(collection);
		}
     	console.log(formName);
  	});

  	var count = 10
  	timer = setInterval(function() {
    	$("#counter").html(count--);
    	if(count == -1){
    		clearInterval(timer);
			
    		resultCalculator();
    	};
	}, 1000);
})






		

	
 	