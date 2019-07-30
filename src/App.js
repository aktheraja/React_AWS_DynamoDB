import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    person:[{id: "1234", name : 'Akin' ,age : '37'}
    ,{id: "1235", name :'', age :''},{id: "1245", name :'', age :''}],
    showFigure: false
  }

  //person here is a list of items and findIndex searches the index of the value passed
  nameChangedHandler = (event,id)=>{
    const personIndex = this.state.person.findIndex( p  =>{
  return p.id===id;
});
    const person = {
      ...this.state.person[personIndex]
  };
  //  you can use this too: const person =Object.assign({}, this.state.person[personIndex]);

    person.name = event.target.value; //changing the name of the state to new event value passed from the input
    const persons = [...this.state.person];//making a new copy of the state
    persons[personIndex]=person;//assigning the object at the index to the person list
    this.setState({person:persons});

    // this.setState({person:[{name : Name ,age : '23'} ,{name :'Dolapo', age :'21'}]});
  }
//    onChangEventHandler=(event)=>{
// this.setState({person:[{name : event.target.value ,age : '23'} ,{name :'Dolapo', age :'21'}]});
//   }
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
      backgroundColor:'green',
      color:'white',
      font:'inherit',
      border:'2px solid blue',
      padding:'8px',
      cursor:'pointer',
      boxShadow:  '0 10px 19px #ccc'
    };
    let NewChange = null;
    if(this.state.showFigure){
      style.backgroundColor = 'red';
      NewChange  = (
      <div>
        {/* index is provided by javascipt*/}
        {this.state.person.map((person,index) => {
          return <Person
              click ={()=> this.deleteHandler(index)}
              // click ={this.deleteHandler.bind(this,index)}
              key ={person.id}
              name ={person.name}
              age={person.age}
               change={(event) => this.nameChangedHandler(event,person.id)}
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
    const classes =[];
    if(this.state.person.length <=2){
      classes.push('red');
    }
    if (this.state.person.length <=1){
      classes.push('bold');
    }
    console.log(classes);
    return (
      <div className="App">
        <h1> My name is Akinwale</h1>
        <p className = {classes.join(" ")}> This Text Changes on person length</p>
        <button style={style}
            onClick={this.toggleFigurehandler}>Toggle me</button>
        {NewChange}
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
