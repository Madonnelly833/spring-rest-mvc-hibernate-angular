$(function(){
	$("form[name='zipcodeEntry']").validate({
		rules:
			zipcode:{
				required: true,
				minlength: 5
			}
	})
}