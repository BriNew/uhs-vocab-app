$(document).ready(function() {
	let year, type_select;
	let englishInput, yearInput, typeSelectInput, laoInput, secret, pageNum;
	

	function getTerms(page) {
		let terms;
		$('#results').show();
		$('#user_student').hide();
		$('#user_teacher').hide();
		$('#user_select').hide();
		$('#results_static').hide();
		$('#form_post').hide();
		$('#select_container').hide();
		$('#page_button_container').show();


		// $('#mobile_dropdown_class_inner').show();
		// $('#mobile_dropdown_part_inner').show();
		$.getJSON("/terms", {year: year, type_select: type_select, page: page},
			function(data) {
				console.log(data);
				// pageNum = page;
				// console.log('you are looking at page', pageNum);
				


			  terms = data.terms.map((term, index) => showTerms(term));
  			$('#results').html(terms);
  			console.log(terms.length);
  			if(terms.length == 0){
					$('#no_results_message').show();
					console.log("please search again");
				}
			});

			
	};	

	$('a[href="#next_page_button"]').click(function(){
		pageIncrement();
		getTerms(pageNum);
	})

	$('a[href="#previous_page_button"]').click(function(){
		pageDecrement();
		getTerms(pageNum);
	})

	pageNum = 0;
	
	function pageIncrement() {
		pageNum += 1;
		console.log('you have clicked this many times:' + pageNum);
		$('#page').text(pageNum);

	}

	function pageDecrement() {
		pageNum -=1;
		if(pageNum < 1){
			pageNum = 1;
		}
		$('#page').text(pageNum);
	}


	$('a[href="#nav_year_3"]').click(function(){
		pageNum = 0;
	    $('#year').val(3);
	    year = $('#year').val();
	    // $('#mobile_dropdown_class_inner').hide();
	    $('#no_results_message').hide();
	    $('#class_selected').text('Class: Year ' + year);
	    pageIncrement();
	    getTerms(pageNum);

 }); 



	




	function showTerms(term) {
	  return `

		          <div class="frame">
		            <div class="card" id="card1">
		              <div class="card_title" id="title1">
		                <h3 class="word">${term.english}</h3>
		              </div>
		              <div class="card_content" id="content1">
		                <p class="definition" id="year">Year ${term.year}</p>
		                <p class="definition">${term.type_select}</p>
		                <p class="definition">${term.lao}</p>
		              </div>
		            </div>
		          </div>


      `;
	}


	$('a[href="#nav_user_teacher"]').click(function(){
		let cssLink = $('link[href*="index_student.css"]');
		cssLink.replaceWith('<link href="index.css" type="text/css" rel="stylesheet">');
		$('#part_selected').text('Part');
		$('#class_selected').text('Class');
		$('#select_container').show();
		$('#results_static').show();
		$('#results').hide();
		$('#user_student').hide();
		$('#user_select').hide();
		$('#user_teacher').show();
		$('#form_post').hide();
 	}); 

 	$('a[href="#nav_user_student"]').click(function(){
 		let cssLink = $('link[href*="index.css"]');
		cssLink.replaceWith('<link href="index_student.css" type="text/css" rel="stylesheet">');
		$('#part_selected').text('Part');
		$('#class_selected').text('Class');
 		$('#select_container').show();
		$('#results_static').show();
		$('#results').hide();
		$('#user_student').show();
		$('#user_select').hide();
		$('#user_teacher').hide();
		$('#form_post').hide();
 	}); 

	$('a[href="#teacher_select"]').click(function(){
		let cssLink = $('link[href*="index_student.css"]');
		cssLink.replaceWith('<link href="index.css" type="text/css" rel="stylesheet">');
		$('#user_student').hide();
		$('#user_select').hide();
		$('#user_teacher').show();
 	}); 

 	$('a[href="#student_select"]').click(function(){
		$('#user_student').show();
		$('#user_select').hide();
 	}); 

 	$('a[href="#nav_user_teacher"]').click(function(){
 		let user;
    $('#user').val('Teacher');
    user = $('#user').val();
    // $('#mobile_dropdown_class_inner').hide();
    $('#no_results_message').hide();
    $('#nav_user_selected').text('User: ' + user);
    // getTerms();
    console.log(user);
 }); 

 	$('a[href="#nav_user_student"]').click(function(){
 		let user;
    $('#user').val('Student');
    user = $('#user').val();
    // $('#mobile_dropdown_class_inner').hide();
    $('#no_results_message').hide();
    $('#nav_user_selected').text('User: ' + user);
    // getTerms();
    console.log(user);
 });



// $('a[href="#student_select"]').prop('disabled', true);
// $('#add_word').css("display", "none");

if (window.matchMedia("(max-width: 640px)").matches) {
    $('a[href="#mobile_dropdown_class_outer"]').click(function(){
  		$('#mobile_dropdown_class_inner').toggle();
 }); 
}; 

if (window.matchMedia("(max-width: 640px)").matches) {
    $('a[href="#mobile_dropdown_part_outer"]').click(function(){
  		$('#mobile_dropdown_part_inner').toggle();
 }); 
}; 

if (window.matchMedia("(max-width: 640px)").matches) {
    $('a[href="#mobile_dropdown_user_outer"]').click(function(){
  		$('#mobile_dropdown_user_inner').toggle();
 }); 
}; 

if (window.matchMedia("(max-width: 640px)").matches) {
    $('a[href="#nav_part_all"]').click(function(){
  		$('#mobile_dropdown_part_inner').toggle();
 }); 
}; 

if (window.matchMedia("(max-width: 640px)").matches) {
    $('a[href="#nav_part_prefix"]').click(function(){
  		$('#mobile_dropdown_part_inner').toggle();
 }); 
}; 

if (window.matchMedia("(max-width: 640px)").matches) {
    $('a[href="#nav_part_root"]').click(function(){
  		$('#mobile_dropdown_part_inner').toggle();
 }); 
}; 

if (window.matchMedia("(max-width: 640px)").matches) {
    $('a[href="#nav_part_suffix"]').click(function(){
  		$('#mobile_dropdown_part_inner').toggle();
 }); 
}; 

if (window.matchMedia("(max-width: 640px)").matches) {
    $('a[href="#nav_year_all"]').click(function(){
  		$('#mobile_dropdown_class_inner').toggle();
 }); 
}; 

if (window.matchMedia("(max-width: 640px)").matches) {
    $('a[href="#nav_year_1"]').click(function(){
  		$('#mobile_dropdown_class_inner').toggle();
 }); 
}; 

if (window.matchMedia("(max-width: 640px)").matches) {
    $('a[href="#nav_year_2"]').click(function(){
  		$('#mobile_dropdown_class_inner').toggle();
 }); 
}; 

if (window.matchMedia("(max-width: 640px)").matches) {
    $('a[href="#nav_year_3"]').click(function(){
  		$('#mobile_dropdown_class_inner').toggle();
 }); 
}; 

if (window.matchMedia("(max-width: 640px)").matches) {
    $('a[href="#nav_user_teacher"]').click(function(){
  		$('#mobile_dropdown_user_inner').toggle();
 }); 
}; 

if (window.matchMedia("(max-width: 640px)").matches) {
    $('a[href="#nav_user_student"]').click(function(){
  		$('#mobile_dropdown_user_inner').toggle();
 }); 
}; 




 



 //  $('a[href="#mobile_dropdown_class_outer"]').click(function(){
 //  	$('#mobile_dropdown_class_inner').toggle();
 // }); 

 //    $('a[href="#mobile_dropdown_part_outer"]').click(function(){
 //  	$('#mobile_dropdown_part_inner').toggle();
 // }); 

		// $('#class_selected').text('Class: Year ' + year);
		// $('#part_selected').text('Part: ' + type_select);

  $('a[href="#add_word"]').click(function(){
  	$('#results').hide();
    $('#form_post').show();
    $('#no_results_message').hide();
    $('#user_student').hide();
		$('#user_teacher').hide();
		$('#results_static').hide();
		// $('#instructions_container').hide();
		$('#select_container').hide();
 }); 

  $('a[href="#nav_year_all"]').click(function(){
  	$("form_all_years").submit();
    // event.preventDefault();
  	$('#year').val(null);
  	year = $('#year').val();
  	// $('#mobile_dropdown_class_inner').hide();
    $('#results').show();
    $('#form_post').hide();
    $('#no_results_message').hide();
    $('#class_selected').text('Class: All');
    pageIncrement();
    getTerms(pageNum);
    // $('#year').val();
    // year = $('#year').val();
    // console.log(year);
 }); 

  $('a[href="#nav_year_1"]').click(function(){
  	pageNum = 0;
    $('#year').val(1);
    year = $('#year').val();
    // $('#mobile_dropdown_class_inner').hide();
    $('#no_results_message').hide();
    $('#class_selected').text('Class: Year ' + year);
    pageIncrement();
    getTerms(pageNum);
    console.log(year);
 }); 
 
  $('a[href="#nav_year_2"]').click(function(){
    $('#year').val(2);
    year = $('#year').val();
    // $('#mobile_dropdown_class_inner').hide();
    $('#no_results_message').hide();
    $('#class_selected').text('Class: Year ' + year);
    pageIncrement();
    getTerms(pageNum);
    console.log(year);
 }); 
 
 //  $('a[href="#nav_year_3"]').click(function(){
 //    $('#year').val(3);
 //    year = $('#year').val();
 //    // $('#mobile_dropdown_class_inner').hide();
 //    $('#no_results_message').hide();
 //    $('#class_selected').text('Class: Year ' + year);
 //    getTerms(3);
 //    console.log(year);
 // }); 

   $('a[href="#nav_part_all"]').click(function(){
  	pageNum = 0;
  	$("form_all_parts").submit();
  	$('#part').val(null);
  	type_select = $('#part').val();
  	// $('#mobile_dropdown_part_inner').hide();
    $('#results').show();
    $('#form_post').hide();
    $('#no_results_message').hide();
    $('#part_selected').text('Part: All');
    pageIncrement();
    getTerms(pageNum);
 }); 

	$('a[href="#nav_part_prefix"]').click(function(){
	pageNum = 0;
    $('#part').val('prefix');
    type_select = $('#part').val();
    // $('#mobile_dropdown_part_inner').hide();
    $('#no_results_message').hide();
    $('#part_selected').text('Part: ' + type_select);
    pageIncrement();
    getTerms(pageNum);
    console.log(type_select);
 }); 
 
	$('a[href="#nav_part_root"]').click(function(){
	pageNum = 0;
    $('#part').val('root');
    type_select = $('#part').val();
    // $('#mobile_dropdown_part_inner').hide();
    $('#no_results_message').hide();
    $('#part_selected').text('Part: ' + type_select);
    pageIncrement();
    getTerms(pageNum);
    console.log(type_select);
 }); 
 
  $('a[href="#nav_part_suffix"]').click(function(){
  	pageNum = 0;
    $('#part').val('suffix');
    type_select = $('#part').val();
    // $('#mobile_dropdown_part_inner').hide();
    $('#no_results_message').hide();
    $('#part_selected').text('Part: ' + type_select);
    pageIncrement();
    getTerms(pageNum);
    console.log(type_select);
 }); 

	$('.subtitles_nav_part').change(function(event) {
		type_select = $(this).val();
		console.log(type_select);
	})

	$('#form_post').submit(event => {
	  event.preventDefault();
	  $('#year').val(null);
	  year = $('#year').val();
	  $('#part').val(null);
	  type_select = $('#part').val();
	  $('#class_selected').text('Class: All');
	  $('#part_selected').text('Part: All');
	  $('#form_post').hide();
	  $('#results_static').hide();
		$('#select_container').hide();


	  englishInput = $('#english_input').val();
	  // $('#english_new').text(englishInput);
	  console.log(englishInput);

	  yearInput = $('#year_input').val();
	  // $('#year_new').text(yearInput);
	  console.log(yearInput);

	  typeSelectInput = $('#type_select_input').val();
	  // $('#type_select_new').text(typeSelectInput);
	  console.log(typeSelectInput);

	  laoInput = $('#lao_input').val();
	  // $('#lao_new').text(laoInput);
	  console.log(laoInput);

	  secret = $('#secret').val();
	  // $('#lao_new').text(laoInput);
	  console.log(secret);

	  let payload = {
	  		english: englishInput, 
	  		year: yearInput, 
	  		type_select: typeSelectInput, 
	  		lao: laoInput,
	  		secret: secret
	  	};
	  console.log(payload);
	  $.ajax({
	  	type: "POST",
	  	url: "/terms",
	  	data: JSON.stringify(payload),
	  	dataType: "json",
	  	contentType: "application/json",
	  	statusCode: {
		    401: function() {
		    	$('#results').hide();

		       // alert( 'The provided secret is not correct' );

		       	$('#no_results_message').text('The provided secret is not correct');
		       	$('#no_results_message').show();

		    }
		  }
	  	// success: function(res){

	  	// 	console.log("Hey it worked");
	  	// 	console.log(res);
	  	// }
	  

	  })
	   getTerms();
	   $('#results').show();
	});

// 	$.ajax({
//   statusCode: {
//     404: function() {
//        alert( "page not found" );
//     }
//   }
// });

 //  $('#find_terms').submit(function(event) {
 //    event.preventDefault();
 //    getTerms();
	// });



  $('a[href="#find_terms"]').click(function(){
    event.preventDefault();
    $('#results').show();
    $('#form_post').hide();
    getTerms();
 }); 

 //   $('a[href="#find_terms"]').click(function(){
 //    event.preventDefault();
 //    $("#form_get").submit();
 //    $('#form_post').hide();
 //    $('#results').show();
 //    getTerms();
 //    return false;
 // }); 

//    $("selector_for_the_anchor").click(function() {
//     $("selector_for_the_form").submit();
//     return false;
// });


 //   $('#form_get').submit(function(){
 //    event.preventDefault();
 //    $('#results').show();
 //    $('#form_post').hide();
 //    getTerms();
 // }); 

});


