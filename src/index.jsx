import {createFeatureHub} from '@feature-hub/core';
import {loadAmdModule} from '@feature-hub/module-loader-amd';
import {
  FeatureAppContainer,
  FeatureHubContextProvider,

} from '@feature-hub/react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import nameDefinition from './name';
import nameDisplay from './name-display';
import colorDefinition from './color'
import colorDisplay from './color-display';
import setColor from './set-color';


const {featureAppManager} = createFeatureHub('example:counter-web-app', {
  featureServiceDefinitions: [nameDefinition,colorDefinition],
  moduleLoader: loadAmdModule
});
const src="./color-display";
ReactDOM.render(
  <FeatureHubContextProvider value={{featureAppManager}}>
    <FeatureAppContainer featureAppDefinition={nameDisplay}/>
    <FeatureAppContainer featureAppDefinition={colorDisplay}/>
    {/* <FeatureAppLoader
        featureAppId="example:color-display"
        
        src={src}
      /> */}
  <FeatureAppContainer featureAppDefinition={setColor}/>
   
   
  </FeatureHubContextProvider>,
  document.getElementById('app')
);
