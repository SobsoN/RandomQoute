$(function(){

	const tweetLink = "https://twitter.com/intent/tweet?text=",
		quoteUrl = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";
	var prefix = "https://cors-anywhere.herokuapp.com/";
	
	function getQuote() {
    	$.getJSON(prefix + quoteUrl, createTweet);
	}

	$.ajaxSetup({ cache: false });

	getQuote();
	$('.trigger').click(function() {
		getQuote();
	})

	function createTweet(input) {
		const data = input[0],
			quoteTextNo = $(data.content).text().trim(),
			quoteText = '" ' + quoteTextNo + ' "';
			quoteAuthor = data.title,
			tweetText = "Quote of the day - " + quoteText + " Author: " + quoteAuthor;


		if (!quoteAuthor.length) {
			qouteAuthor = "Unkown author";
		}

		if (tweetText.length > 140) {
			getQuote();
		}	else {
			const tweet = tweetLink + encodeURIComponent(tweetText);
			$('.quote').text(quoteText);
			$('.author').text("Author: " + quoteAuthor);
			$('.tweet').attr('href', tweet);
		}
	}
})

