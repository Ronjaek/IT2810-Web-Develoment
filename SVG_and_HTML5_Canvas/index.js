/* This function registers any clicks in the SVG div with ID="section1" 
which then make the cat meow and show its tongue*/
$(document).ready(function(){
  $("#section1").click(function() {
			var catSound = new Audio("Cat_Meow.mp3");
			catSound.play();

			setTimeout(function() {
				$("#svg_speech_bubble").fadeIn();
				$("#svg_cat_tongue").show();	
			}, 400);
			
			setTimeout(function() {
				$("#svg_cat_tongue").hide();	
			}, 1000);

			setTimeout(function() {
				$("#svg_cat_tongue").show();
			}, 2500);

			setTimeout(function() {
				$("#svg_cat_tongue").hide();	
				$("#svg_speech_bubble").fadeOut();
			}, 4500);
  });
});

// Register when the mouse pointer enters section1 and makes the cat fatter 
$(document).ready(function(){
  $("#section1").hover(function() {
		$("#cat_body").attr("ry", "90.5");
		$("#cat_body").attr("rx", "143.5");
		$("#cat_leg1").attr("y", "438");
		$("#cat_leg2").attr("y", "440");
		$("#cat_tail").attr("y", "237.5");
	}, function() {
		$("#cat_body").attr("ry", "70.5");
		$("#cat_body").attr("rx", "123.5");
		$("#cat_leg1").attr("y", "418");
		$("#cat_leg2").attr("y", "420");
		$("#cat_tail").attr("y", "257.5");
	});
});


// The following code will create an artwork with Canvas

// Function to draw the cat
function draw_cat() {
	// Initialization
	var ctx = document.getElementById("section2").getContext("2d");
	ctx.setTransform(1, 0, 0, 1, 0, 0); // remove any earlier changes

	// The cat´s body
	ctx.beginPath();
	ctx.scale(1, 0.6);
	ctx.arc(260, 570, 130, 0, 2*Math.PI);
	ctx.fillStyle = "#BBBBBB";
	ctx.fill();
	ctx.lineWidth=2;
	ctx.strokeStyle="black";
	ctx.stroke();

	// The cat´s left legs
	ctx.moveTo(220, 680);
	ctx.lineTo(180, 780);
	ctx.lineTo(195, 790);
	ctx.lineTo(235, 690);
	ctx.lineTo(220, 680);
	ctx.fillStyle = "#BBBBBB";
	ctx.fill();
	ctx.lineWidth=2;
	ctx.strokeStyle="black";
	ctx.stroke();
	// The cat´s right leg
	ctx.moveTo(300, 690);
	ctx.lineTo(340, 790);
	ctx.lineTo(355, 780);
	ctx.lineTo(315, 680);
	ctx.lineTo(300, 690);
	ctx.fillStyle = "#BBBBBB";
	ctx.fill();
	ctx.lineWidth=2;
	ctx.strokeStyle="black";
	ctx.stroke();

	// The cat´s tail
	ctx.moveTo(135, 530);
	ctx.lineTo(80, 410);
	ctx.lineTo(100, 385);
	ctx.lineTo(155, 505);
	ctx.lineTo(135, 530);
	ctx.fillStyle = "#BBBBBB";
	ctx.fill();
	ctx.lineWidth=2;
	ctx.strokeStyle="black";
	ctx.stroke();

	// The cat´s head
	ctx.setTransform(1, 0, 0, 1, 0, 0); // remove the scaling that was set earlier
	ctx.beginPath();
	ctx.arc(420, 280, 50, 0, 2 * Math.PI);
	ctx.fillStyle = "#BBBBBB";
	ctx.fill();
	ctx.stroke();

	// The cat´s left ear
	ctx.moveTo(370, 270);
	ctx.lineTo(375, 220);
	ctx.lineTo(415, 230);
	// The cat´s right ear
	ctx.moveTo(470, 270);
	ctx.lineTo(465, 220);
	ctx.lineTo(420, 230);
	ctx.fillStyle = "#BBBBBB";
	ctx.fill();
	ctx.stroke();

	// The cat´s eyes
	ctx.beginPath();
	ctx.scale(1, 0.8);
	ctx.arc(400, 325, 8, 0, 2 * Math.PI);
	ctx.arc(440, 325, 8, 0, 2 * Math.PI);
	ctx.fillStyle = "black";
	ctx.fill();

	// The cat´s nose
	ctx.beginPath();
	ctx.setTransform(1, 0, 0, 1, 0, 0); // remove the scaling that was set earlier
	ctx.arc(420, 285, 5, 0, 2 * Math.PI);
	ctx.fillStyle = "#FFAFCC";
	ctx.fill();
	ctx.stroke();

	// The cat´s mouth
	ctx.moveTo(420, 290);
	ctx.lineTo(420, 305);
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(413, 305, 7, 0, Math.PI);
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(427, 305, 7, 0, Math.PI);
	ctx.stroke();
}

