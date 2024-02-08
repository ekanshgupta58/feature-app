import * as React from 'react';
import { useState } from 'react';
import "./color-display.css";

// function createButton(title, onClick) {
//     const button = document.createElement('button');
  
//     button.innerHTML = title;
//     button.onclick = onClick;
  
//     return button;
//   }

  function SetColor({ color }) {
   
    
 
     return (
        <div className='button-container'>
         <div  className='buttonGroup'>
             <button onClick={()=>color.setBg('green')}>Green</button>
             <button onClick={()=>color.setBg('blue')}>Blue</button>
             <button onClick={()=>color.setBg('red')}>Red</button>
             <button onClick={()=>color.setBg('aliceblue')}>Aliceblue</button>
             <button onClick={()=>color.setBg('aqua')}>Aqua</button>
             <button onClick={()=>color.setBg('azure')}>Azure</button>
             <button onClick={()=>color.setBg('#E4C3AD')}> #E4C3AD</button>
         </div>
         
         </div>
     );
 }


export default {
    id: 'example:set-color',

    dependencies: {
        featureServices: {
            'acme:color-service': '^1.0.0'
        }
    },

    create(env) {
        const color = env.featureServices['acme:color-service'];
        // console.log(color.getColor());
        return {
            // attachTo(container) {
            //   container.appendChild(createButton('green', () => color.setBg("green")));
             
             
            // }
            render: () => <SetColor color={color}  />
          };
    }
};
