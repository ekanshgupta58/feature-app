import * as React from 'react';
import { useState } from 'react';
import closeEye from './img/close-eye.png';
import openEye from './img/eye.png';
import "./main.css";
import { useEffect } from 'react';


function NameDisplay({ details }) {
  const [visibility, setVisibility] = useState(false);
  const [text, setText] = useState("Show");
  const handleClick = () => {
    !visibility ? setVisibility(true) : setVisibility(false);
    text === "Show" ? setText("Hide") : setText("Show");
  }
  const date = new Date();
  const [time, setTime] = useState()

  useEffect(() => {
    setTime(date.toLocaleTimeString())
    
  },[setInterval(()=>new Date,1000)])


  console.log("Hello")
  return (
    <div className='container'>
      <div className='mainHeading'><h1>Hye! I am Ekansh Gupta</h1></div>
      <div className='sub'><h3>This Feature app shows some details.</h3></div>

      <div className='img' onClick={handleClick}>
        <div>{text} Details</div>
        {!visibility ?
          <img src={closeEye} alt="" /> :
          <img src={openEye} alt="" />
        }
      </div>
      <div style={{ backgroundColor: "white" }} >{time} </div>

      {visibility && <div className='details'>

        <img className='photo' src={details.photo}></img>
        <div>
          <div>Name: <span> {details.name}</span></div>
          <div>Company: <span>{details.company}</span></div>
          <div>Department: <span>{details.department}</span></div>
          <div>Sub Department: <span>{details.subDepartment}</span></div>
          <div>Track: <span>{details.track}</span></div>
        </div>
      </div>}


    </div>
  );
}

export default {
  id: 'example:name-display',

  dependencies: {
    featureServices: {
      'acme:my-feature-service': '^1.1.0'
    }
  },

  create(env) {
    const details = env.featureServices['acme:my-feature-service'];
    console.log(details.getDetails())
    return {
      render: () => <NameDisplay details={details.getDetails()} />
    };
  }
};

