	$('#btnRun').click(function() {

		$.ajax({
			url: "php/country.php",
			type: 'POST',
			dataType: 'json',
			data: {
				lat: $('#lat').val(),
				lng: $('#lng').val(),
			},
			success: function(result) {
				
				//console.log(typeof result)

				console.log(result);
				
				console.log(result['address']['countryCode']);
				
				
				$('#txthouse').html(result['address']['houseNumber']);
				$('#txtstreet').html(result['address']['street']);
				$('#txtpostcode').html(result['address']['postalcode']);
				$('#txtlocality').html(result['address']['locality']);
				$('#txtcountryCode').html(result['address']['countryCode']);
				
				

			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
				console.log('An error has occured, please try again.');
			}
		}); 
	

	});
	
	
