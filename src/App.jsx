
import { useEffect, useRef, useState } from 'react';
import { MdAutorenew } from "react-icons/md";



function App() {
	const quote = {
		content: 'The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency. The second is that automation applied to an inefficient operation will magnify the inefficiency.',
		author: 'Bill Gates'
	};

	return (
		<div className='max-w-[1024px] mx-auto'>
			<header className='p-4'>
				<button className='ml-auto flex items-center gap-2 p-2 text-[#4f4f4f] hover:bg-slate-200 rounded'>
					<span className='text-[18px] font-sans font-medium'>random</span>
					<MdAutorenew size={20} />
				</button>
			</header>

			<div className='p-4'>
				<div className="pl-8 border-l-2 border-yellow-500 max-w-[400px] mx-auto">
					{/* Single Quote */}
					<div>“{quote.content}”</div>
				</div>
			</div>
		</div>
	)
}

export default App;
