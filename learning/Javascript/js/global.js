// JavaScript Document

$(document).ready(function($){
	$('#app4').hover(function(){
		$('.pro_details').css('display','block');
	},
	function()
	{
		$('.pro_details').css('display','none');
	});
	/*----------------Scroll To Top----------------*/
	$(".scrollToTop").click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	$('.child_div').click(function(event)
	{	
		event.stopPropogation();
		$(this).css('border','1px solid #42ab9e');
	});
	$('.parent_div').click(function()
	{
		$(this).css('border','1px solid #c209b7');
	});
	
});

//////////////////////////// Literal objects
$(document).ready(function()
{
	var movie_24 = {
		 actorName : "Surya",
		 actressName : "Samantha",
		 villian : ["Athreya","Father"],
	     cast : function()
		     {
				 return this.actorName + " - " + this.actressName ;
		  	 },
	     music: "A.R.Rehman",
		 director : "Vikram k kumar"
	};
	$('.literal_obj_show').click(function()
    {
		$('#literal_obj').show().html("24 Cast is : " + movie_24.cast() + " " + "<br />" + " 24 villian is : " + movie_24.villian[0] + " <br /> " + "24 villian relationship : " + movie_24.villian[1] + " <br />" + "Music : " + movie_24.music +  " <br />" + "Director : " + " " + movie_24.director);
    });
	
});

//////////////////////////// New keyword objects
$(document).ready(function()
{ 	
	var friendsList = new Object();
	friendsList.name = "mugesh";
	friendsList.age = 25;
	$('.newkeyword_obj_show').click(function()
	{
		$('#newkeyword_obj').show().html("First Name Is : " + friendsList.name + "<br />" + " Age Is : " + friendsList.age);
	});
});

////////////////////////////// Constructor objects
$(document).ready(function()
{
	//booksInShelf Constructor Objects
	function booksInShelf(tamil, english, hindi)
	{
		 this.tamilBooks = tamil;
		 this.englishBooks = english;
		 this.hindiBooks = hindi;
	};
	var bookNames = new booksInShelf("thirukural","Harry potter" ,"Chetan Bhagat");


	$('.cons_obj_show').click(function()
	{
		$(this).next('.test_box').show();
		$("#cons_obj").html("Tamil book in Shelf : " + bookNames.tamilBooks + "<br/>" + "English book in Shelf : " + bookNames.englishBooks + "<br />" + "English book in Shelf : " + bookNames.hindiBooks);
	});
	
	//Movie Details Constructor Objects
	function movieDetails(name,actor,actress,music,director)
	{
		this.name = name;
		this.actor = actor;
		this.actress = actress;
		this.music = music;
		this.director = director;	
	};
	
	var the24Movie = new movieDetails("24","Surya","Samantha","A.R.Rehman","Vikram k kumar");
	var tsk = new movieDetails("Thana sentha Kuttam","Surya","Keerthy Suresh","Aniruth","Vignesh Sivan");
	
	$('.cons_obj_show_new').click(function()
	{
		$("#cons_obj").show().append("Movie name : " + the24Movie.name + "<br />" + "Actor : " + the24Movie.actor + "<br />" + "Actress : " +the24Movie.actress + "<br />" + "Music : " + the24Movie.music + "<br/>" + "Director : " + the24Movie.director + "<br/>" + "Movie name : " + tsk.name + "<br />" + "Actor : " + tsk.actor + "<br />" + "Actress : " +tsk.actress + "<br />" + "Music : " + tsk.music + "<br/>" + "Director : " + tsk.director );
	});
	
});

$(document).ready(function()
{
	var a ={	
		'name':"theri",
		'cast':"vijay - samantha",
		'date':"16-12-2016"
	};
	$('#a_gezza').click(function()
    {
		$('<span>' + 'Date : ' + a.date + '</span>'  + " <br/>").appendTo(".job_A");
		$.each(a , function(index,key)
		{
			$('#gezza_demo').append(index + " : " + key + "<br />");
			
		});
		
	});
});

