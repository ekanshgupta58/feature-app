import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import "./color-display.css";
import useColor from './useColor'



function ColorDisplay({ color }) {
   
   const {bg,updaterId}=useColor(color);

    return (
        <div className='main'>
            <div style={{backgroundColor:bg}}  className='container-box'>
                <h2>Choose from below to update <br />  my bgColor.</h2>
                <h4>Current color is "{bg} updated by {updaterId}".</h4>
            </div>
        </div>
    );
}

export default {
    id: 'example:color-display',

    dependencies: {
        featureServices: {
            'acme:color-service': '^1.0.0'
        }
    },

    create(env) {
        const color = env.featureServices['acme:color-service'];
        return {
            render: () => <ColorDisplay color={color}  />
        };
    }
};
