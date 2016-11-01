 $(document).ready(function(){
	 
	 $('#collapseOne').hide();
	 $('#collapseTwo').hide();

	$("#accordion").click(function(){
		$("#collapseOne").slideToggle(2000);
	});

	$("#accordionT").click(function(){
		$("#collapseTwo").slideToggle(2000);
	});
 });
		 