import { Link } from 'react-router-dom'
import logo from '../assets/libraff.png'
import {Catalog} from './Catalog'
import Search from './Search'



const Navbar = () => {
  return (
    <nav className='flex items-center gap-30 max-w-[1320px] relative mx-auto py-10'>
      <Link to="/">
        <div className=''>
          <img src={logo} className='w-40' />
        </div>
      </Link>
      <div className='flex items-center gap-3'>
        <Catalog />
        <Search/>
      </div>


    </nav>
  )
}

export default Navbar