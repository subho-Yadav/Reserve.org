import React from "react";
import "./header2.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faPlane,
  faCar,
  faTaxi,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";


import SearchBar from "../serachBar/SearchBar";

const Header = ({listMode}) => {
  console.log("list mode xxxx",listMode)
  return (
    <>
      <div className="header">
       
        <div className={listMode!==true?"headerContainer":"headerContainer listMode"}>
          <div className="headerList">
            <div className="headerItem active">
              <FontAwesomeIcon icon={faBed} />
              <span>
                <h3>Stays</h3>
              </span>
            </div>

            <div className="headerItem">
              <FontAwesomeIcon icon={faPlane} />
              <span>
                <h3>Flights</h3>
              </span>
            </div>

            <div className="headerItem">
              <FontAwesomeIcon icon={faCar} />
              <span>
                <h3>Car rentals</h3>
              </span>
            </div>

            <div className="headerItem">
              <FontAwesomeIcon icon={faCar} />
              <span>
                <h3>Stays</h3>
              </span>
            </div>

            <div className="headerItem">
              <FontAwesomeIcon icon={faTaxi} />
              <span>
                <h3>Attractions</h3>
              </span>
            </div>
          </div>
          {listMode!==true && <><h1 className="headerTitle">Make Your Outings A Delight</h1>
          <p className="headingDescription">
            <h3>
              Outings are often memorable and one should not remember struggle while thinking about the last outing. Ensure smoothe accomodation with us!
            </h3>
          </p>
          <button className="headerBtn">Sign Up / Sign In</button>
          
          <SearchBar></SearchBar>
          </>}
        </div>
      </div>
    </>
  );
};

export default Header;
