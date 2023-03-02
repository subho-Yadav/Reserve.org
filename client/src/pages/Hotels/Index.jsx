import React from 'react'
import "./hotels.css"
import {useState} from 'react'

import Navbar from '../../components/Navbar/Navbar'
import SearchFilter from  '../../components/Hotels page components/SearchFilter'
import Sidebar from "../../components/Hotels page components/Sidebar"
import Results from "../../components/Hotels page components/Results"

import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'

//custom Hook

import useFetch from '../../customHooks/fetchHook'
import hotelsAPI from './api/hotels'


//importing the context to avoid props drilling
import HotelsContext from './context/hotelsContext'


// const HotelsContext=React.createContext()

const Index = () => {
  let {isLoading,hotels}=useFetch(hotelsAPI,'get/hotels') //custom hook to fetch data
  const [search,setSearch]=useState('')
  console.log(isLoading,hotels)



  return (
   <HotelsContext.Provider value={{hotels,search,setSearch}}>
    <div className="hotels-page">
    <div className="navbar-container">
      <Navbar loggedIn></Navbar>
    </div>
    <div className="search-box">
      <SearchFilter></SearchFilter>
    </div>
    <div className="hotels-body">
      <div className="sidebar">
        {/* <Sidebar></Sidebar> */}
      </div>
      <div className="results">
       

       {isLoading? <LoadingSpinner></LoadingSpinner>: <Results></Results>}

      </div>
    </div>
   </div>
   </HotelsContext.Provider>
  )
}

export default Index
