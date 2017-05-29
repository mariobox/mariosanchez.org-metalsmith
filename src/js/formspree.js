var $contactForm = $('#contact-form');

$contactForm.submit(function(e) {
	e.preventDefault();
	
	$.ajax({
		url: '//formspree.io/mariosc@gmail.com',
		method: 'POST',
		data: $(this).serialize(),
		dataType: 'json',
		beforeSend: function() {
			$('#howToContact').hide();
			$('#message').html('<h4>Sending message…</h4>');
		},
		success: function() {
			$('#howToContact').hide();
			$('#message').html('<h4> <i class="fa fa-check-circle" aria-hidden="true" style="color:green;"></i> Your form has been sent successfully!</h4>');
		},
		error: function() {
			$('#howToContact').hide();
			$('#message').html('<h4><i class="fa fa-exclamation-triangle" aria-hidden="true" style="color:red;"></i> Ops, there was an error.<a href="index.html">Try again</a></h4>');
			
		}
	});
});