/////append Contructor objects
$(document).ready(function()
{
	function favFriends(college,office)
	{ 
		this.inCollege = college;
		this.inOffice = office;
	};
	
	var mugesh = new favFriends("Dinesh","Balaji");
	$('.friendsCheck').click(function()
	{
		$.each(mugesh ,function(index,key)
		{
			$("#friends_box").show();
			$(".ul_box").append("<li>"+ "My Fav Friends is :"  + index +  "is : " + key + "</li>");
		});
	});
	/////appendTo Contructor objects
	function myFrnd(x,x11)
	{
		this.closeFnrdinX = x;
		this.closeFrndinXII = x11;
	};
	var my = new myFrnd("Abdullla", "Suresh");
	$('.friendsCheck_new').click(function()
	{
		$("#friendsCheck_new").show();
		$("<li>" + "My close frnd in X :" + my.closeFnrdinX + "</li> " + "<li>" + "My close frnd in XII :" + my.closeFrndinXII + "</li>").appendTo(".ul_box");
	});

});

////////////////////////////// prototype objects
$(document).ready(function()
{
	function Baby(boy,girl)
	{
		this.boy = boy;
		this.girl = girl;
	};
	Baby.prototype.uncle = "Devaraj";
	var first = new Baby("Mugesh","VJ Diya");

	$('.prototype_obj_show').click(function()
	{
	 	$('#prototype_obj').addClass("test_box_open").append("The Boy Baby is : " + first.boy + ", <br/>" + "The Girl Baby is : " + first.girl + ", <br/>"  + "Girl Uncle Name is : " + first.uncle + "<br />");
	});

//
//////////////////////////// Adding a prototype objects
	Baby.prototype.coupleBaby = function()
	{
		return this.boy + " (weds) " + this.girl ;
	};

	$('.prototype_obj_show').click(function()
	{
		$('#prototype_obj').addClass("test_box_open").append("The First Couple Baby is : " +  first.coupleBaby() + "<br/>");
	});
});

////////////////////////////// for loop nested for 

$(document).ready(function()
{
	$('.for_loop_show').click(function(){
	   $(this).next('.test_box').show();
	   for(var i = 1;i <= 10;i++)
	   { 
	       $('#for_loop').append("<br /> "+ i  + " ---- "  ); 
		   for(var j = i;  j <= 10; j++)
		   {
			  $('#for_loop').append(j + "-" );
		   };
	   };
	});
});

////////////////////////////// Tabs in jquery without plugin
$(document).ready(function()
{
	$('.tabs li a').click(function(){
		var tab_id  = $(this).attr("data-tab");
		$('.tabs li a').removeClass("current");
		$('.tab_content').removeClass("open");
		$(this).addClass("current");
		$('#'+ tab_id).addClass("open");
	});
});
////////////////////////////// event.stopPropagation
function eve_prop(event)
{
	event.preventDefault();
	for(var i=0; i < 5; i++)
	{
		$('#demo_test').show().append("the i is : " + i + "<br/>");
	};
};   
////////////////////////////// for each loop
function for_each_loop(){
	//event.stopPropogation();
	var data = { 
		"programs" : [
			{
				"Vijay Tv" : "Athu Ithu Ethu",
				"Anchor" : "Sivakarthikeyan"
			}, 
			{
				"SunMusic" : "Suda Suda Chennai",
				"Anchor" : "Rio"
			}
		]
	};
	
	$.each(data.programs, function(i){
		$.each(data.programs[i], function(index,key) {
			$('#for_each_loop').show().append("<br />" + index + " -- " + key);
		});
	});
	/////////////
	var friends = ["Mugesh", "Vinoth" ,"Sathya"];
	$.each(friends, function(index,key){
	   $('#for_each_loop').show().append("<br /> friends index is : " + index + " -- " +"friends key is : " + key + " <br />");	
	});
};

