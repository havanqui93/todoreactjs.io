import React, { Component } from 'react';
import './App.css';
import  AddModule from './module/AddMoule';
import Items from './module/ItemModule';
// import { filter } from lodash;
const uuidv4 = require('uuid/v4');

class App extends Component {

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    let dataItems = localStorage.getItem("items") == undefined ? [] : JSON.parse(localStorage.getItem("items"));

    this.state = {
       items : dataItems
    }
  }

  handleSubmit(item){
    let { items } = this.state;
    items.push({ id : uuidv4() , value : item.value });
    this.setState({
      items : items
    });
    localStorage.setItem("items",JSON.stringify(items));
  }

  handleDelete(id){
    let { items } = this.state;
    let index = items.findIndex(x => x.id == id);
    items.splice(index,1);
    this.setState({
      items : items
    });
    localStorage.setItem("items",JSON.stringify(items));
  }

  render() {

    return (
      <div>
        <AddModule onclickSubmit={this.handleSubmit} onclickTest={this.handleTest} />
        <Items dataItems={this.state.items} onclickBtnDelete={this.handleDelete} />
      </div>
    );
  }
}

export default App;
