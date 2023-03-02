import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React,{useState} from 'react'


import {format} from 'date-fns'
import "./searchBar.css"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { faBed, faCalendarDays, faDownLong, faPerson, faUpDown, faUpLong } from "@fortawesome/free-solid-svg-icons";
import { DateRange } from 'react-date-range';


export default function SearchBar() {


    /*counter increment states */

    const [optionStates,setOptionStates] =useState({
        adult:0,
        child:0,
        rooms:0
    })


    const handleOptions=(option,action)=>{
        console.log("test")
        if(action==='inc')
        setOptionStates({...optionStates,[option]:optionStates[option]+1})
        else
        setOptionStates({...optionStates,[option]:optionStates[option]-1})

    }



    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);

      const [showCalander,setShowCalander]=useState(false)
      const [showOptions , setShowOptions] = useState(false)

  return (
    <div className='searchbar'>

     <div className="searchItem">
     <FontAwesomeIcon icon={faBed} />
     <input type="text" 
     placeholder='Where are you going?'
     className='headerInpt'
     />
     </div>
    
     <div className="searchItem">
     <FontAwesomeIcon icon={faCalendarDays} 
     onClick={()=>setShowCalander(!showCalander)}
     />
     <span  > 

     {format(state[0].startDate,'MM/dd/yyyy')} to {format(state[0].endDate,'MM/dd/yyyy')}
     {/* <h2>{JSON.stringify(showCalander)}</h2> */}

     <div className="daterangeselector">
     {showCalander && 
     
     <DateRange
     editableDateInputs={true}
     onChange={item => setState([item.selection])}
     moveRangeOnFirstSelection={false}
     ranges={state}
     />
 
     }
     </div>

    
     </span>
     </div>


     <div className="searchItem">
     <FontAwesomeIcon icon={faPerson} 
     onClick={()=>setShowOptions(!showOptions)}
     />
     <span>
        
        Adult:{optionStates.adult}-Child:{optionStates.child}-Rooms:{optionStates.rooms}

        {showOptions && <div className="options">
            <div className="optionItem">
                Adult
                <div className="buttons">
                <FontAwesomeIcon icon={faUpLong} 
                onClick={()=>handleOptions('adult','inc')}
                
                />
                <span>{optionStates.adult}</span>
                <FontAwesomeIcon icon={faDownLong}
                // disabled={optionStates.adult===0}
                onClick={()=>handleOptions('adult','dec')}
                />
                </div>
                </div>

            <div className="optionItem">
                Child
                <div className="buttons">
                <FontAwesomeIcon icon={faUpLong}
                onClick={()=>handleOptions('child','inc')}
                
                />
                <span>{optionStates.child}</span>
                <FontAwesomeIcon icon={faDownLong}
               onClick={()=>handleOptions('child','dec')} 
                
                />
                </div>
                </div>

            <div className="optionItem">
                Rooms
                <div className="buttons">
                <FontAwesomeIcon icon={faUpLong} 
                onClick={()=>handleOptions('rooms','inc')}
                />
                <span>{optionStates.rooms}</span>
                <FontAwesomeIcon icon={faDownLong}
                onClick={()=>handleOptions('rooms','dec')}
                />
                </div>
                </div>
        </div>
}
     </span>
     </div>

    <button className="headerBtn">
        Search
    </button>
    </div>
  )
}


/*
optional JSX for search box in header component

<div className="headerSearch">
            
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faBed} />
              <input type="text" placeholder="Where are you going?" 
              className="headerSearchInput"
              />
            </div>

            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faCalendarDays} />
              <span>date to date</span>
            </div>

            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faPerson} />
              <span>2 Adults and two child</span>
            </div>

            <button className="headerBtn">
                Search
            </button>
          </div>


 optional JSX for search box in header component
         
*/