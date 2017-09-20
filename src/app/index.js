import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

import {Home} from "./components/Home";
import {User} from "./components/User";

class Layout extends React.Component {
     constructor(props){
     	super(props);
     }

    render() {
      return (
         <div>
          <h3> Home is here</h3>
        </div>
   
        );
    }
}

render(<Layout/>, window.document.getElementById('app'));
