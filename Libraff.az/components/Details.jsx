import { useParams } from 'react-router-dom'
import { FiCopy } from "react-icons/fi";
import { getAllBooks, getAllComments } from '../service/BookService.js'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaManatSign } from "react-icons/fa6";
import { RiShoppingBag4Line } from "react-icons/ri";

const Details = () => {
  const { book } = useParams();
  const [data, setData] = useState([])
  const [data2, setData2] = useState([])
  const [tesvir, setTesvir] = useState(true)
  const [reyler, setReyler] = useState(false)
  const [xususiyyet, setXususiyyet] = useState(false)

  useEffect(() => {
    getAllBooks()
      .then(item => setData(item))
  }, [])

  useEffect(() => {
    getAllComments()
      .then(item => setData2(item))
  }, [])

  function showing(section) {
    if (section === 'tesvir') {
      setTesvir(true);
      setXususiyyet(false);
      setReyler(false);
    } else if (section === 'reyler') {
      setTesvir(false);
      setXususiyyet(false);
      setReyler(true);
    }
    else if (section === 'xususiyyet') {
      setTesvir(false);
      setReyler(false);
      setXususiyyet(true);
    }
  }

  const obj = data.find((item) => item.title === book);

  if (!obj) {
    return <div>Book not found or loading...</div>;
  }

  const rey = data2.find(item => item.id === obj.id);

  return (
    <div className='max-w-[1320px] mx-auto flex flex-col gap-8 p-4'>
      <div className='text-gray-600 text-[14px] tracking-wider font-light'>{`Əsas səhifə / Kitab / ${obj.category} / ${obj.altCateg} / ${obj.title}`}</div>
      <div className='flex gap-5 flex-col lg:flex-row'>
        <div className='w-full lg:w-[800px] h-[60vh] bg-[#F6F6F8] rounded-2xl flex justify-center items-center'>
          <img src={obj.img} alt={obj.title} className='object-center object-cover max-h-[60vh] rounded-2xl' />
        </div>
        <div className='flex flex-col gap-4'>
          <p className='text-[14px] text-gray-400 flex items-center gap-2'>
            Kod: <FiCopy className="cursor-pointer hover:text-gray-600" /> {obj.code}
          </p>
          <h2 className='text-[2rem] mt-5'>{obj.title}</h2>
          <Link to={`/author/${obj.author}`} className='text-[#64748b] text-[1rem] underline font-light'>
            {obj.author}
          </Link>
          <h3 className='text-[1.75rem] flex items-center mb-10 mt-5 font-bold'>
            {obj.price}<FaManatSign />
          </h3>
          <button
            onClick={() => addBasket(obj.id)}
            className='bg-[#ef3340] text-white h-[50px] rounded-full font-semibold flex items-center w-full min-w-[400px] justify-center gap-3 hover:bg-[#d62835] transition-colors'
          >
            <RiShoppingBag4Line />
            Səbətə əlavə et
          </button>
        </div>
      </div>

      <div>
        <div className='flex items-center justify-center gap-8 w-full mb-4'>
          <h3
            onClick={() => showing('tesvir')}
            className={`text-xl cursor-pointer transition-colors ${tesvir ? 'text-black border-b-2 border-black' : 'text-[#767676] hover:text-black'}`}
          >
            Təsvir
          </h3>
          <h3
            onClick={() => showing('xususiyyet')}
            className={`text-xl cursor-pointer transition-colors ${xususiyyet ? 'text-black border-b-2 border-black' : 'text-[#767676] hover:text-black'}`}
          >
            Xüsusiyyəti
          </h3>
          <h3
            onClick={() => showing('reyler')}
            className={`text-xl cursor-pointer transition-colors ${reyler ? 'text-black border-b-2 border-black' : 'text-[#767676] hover:text-black'}`}
          >
            İstifadəçi rəyləri
          </h3>
        </div>
        <hr className='border-gray-200' />
      </div>

      <div className='mt-4'>
        {tesvir && (
          <div className='p-4'>
            <p className='text-[#767676] text-[1rem] leading-relaxed'>{obj.description}</p>
          </div>
        )}
        {xususiyyet && obj.lang && (
          <div className='p-4 space-y-2 max-w-[800px] mx-auto gap-5 grid grid-cols-2'>
            <div className='flex items-end'>  
              <h2 className='pr-3 text-gray-500'>Dil <span className='text-gray-300 '>..................</span></h2>
              {obj.lang.map((lang, index) => (
                <p className='text-[#767676] text-[1rem]  bg-gray-200 p-0.5 m-1'>{lang}</p>
              ))}
            </div>
            <div className='flex items-end'>
              <h2 className='pr-3 text-gray-500'>Müəllif <span className='text-gray-300 '>..................</span></h2>
              <p className='text-[1rem]'>{obj.author}</p>
            </div>
            <div className='flex items-end'>
              <h2 className='pr-3 text-gray-500'>Nəşriyyat <span className='text-gray-300 '>..................</span></h2>
              <p className='text-[1rem]'>{obj.publisher}</p>
            </div>
            <div className='flex items-end'>
              <h2 className='pr-3 text-gray-500'>Səhifə sayı<span className='text-gray-300 '>..................</span></h2>
              <p className='text-[1rem]'>{obj.pageCount}</p>
            </div>
            <div className='flex items-end'>
              <h2 className='pr-3 text-gray-500'>Cild<span className='text-gray-300 '>..................</span></h2>
              <p className='text-[1rem]'>{obj.cover}</p>
            </div>
          </div>
        )}
        {reyler && (
          <div className='p-4 space-y-4'>
            {rey && rey.comments ? (
              rey.comments.map((comment, index) => (
                <div key={index} className='bg-gray-50 p-4 rounded-lg'>
                  <p className='text-[#767676] text-[1rem]'>{comment}</p>
                </div>
              ))
            ) : (
              <p className='text-[#767676] text-[1rem]'>Hələ ki rəy yoxdur.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Details