// Function to draw the sun
function draw_sun() {
	// Initialization
	var ctx = document.getElementById("section2").getContext("2d");

	ctx.beginPath();
	ctx.rotate(30 * Math.PI / 180);
	ctx.rect(550, -200, 100, 20);
	ctx.fillStyle = "yellow";
	ctx.fill();
	ctx.stroke();

	ctx.setTransform(1, 0, 0, 1, 0, 0); // remove the scaling that was set earlier
	ctx.beginPath();
	ctx.rect(380, 70, 100, 20);
	ctx.fillStyle = "yellow";
	ctx.fill();
	ctx.stroke();

	ctx.setTransform(1, 0, 0, 1, 0, 0); // remove the scaling that was set earlier
	ctx.beginPath();
	ctx.rotate(35 * Math.PI / 180);
	ctx.rect(330, -250, 100, 20);
	ctx.fillStyle = "yellow";
	ctx.fill();
	ctx.stroke();

	ctx.setTransform(1, 0, 0, 1, 0, 0); // remove the scaling that was set earlier
	ctx.beginPath();
	ctx.rotate(140 * Math.PI / 180);
	ctx.rect(-505, -410, 100, 20);
	ctx.fillStyle = "yellow";
	ctx.fill();
	ctx.stroke();

	ctx.setTransform(1, 0, 0, 1, 0, 0); // remove the scaling that was set earlier
	ctx.beginPath();
	ctx.rotate(-30 * Math.PI / 180);
	ctx.rect(270, 330, 100, 20);
	ctx.fillStyle = "yellow";
	ctx.fill();
	ctx.stroke();

	ctx.setTransform(1, 0, 0, 1, 0, 0); // remove the scaling that was set earlier
	ctx.beginPath();
	ctx.rotate(-90 * Math.PI / 180);
	ctx.rect(-227, 518, 100, 20);
	ctx.fillStyle = "yellow";
	ctx.fill();
	ctx.stroke();

	ctx.setTransform(1, 0, 0, 1, 0, 0); // remove the scaling that was set earlier
	ctx.beginPath();
	ctx.arc(530, 80, 50, 0, 2 * Math.PI);
	ctx.fillStyle = "yellow";
	ctx.fill();
	ctx.stroke();
}

// Function to draw the tongue
function draw_tongue() {
	// Initialization
	var ctx = document.getElementById("section2").getContext("2d");
	ctx.setTransform(1, 0, 0, 1, 0, 0); // remove the scaling that was set earlier

	// The cat´s tongue
	ctx.beginPath();
	ctx.scale(0.6, 1);
	ctx.arc(700, 317, 7, 0, 2*Math.PI);
	ctx.fillStyle = "#FFAFCC";
	ctx.fill();
	ctx.stroke();
}

// Function to draw the spech bubble
function draw_speech_bubble() {
	// Initialization
	var ctx = document.getElementById("section2").getContext("2d");
	ctx.setTransform(1, 0, 0, 1, 0, 0); // remove the scaling that was set earlier

	// The biggest speech bubble
	ctx.beginPath();
	ctx.scale(1, 0.5)
	ctx.arc(200, 260, 90, 0, 2*Math.PI);
	ctx.fillStyle = "#5B9BA2";
	ctx.fill();
	ctx.stroke();
	ctx.font = "50px 'Trebuchet MS', Gadget, sans-serif";
	ctx.fillStyle = "black";
	ctx.fillText("Meow!", 135, 280);

	// A smaller bubble
	ctx.beginPath();
	ctx.arc(310, 340, 23, 0, 2*Math.PI);
	ctx.fillStyle = "#5B9BA2";
	ctx.fill();
	ctx.stroke();

	// The second smallest bubble
	ctx.beginPath();
	ctx.arc(355, 380, 14, 0, 2*Math.PI);
	ctx.fillStyle = "#5B9BA2";
	ctx.fill();
	ctx.stroke();
	
	// The smallest bubble
	ctx.beginPath();
	ctx.arc(380, 410, 6, 0, 2*Math.PI);
	ctx.fillStyle = "#5B9BA2";
	ctx.fill();
	ctx.stroke();
}

// Function to remove the spech bubble
function remove_speech_bubble() {
	// Initialization
	var ctx = document.getElementById("section2").getContext("2d");
	ctx.setTransform(1, 0, 0, 1, 0, 0); // remove the scaling that was set earlier

	ctx.clearRect(100, 80, 270, 180);
	ctx.clearRect(300, 200, 100, 100);
}

