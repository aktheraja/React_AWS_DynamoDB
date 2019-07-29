import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    person:[{id: "1234", name : 'Akin' ,age : '37'} ,{id: "1235", name :'', age :''}],
    showFigure: false
  }
  nameChangedHandler = (event,id)=>{
const personIndex = this.state.person.findIndex( p  =>{
  return
})

    // this.setState({person:[{name : Name ,age : '23'} ,{name :'Dolapo', age :'21'}]});
  }
   onChangEventHandler=(event)=>{
this.setState({person:[{name : event.target.value ,age : '23'} ,{name :'Dolapo', age :'21'}]});
  }
toggleFigurehandler =() =>{
    const change = this.state.showFigure;
    this.setState({showFigure: ! change});
}
deleteHandler = (index) =>{
    // const person = this.state.person.slice();
    const person  = [...this.state.person]//array of objects person
    person.splice(index,1);
    this.setState({person:person});
}
  render() {
    const style = {
      backgroundColor:'white',
      font:'inherit',
      border:'2px solid blue',
      padding:'8px',
      cursor:'pointer',
      boxShadow:  '0 10px 19px #ccc'
    };
    let change = null;
    if(this.state.showFigure){
      change = (
      <div>
        {/* index is provided by javascipt*/}
        {this.state.person.map((person,index) => {
          return <Person
              click ={()=> this.deleteHandler(index)}
              // click ={this.deleteHandler.bind(this,index)}
              key ={person.id}
              name ={person.name}
              age={person.age}
              changed={(event)=>  this.nameChangedHandler(event,person.id)}
          />
        })

        }
        {/*<Person name = {this.state.person[0].name} age = {this.state.person[0].age}*/}
        {/*        click={this.switchNameHandler.bind(this,'Aktheraja')}*/}
        {/*        changed={this.onChangEventHandler}>*/}
        {/*  I am an Engineer</Person>*/}
        {/*<Person name = {this.state.person[1].name} age = {this.state.person[1].age}> </Person>*/}
      </div>
      );

    }
    return (
      <div className="App">
        <h1> My name is Akinwale</h1>
        <button style={style}
            onClick={this.toggleFigurehandler}>Toggle me</button>
        {change}
        {/*{this.state.showFigure ===true ?*/}
        {/*<div>*/}
        {/*  <Person name = {this.state.person[0].name} age = {this.state.person[0].age}*/}
        {/*          click={this.switchNameHandler.bind(this,'Aktheraja')}*/}
        {/*          changed={this.onChangEventHandler}>*/}
        {/*    I am an Engineer</Person>*/}
        {/*  <Person name = {this.state.person[1].name} age = {this.state.person[1].age}> </Person>*/}
        {/*</div>*/}
        {/*}*/}
      </div>
    );
  }
}

export default App;
