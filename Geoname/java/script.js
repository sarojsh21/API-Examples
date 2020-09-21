	$('#btnRun').click(function() {

		$.ajax({
			url: "php/country.php",
			type: 'POST',
			dataType: 'json',
			data: {
				country: $('#countrylist').val(),
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {
					$('#txtcontinent').html(result['data'][0]['continentName']);
					$('#txtcountryCode').html(result['data'][0]['countryCode']);
					$('#txtCapital').html(result['data'][0]['capital']);
					$('#txtcurrencyCode').html(result['data'][0]['currencyCode']);
					$('#txtgeoId').html(result['data'][0]['geonameId']);
					

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
				Console.log('An error has occured, please try again.');
			}
		}); 
	

	});
	
	
