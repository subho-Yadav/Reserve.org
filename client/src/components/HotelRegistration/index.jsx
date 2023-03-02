import React from 'react'
import {useState} from 'react'
export default function index() {


    

    const [data,setData]=useState({
        hname:'',
        hdesc:'',
        file:[]
     } )

    function handleSubmit(event){

        event.preventDefault()
        console.log("Testing file upload",data)
    }

    
  return (
    <div>
      <form>
  <div className="mb-3">
    <label for="hotel-name" className="form-label">Hotel Name</label>
    <input type="text" className="form-control" id="hotel-name"
    value={data.hname} onChange={(e)=>{setData({...data,hname:e.target.value})}}
    />
    
  </div>
  <div className="mb-3">
    <label for="hotel-desc" className="form-label">Hotel Description</label>
    <input type="text" className="form-control" id="hote-desc" 
     value={data.hdesc} onChange={(e)=>{setData({...data,hdesc:e.target.value})}}
    />
    
  </div>
  <div class="mb-3">
  <label for="formFile" className="form-label" >Default file input example</label>
  <input className="form-control" type="file" id="formFile" name='logo'
  onChange={(e)=>setData({...data,file:e.target.files[0]})}
  />
</div>

 
  <button type="submit" className="btn btn-primary"
  onClick={handleSubmit}
  >Submit</button>
</form>
    </div>
  )
}
