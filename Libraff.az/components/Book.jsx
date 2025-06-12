import React, { useEffect, useState } from 'react';
import { FaManatSign } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { IoMdHeartEmpty } from "react-icons/io";
const Book = ({ title, img, price, saleRate, data,id }) => {
	const [favlist, setFav] = useState([])
	const discountedPrice = (price * (1 - saleRate / 100)).toFixed(2);
	useEffect(() => {

		setFav(JSON.parse(localStorage.getItem('favlist')) || [])
	},[favlist])
	function handleFav() {
		const favElem = data.find(item => item.id == id)
		const status = favlist.some(item => item.id == id)
		const arr=[]
		if (favElem && !status) {
			arr=[...favlist, favElem]
		}
		else {
			arr=favlist.filter(item => item.id != id)
		}
		console.log(favlist)
		localStorage.setItem('favlist',JSON.stringify(favlist))
	}
	return (
		<article className="hover:shadow-2xl group rounded-xl p-5 relative">

			<div className="absolute group-hover:block hidden top-2  right-2 text-[#9999] text-2xl" >
				<IoMdHeartEmpty onClick={() => handleFav({id})}/>
			</div>

			<Link to={`/kitab/${title}`} className='bg-gray-200 rounded-xl w-[200px] h-[300px] block overflow-hidden'>
				<img src={img} alt="book" className="object-cover h-full w-full rounded-xl" />
			</Link>
			<h4 className='pt-3 text-[14px] h-[50px]'>{title}</h4>

			<div className="flex gap-2 items-center">
				<span className='flex items-center'>
					<h3 className='font-medium text-[18px]'>{saleRate === 0 ? price : discountedPrice}</h3>
					<FaManatSign />
				</span>

				{saleRate > 0 && (
					<span className='text-gray-500 flex items-center line-through text-[14px] font-light'>
						{price}<FaManatSign />
					</span>
				)}
			</div>
		</article>
	);
};

export default Book;
