export const quoteService = (function makeQuoteService() {
	const API_URL = 'https://quote-garden.herokuapp.com/api/v3/quotes';

	function commonFind(argument = '') {
		try {
			return fetch(`${API_URL}${argument}`)
				.then(res => res.json())
				.then(data => data.data);
		} catch (err) {
			console.log('fetchQuotes() ERROR: ', err);
		}
	}

	function findAll() {
		return commonFind();
	}

	function findByAuthor(author) {
		const queryParameter = `?${author}`;
		return commonFind(queryParameter);
	}

	function findByType(type) {
		const queryParameter = `?${type}`;
		return commonFind(queryParameter);
	}

	return {
		findAll,
		findByAuthor,
		findByType
	}
})();