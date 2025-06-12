import { useEffect, useState } from 'react'
import { getAllBooks } from '../service/BookService.js'
import Book from '../components/Book'
import Swiper from '../components/Swiper.jsx'
const Home = ({ item }) => {
  const [data, setData] = useState([])
  useEffect(() => {
    getAllBooks()
      .then(item => setData(item))
  }, [])
  console.log(data)

  return (
    <div >
      <Swiper />
      <div className='grid xl:grid-cols-5 lg:grid-cols-4  md:grid-cols-2 grid-cols-1 max-w-[1320px]  mx-auto'>

        {data.map(item => <Book key={item.id} {...item} data={data} />)}
      </div>
    </div>
  )
}

export default Home