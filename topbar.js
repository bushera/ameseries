$(function(){
		$("main").show();
		$("#preload-page").delay(4000).fadeOut(1000);
  
		$("#top").click(function(){
			parent.history.back();
			return false;
		});
  
		
		$("#year-2018").click(function(){
			$("#slide2").css("display", "none");
			$("#slide3").css("display", "none");
			$("#slide1").css("display", "block");
			$("#year-2018").off(click);
		});
		
		$("#year-2019").click(function(){
			$("#slide1").animate({display: "none"}, 500);
			$("#slide3").css("display", "none");
			$("#slide2").css("display", "block");
			$("#year-2019").off(click);
		});
		
		$("#year-2020").click(function(){
			$("#slide1").animate({display: "none"}, 500);
			$("#slide2").css("display", "none");
			$("#slide3").css("display", "block");
			$("#year-2020").off(click);
		});
		
		
		$("#year-2018a").click(function(){
			$("#slide2a").css("display", "none");
			$("#slide3a").css("display", "none");
			$("#slide1a").css("display", "block");
			$("#year-2018a").off(click);
		});
		
		$("#year-2019a").click(function(){
			$("#slide1a").animate({display: "none"}, 500);
			$("#slide3a").css("display", "none");
			$("#slide2a").css("display", "block");
			$("#year-2019a").off(click);
		});
		
		$("#year-2020a").click(function(){
			$("#slide1a").animate({display: "none"}, 500);
			$("#slide2a").css("display", "none");
			$("#slide3a").css("display", "block");
			$("#year-2020a").off(click);
		});
		
		
		
	});