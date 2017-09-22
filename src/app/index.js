import React from 'react';
import { render } from 'react-dom';
import MyStore from "./components/MyStore"

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

    render() {
      const{ store}=this.state;

      return (
        <div>State is {store}</div>
      );
    }
}


render(<Layout/>, window.document.getElementById('app'));
