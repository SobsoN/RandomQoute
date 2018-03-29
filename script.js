$(function(){

	const tweetLink = "https://twitter.com/intent/tweet?text=",
		quoteUrl = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";

	function getQuote() {
    	$.getJSON(quoteUrl, createTweet);
	}

	getQuote();
	$('.trigger').click(function() {
		getQuote();
	})

	function createTweet(input) {
		const data = input[0],
			quoteText = $(data.content).text().trim(),
			qouteAuthor = data.title,
			tweetText = "Quote of the day - " + quoteText + " Author: " + quoteAuthor;


		if (!qouteAuthor.length) {
			qouteAuthor = "Unkown author";
		}

		if (tweetText.length > 140) {
			getQuote();
		}	else {
			const tweet = tweetLink + encodeURIComponent(tweetText);
			$('.qoute').text(quoteText);
			$('.author').text("Author: " + qouteAuthor);
			$('.tweet').attr('href', tweet);
		}
	}
})

