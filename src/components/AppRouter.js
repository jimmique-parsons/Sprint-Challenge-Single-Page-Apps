import React from "react";
import { Route } from "react-router-dom";
import WelcomePage from "./WelcomePage.js";
import CharacterList from "./CharacterList.js";

 export default function AppRouter(props) {
  return (
    <div>
      <Route 
        exact 
        path="/" 
        component={WelcomePage}
      />
​
       <Route 
        path="/characters" 
        render={props => <CharacterList {...props} />}
      /> 
    </div>
  );
};