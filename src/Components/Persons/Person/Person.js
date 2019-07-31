import React from 'react';
import AssignedStyles from './Person.css';
//import Radium from 'radium';

const person = (props)=>{

    // const style = {
    //     '@media (min-width:500px)':{ //sets media query threshold it make it stay at 500px width
    //         width:'450px'
    //     }
    // }
    return (
        <div className={AssignedStyles.Person} // style={style}
        >
            {/*the style this overrides the className style */}
            <p onClick={props.click}>My name is {props.name} and am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change}
                   // value={props.name}
            />
        </div>

    );
}
export default person;
// export default Radium(person);