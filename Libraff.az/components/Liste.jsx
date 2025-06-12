import { useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import {Link} from 'react-router-dom'
function Liste({ show }) {

  
  const [filteredData, setFilteredData] = useState(data[0])
  const [selectedSubCategory, setSelectedSubCategory] = useState(filteredData.altCat[0])

  const showAlt = (index) => {
    setFilteredData(data[index])
    setSelectedSubCategory(data[index].altCat[0])
  }
  const showSub = (index2) => {
    setSelectedSubCategory(filteredData.altCat[index2])

  }

  return (
    <div className={`${show ? 'flex items-start' : ''} text-[#0f172a] font-[nunito serif] w-[1320px]`}>

      <div className="flex bg-white h-[60vh] m-1 rounded-2xl w-[1400px]">

        <ul className='pt-5  flex flex-col gap-1 w-1/4 '>
          {data.map((item, index) => (
            <li key={item.name + index} onMouseOver={() => showAlt(index)} >
              <Link to={`/${item.name}`} className='flex  justify-between transition-all text-[13px] font-light group py-1 px-3 items-center hover:bg-gray-200'> {item.name}<IoIosArrowForward className='group-hover:text-red-600 text-[14px] text-[#9C9C9C]'/></Link>
            </li>
          ))}
        </ul>

        {filteredData && (
          <ul className="bg-[#F5F5F7] p-0.5  flex flex-col gap-1   pt-5 w-1/4 overflow-y-scroll">
            {filteredData.altCat.map((altItem, index2) => {
              if (typeof altItem === 'object' && 'name' in altItem) {
                return (
                  <li key={altItem.name + '-' + index2} onMouseOver={() => showSub(index2)} >
                    <Link to={`/${filteredData.name}/${altItem.name}`} className='flex justify-between px-3 py-1 text-[13px] items-center hover:bg-white font-light transition-all hover:text-red-600'>{altItem.name}<IoIosArrowForward  className='text-[#9C9C9C] text-[14px]'/></Link>
                  </li>
                )
              } else {
                return (
                  <li key={altItem + '-' + index2} onMouseOver={() => showSub(index2)} className=' font-light py-2 px-3 transition-all text-[13px] hover:bg-white hover:text-red-600'>
                   <Link to={`/${filteredData.name}/${altItem}`}>{altItem}</Link>
                  </li>
                )
              }
            })}
          </ul>
        )}

        {selectedSubCategory && typeof selectedSubCategory === 'object' && (
          <ul className=' p-5 flex flex-col gap-1 w-1/2 '>
            {selectedSubCategory.altCat.map((item, i) => (
              <li key={item + '-' + i} className='font-light transition-all text-[13px] hover:text-red-600'><Link to={`/${filteredData.name}/${selectedSubCategory.name}/${item}`}>{item}</Link></li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Liste
