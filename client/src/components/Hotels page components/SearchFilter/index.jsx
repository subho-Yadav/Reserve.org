import React ,{useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './searchfilter.css'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import HotelsContext from '../../../pages/Hotels/context/hotelsContext'
const index = () => {

const {search,setSearch} = useContext(HotelsContext)
 
  return (
    <div className='search-filter-container'>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input type="text" placeholder='Search Here...'
      value={search}
      onChange={(event)=>setSearch(event.target.value)}
      />
   

    
    </div>
  )
}

export default index
