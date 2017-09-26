import React from 'react';
import { render } from 'react-dom';
import MyStore from "./components/MyStore";
import * as action from "./components/Actions.js";

// using CommonJS modules
class Layout extends React.Component {
     constructor(props){
     	super(props);
      this.state={
         store:MyStore.getObj(),
      };
     }

     componentWillMount(){
       MyStore.on("change",()=>{
         this.setState({
            store:MyStore.getObj(),
         });
       });
     }


    create(){
      action.create("somestring");
    }

    render() {
      const{ store}=this.state;

      return (
        <div>
        <button onClick={this.create.bind(this)}>Create</button>
        <h1>State is {store}</h1></div>
      );
    }
}


render(<Layout/>, window.document.getElementById('app'));
