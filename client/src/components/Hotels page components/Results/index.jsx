import React,{useContext,useEffect,useState} from 'react'

//importing hotels context for reading
import HotelsContext from '../../../pages/Hotels/context/hotelsContext'

// import HotelsContext from '../../../pages/Hotels/context/hotelsContext'

import "./index.css"
// const hotels=new Array(100).fill("vancouver islands")
import HotelsCard from '../HotelsCard/HotelsCard'


const index = () => {

  

  const {hotels,search}=useContext(HotelsContext)
  const [searchResult,setSearchResult]=useState(hotels)


  useEffect(()=>{

    console.log("Use effect of result component")

    if(search!=''){
      

    let currentList=hotels.filter((element)=>{
      if(element.name.toLowerCase().includes(search.toLowerCase()))
      return true
      else{
        return false
      }
    })
    if(currentList.length!=0)
    setSearchResult(currentList)
  


    }else setSearchResult(hotels)
  },[search])


  //  console.log("Context Data->",data)

  


  return (
    <div className='hotelList'>

    
  {/* {JSON.stringify(search)} */}
  {/* {JSON.stringify(searchResult)} */}
   {
    searchResult.map((hotels,index)=>{
      return <HotelsCard key={index} hotel={hotels}/>
    })
   }
   
    </div>
  )
}

export default index
