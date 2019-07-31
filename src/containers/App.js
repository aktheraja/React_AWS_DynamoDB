import React, { Component } from 'react';
import AssignedStyles from './App.css';
import Persons from  '../Components/Persons/Persons';
// import Radium, {StyleRoot} from 'radium';

class App extends Component {
  state = {
    person:[{id: "1234", name : 'Akin' ,age : '37'}
    ,{id: "1235", name :'', age :''},{id: "1245", name :'', age :''}],
    showFigure: false
  }

  //person here is a list of items and findIndex searches the index of the value passed
  nameChangedHandler = (event,id)=>{
    const personIndex = this.state.person.findIndex( p  =>{
  return (p.id===id);
});
    const person = {
      ...this.state.person[personIndex]
  };
  //  you can use this too: const person =Object.assign({}, this.state.person[personIndex]);

    person.name = event.target.value; //changing the name of the state to new event value passed from the input
    const persons = [...this.state.person];//making a new copy of the state
    persons[personIndex]=person;//assigning the object at the index to the person list
    this.setState({person:persons});

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

    let NewChange = null;
    let btnClass= ' ';
    if(this.state.showFigure){
      btnClass=AssignedStyles.Red;

      NewChange  = (
      <div>
          <Persons persons = {this.state.person} clicked = {(index)=>this.deleteHandler(index)}
                   changed = {(event, id) => this.nameChangedHandler(event, id)}/>

      </div>
      );

    }
    const classes =[];
    if(this.state.person.length <=2){
      classes.push(AssignedStyles.red);//classes =['red']
    }
    if (this.state.person.length <=1){
      classes.push(AssignedStyles.bold);//classes = ['red','bold']
    }

    return (
      //  <StyleRoot>
      <div className={AssignedStyles.App}>
        <h1> My name is Akinwale</h1>
        <p className = {classes.join(" ")}> This Text Changes on person length</p>
        <button className={btnClass}
            // style={style}
            onClick={this.toggleFigurehandler}>Toggle me</button>
        {NewChange}

      </div>
       // </StyleRoot>
    );
  }
}
export default App;
// export default Radium(App);
