import {useState,useEffect} from 'react'



const useFetch=(api,endPoint)=>{

    //function to fetch data using axios
    const fetchData=async()=>{
        try{
         const response=await api.get(endPoint)
         console.log(response.data.data)
         setHotels(response.data.data)
         setIsLoading(false)
        }catch(err){
         console.log(err.message)
        }
        }

    // end


   const [hotels,setHotels]=useState([])
   const [isLoading,setIsLoading]=useState(true)
   useEffect(()=>{
    setTimeout(()=>{
        fetchData(api,endPoint)
    },1000)
   },[])

   return {isLoading,hotels}
}

export default useFetch