
import { useEffect, useRef, useState } from 'react';
import { MdAutorenew, MdArrowRightAlt } from "react-icons/md";
import './App.scss';
import { quoteService } from './services/QuoteService';
import { v4 as uuidv4 } from 'uuid';

function App() {
	const [displayAllQuotesFlag, setDisplayAllQuotesFlag] = useState(false);
	const [quotes, setQuotes] = useState([]);
	const [randomQuote, setRandomQuote] = useState({
		quoteText: '',
		quoteAuthor: '',
		quoteGenre: ''

	});
	const [currentIndex, setCurrentIndex] = useState(0);
	const [targetQuotes, setTargetQuotes] = useState({
		quoteAuthor: '',
		quotes: []
	});


	useEffect(() => {
		quoteService
			.findAll()
			.then(data => {
				setQuotes(data);
				updateRandomQuote(data)
			});
	}, []);

	function updateRandomQuote(data) {
		if (!data) { return; }
		if (data.length < 1) { return; }

		let targetIndex = 0;
		while (currentIndex === targetIndex) {
			targetIndex = Math.floor(Math.random() * 10);
		}

		setCurrentIndex(targetIndex);

		const randomQ = data[targetIndex];
		setRandomQuote({
			quoteText: randomQ.quoteText,
			quoteAuthor: randomQ.quoteAuthor,
			quoteGenre: randomQ.quoteGenre
		});
	}

	function showAllQuotes(e) {
		e.preventDefault();
		setDisplayAllQuotesFlag(true);

		quoteService
			.findByAuthor(randomQuote.quoteAuthor)
			.then(data => {
				const quotes = data.map(it => it.quoteText);
				setTargetQuotes({
					quoteAuthor: randomQuote.quoteAuthor,
					quotes
				});

			});
	}

	function handleBtnRandomQuoteEvent(e) {
		e.preventDefault();
		setDisplayAllQuotesFlag(false);
		setTargetQuotes({
			quoteAuthor: '',
			quotes: []
		});
		updateRandomQuote(quotes);
	}

	return (
		<div className='flex flex-col max-w-[1024px] mx-auto h-screen'>
			<header className='p-4'>
				<button onClick={handleBtnRandomQuoteEvent} className='ml-auto flex items-center gap-2 p-2 text-[#4f4f4f] hover:bg-slate-200 rounded'>
					<span className='text-lg font-sans font-medium'>random</span>
					<MdAutorenew size={20} />
				</button>
			</header>

			<div className='flex flex-col justify-between flex-grow'>
				<main className='flex flex-col gap-3 max-w-[400px] md:max-w-[768px] mx-auto p-4'>
					{
						displayAllQuotesFlag ?
							<>
								<h1 className='text-[#333333] text-xl font-semibold md:text-4xl md:font-bold mb-4 md:mb-8'>{randomQuote.quoteAuthor}</h1>
								<ul className='flex flex-col gap-4 max-h-[60vh] md:max-h-[500px] overflow-x-auto'>
									{targetQuotes.quotes.map(it =>
										<li key={uuidv4()} className='p-3'>
											<div className="pl-8 border-l-2 md:text-4xl md:border-l-4 border-[#f7df94]">
												<div>“{it}”</div>
											</div>
										</li>
									)
									}
								</ul>
							</>

							:
							<>
								<div className='p-3'>
									<div className="pl-8 border-l-2 md:text-4xl md:border-l-4 border-[#f7df94] ">
										<div>“{randomQuote.quoteText}”</div>
									</div>
								</div>
								<button className='quote-author' onClick={showAllQuotes}>
									<div className='flex flex-col'>
										<h2 className='quote-author__name hover:text-[#f2f2f2] text-lg md:text-2xl font-semibold self-start'>{randomQuote.quoteAuthor}</h2>
										<h3 className='quote-author__type hover:text-[#828282] text-sm md:text-lg font-medium self-start'>{randomQuote.quoteGenre}</h3>
									</div>
									<MdArrowRightAlt fill='#f2f2f2' size={24} />
								</button>
							</>
					}
				</main>

				<p className="text-[#4f4f4f] text-center p-4 font-medium">created by <span className='text-[#222] font-semibold'>houssam-developer</span> - devChallenges.io</p>
			</div>
		</div>

	)
}

export default App;
