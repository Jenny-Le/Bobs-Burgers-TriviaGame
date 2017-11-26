$(document).ready(function() {
	var location = "";
	var toy = "";
	var itch = "";
	var holiday = "";
	var collection = "";
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

  	var count = 30
  	timer = setInterval(function() {
    	$("#counter").html(count--);
    	if(count == -1) clearInterval(timer);
	}, 1000);
})

 	