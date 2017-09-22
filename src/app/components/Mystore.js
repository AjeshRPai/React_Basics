import { EventEmitter } from "events";
import dispatcher from "./MyDispatcher";

class MyStore extends EventEmitter{
  constructor(props){
    super(props);
    this.myvalue="value 3";
  }
  getObj(){
    return this.myvalue;
  }

  change(text){
    this.myvalue=text;
    this.emit("change");
  }

  handleActions(action){
    console.log("happended");
    console.log("action",action);
  }
}

const store=new MyStore;
dispatcher.register(store.handleActions.bind(store));
window.dispatcher=dispatcher;

export default store;