// Function to make the cat fatter by removing the old one and draw a fatter one
function make_a_fatter_cat() {
	// Initialization
	var ctx = document.getElementById("section2").getContext("2d");
	ctx.setTransform(1, 0, 0, 1, 0, 0); // remove the scaling that was set earlier

	ctx.clearRect(70, 200, 430, 300);

	// The cat´s body
	ctx.beginPath();
	ctx.scale(1, 0.6);
	ctx.arc(260, 570, 150, 0, 2*Math.PI);
	ctx.fillStyle = "#BBBBBB";
	ctx.fill();
	ctx.lineWidth=2;
	ctx.strokeStyle="black";
	ctx.stroke();

	// The cat´s left legs
	ctx.moveTo(220, 700);
	ctx.lineTo(180, 800);
	ctx.lineTo(195, 810);
	ctx.lineTo(235, 710);
	ctx.lineTo(220, 700);
	ctx.fillStyle = "#BBBBBB";
	ctx.fill();
	ctx.lineWidth=2;
	ctx.strokeStyle="black";
	ctx.stroke();
	// The cat´s right leg
	ctx.moveTo(300, 710);
	ctx.lineTo(340, 810);
	ctx.lineTo(355, 800);
	ctx.lineTo(315, 700);
	ctx.lineTo(300, 710);
	ctx.fillStyle = "#BBBBBB";
	ctx.fill();
	ctx.lineWidth=2;
	ctx.strokeStyle="black";
	ctx.stroke();

	// The cat´s tail
	ctx.moveTo(135, 510);
	ctx.lineTo(80, 390);
	ctx.lineTo(100, 365);
	ctx.lineTo(155, 485);
	ctx.lineTo(135, 510);
	ctx.fillStyle = "#BBBBBB";
	ctx.fill();
	ctx.lineWidth=2;
	ctx.strokeStyle="black";
	ctx.stroke();

	// The cat´s head
	ctx.setTransform(1, 0, 0, 1, 0, 0); // remove the scaling that was set earlier
	ctx.beginPath();
	ctx.arc(420, 280, 50, 0, 2 * Math.PI);
	ctx.fillStyle = "#BBBBBB";
	ctx.fill();
	ctx.stroke();

	// The cat´s left ear
	ctx.moveTo(370, 270);
	ctx.lineTo(375, 220);
	ctx.lineTo(415, 230);
	// The cat´s right ear
	ctx.moveTo(470, 270);
	ctx.lineTo(465, 220);
	ctx.lineTo(420, 230);
	ctx.fillStyle = "#BBBBBB";
	ctx.fill();
	ctx.stroke();

	// The cat´s eyes
	ctx.beginPath();
	ctx.scale(1, 0.8);
	ctx.arc(400, 325, 8, 0, 2 * Math.PI);
	ctx.arc(440, 325, 8, 0, 2 * Math.PI);
	ctx.fillStyle = "black";
	ctx.fill();

	// The cat´s nose
	ctx.beginPath();
	ctx.setTransform(1, 0, 0, 1, 0, 0); // remove the scaling that was set earlier
	ctx.arc(420, 285, 5, 0, 2 * Math.PI);
	ctx.fillStyle = "#FFAFCC";
	ctx.fill();
	ctx.stroke();

	// The cat´s mouth
	ctx.moveTo(420, 290);
	ctx.lineTo(420, 305);
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(413, 305, 7, 0, Math.PI);
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(427, 305, 7, 0, Math.PI);
	ctx.stroke();
}

// Function to remove the fat cat
function remove_fat_cat() {
	// Initialization
	var ctx = document.getElementById("section2").getContext("2d");
	ctx.setTransform(1, 0, 0, 1, 0, 0); // remove the scaling that was set earlier

	ctx.clearRect(50, 200, 430, 300);
}

// Starts with drawing the cat and the sun in Section2 (the artwork made with Canvas)
$(document).ready(function() {
	draw_cat();
	draw_sun();
});

// A variable to check if the user is hovering over section2
var userHovering = false;

// Makes the cat in Section2 meow and show its tongue when clicking inside the frame
$(document).ready(function() {
	$("#section2").click(function() {
		var catSound = new Audio("Cat_Meow.mp3");
		catSound.play();

		setTimeout(function() {
			draw_tongue();
			draw_speech_bubble();				
		}, 400);
	
		setTimeout(function() {
			// Calls the "draw_cat" function to overwrite the tongue
			if (userHovering) {
				make_a_fatter_cat();
			}
			else {
				draw_cat();	
			}
		}, 1000);

		setTimeout(function() {
			draw_tongue();
		}, 2500);

		setTimeout(function() {
			remove_speech_bubble();
			if (userHovering) {
				make_a_fatter_cat();
			}
			else {
				draw_cat();	
			}			
		}, 4500);		
	});
});

// Register when the mouse pointer enters section2 and makes the cat fatter 
$(document).ready(function(){
  $("#section2").hover(function() {
		userHovering = true;
		make_a_fatter_cat();}, function() {
		userHovering = false;
		remove_fat_cat();
		draw_cat();
	});
});

// Open the modal when clicking on the button 
$(document).ready(function(){
  $("#modalButton").click(function(e) {
		e.stopPropagation();
    $("#myModal").toggle();
  });
});

// Close the modal when clicking on the x 
$(document).ready(function(){
  $("#closeModal").click(function() {
    $("#myModal").toggle();
  });
});

// Close the modal by clicking anywhere except the modal
$(document).ready(function(){
	$('body').click(function(e){
		if (e.target.id !== "myModal")	return;

		if ($("#myModal").is(":visible")) {
			$("#myModal").hide();
		}
	});
});

// Button to toggle the documentation
$(document).ready(function(){
	$("#footerButton").click(function() {
		$("#myFooter").toggle();
	});
});

