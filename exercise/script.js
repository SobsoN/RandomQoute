const url = 'http://api.icndb.com/jokes/random',
	$btn = $('#get-joke').click(function() {
		getJoke();
	}),
	$paragraph = $('#joke');

	function getJoke() {
		$.ajax({
			method: 'GET',
			url: url,
			success: function(res) {
				$paragraph.text(res.value.joke);
			}
		});
	}