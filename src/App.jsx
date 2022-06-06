
import { useEffect, useRef, useState } from 'react';
import { MdAutorenew, MdArrowRightAlt } from "react-icons/md";
import './App.scss';


function App() {
	const quote = {
		content: 'The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency. The second is that automation applied to an inefficient operation will magnify the inefficiency.',
		author: 'Bill Gates'
	};

	return (
		<div className='max-w-[1024px] mx-auto'>
			<header className='p-4'>
				<button className='ml-auto flex items-center gap-2 p-2 text-[#4f4f4f] hover:bg-slate-200 rounded'>
					<span className='text-lg font-sans font-medium'>random</span>
					<MdAutorenew size={20} />
				</button>
			</header>

			<div className='flex flex-col gap-3 border-2 border-blue-400 max-w-[400px] mx-auto'>
				{/* Single Quote */}
				<div className='p-4'>
					<div className="pl-8 border-l-2 md:text-4xl md:border-l-4 border-[#f7df94] ">
						<div>“{quote.content}”</div>
					</div>
				</div>
				{/* Author */}
				<button className='quote-author'>
					<div className='flex flex-col'>
						<h2 className='quote-author__name hover:text-[#f2f2f2] text-lg md:text-2xl font-semibold self-start'>{quote.author}</h2>
						<h3 className='quote-author__type hover:text-[#828282] text-sm md:text-lg font-medium self-start'>business</h3>
					</div>
					<MdArrowRightAlt fill='#f2f2f2' size={24} />
				</button>
			</div>
		</div>
	)
}

export default App;