////////////////////////////// HCL literal objects
function hcl_literal_obj()
{
	
	var swapper = {
	// an array literal
		   images  : ["smile.gif", "grim.gif", "frown.gif", "bomb.gif"],
		   pos     : { // nested object literal
					   x  : 340,
					   y  : 160
					 },
		   onSwap  : function() 
					 {
					 return this.pos.x + this.pos.y;
					 }
	};
	$('#hcl_literal_obj').show().append(swapper.images[0] + " -- " + swapper.pos["x"] + " + " + swapper.pos["y"] + " -- "  + swapper.onSwap());  
};
////////////////////////////// for in loop
function for_in_loop()
{
   
   var friends = ["Mugesh", "Vinoth" ,"Sathya"];
   var x = "";
   for(var x in friends)
   {
	  $('#for_in_loop').show().append(friends[x] + " <br />");
   }
};
$(document).ready(function(){
	/*$('#mypercentage_select').change(function(){
		callFn($(this).val(), $("#mypercentage_select option:selected").text());
	});
	callFn($('#mypercentage_select').val(), $("#mypercentage_select option:selected").text());
	
	function callFn(select_std, selText)
	{
		var myMarks = { 
			'xth' : 367,
			'xII' : 855,
			'BCA' : 63
		};
		switch(select_std)
		{
			case "xth":
				$('.percentage_box h2').hide();
				$('.percentage_box h1').show();
				var myPercentage_xth = Math.floor(myMarks[select_std] * 100) / 500; 
				$('.percentage_box h1 span.class').text(selText);
				$('.percentage_box h1 span.percentage').text(myPercentage_xth);
				break; 
			case "xII":
				$('.percentage_box h2').hide();
				$('.percentage_box h1').show();
				var myPercentage_xII = Math.floor(myMarks[select_std] * 100) / 1200;  
				$('.percentage_box h1 span.class').text(selText);
				$('.percentage_box h1 span.percentage').text(myPercentage_xII);
				break; 
			case "BCA":
				$('.percentage_box h2').hide();
				$('.percentage_box h1').show();
				var myPercentage_BCA = (myMarks[select_std] > 60) ? "1st Class" : "Not a 1st class";
				$('.percentage_box h1 span.class').text(selText);
				$('.percentage_box h1 span.percentage').text(myPercentage_BCA);
				break;
			case "0":
				$('.percentage_box h1').hide();
				$('.percentage_box h2').show();
				break;
		};
	};*/
	
	// select with input 
    $('#mypercentage_input,#mypercentage_select').change(function(){
		valueFn($('#mypercentage_select').val(),$('#mypercentage_input').val());
	});
	valueFn($('#mypercentage_select').val(),$('#mypercentage_input').val());
	function valueFn(myStandard,myPercentageInputValue)
	{
		switch(myStandard)
		{
			case "xth" :
			    $('.percentage_box h2').hide();
				$('.percentage_box h1,.percentage_icon').show();
				var calc = myPercentageInputValue * 100 / 500;
				$('.percentage_box h1 span.class').text(
					
				);
				$('.percentage_box h1 span.percentage').text(calc);
				break;
				
			case "xII" :
			    $('.percentage_box h2').hide();
				$('.percentage_box h1,.percentage_icon').show();
				var calc = myPercentageInputValue * 100 / 1200;
				$('.percentage_box h1 span.class').text(myStandard);
				$('.percentage_box h1 span.percentage').text(calc);
				break;
				
			case "BCA":
			    $('.percentage_box h2,.percentage_icon').hide();
				$('.percentage_box h1').show();
				var calc = ( myPercentageInputValue > 60) ? "1st Class" : "Not a 1st class";
				$('.percentage_box h1 span.class').text(myStandard);
				$('.percentage_box h1 span.percentage').text(calc);
				break;
				
			case "0":
				$('.percentage_box h1').hide();
				$('.percentage_box h2').show();
				$('#mypercentage_input').val("")
				break;
		};
	};
	
});














