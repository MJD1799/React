import React, { Component } from 'react';
import './App.css';
import Persons from './Components/Persons/Persons';
import Cockpit from './Components/Cockpit/Cockpit';
class App extends Component {

  constructor(props) {
    super(props);
    this.state ={
      person:[
      {name:"Jd", age:"15",id:"12"},
      {name:"sam",age:"11",id:"q1"},
      {name:"tom", age:"29",id:"123"}
    ],
    show:true
  };
  console.log('[App.js] constructor');
  }
   nameChangeHandler(event) {
      let newName="MJDDD";
      console.log(this);
      this.setState({person:[
        {name:"Jd", age:"15",id:"12"},
        {name:newName,age:"11",id:"q1"},
        {name:"tom", age:"29",id:"123"}
      ]});
  }
  inputnameChangeHandler = (event,key)=> {
    const changID = this.state.person.findIndex(cur => cur.id===key);
    const newArr = [...this.state.person];
    console.log(key);
    newArr[changID].name = event.target.value;
    this.setState({person:newArr});
  }
  toggleHandler(){
    this.setState({show:this.state.show?false:true});
  }
  deletnameHandler(idx){
    console.log("d: ",idx,this);
    const newArr = [...this.state.person];
    newArr.splice(idx,1);
    console.log(newArr);
    this.setState({person:newArr});
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }
  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }
  render() {
    console.log('[App.js] render');
    let persons=null;
    if(this.state.show)
    {
      persons = ( <Persons 
                     persons={this.state.person} 
                     changed={this.inputnameChangeHandler}
                     clicked={this.deletnameHandler.bind(this)}
                      />
       );
    }

   
    return (
      <div className='App'>
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.show}
          persons={this.state.person}
          clicked={this.toggleHandler.bind(this)}
        />
        {persons}
      </div>
    );
  }
}

export default App;
