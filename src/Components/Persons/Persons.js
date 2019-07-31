import Person from "./Person/Person";
import React from "react";

const persons =  ( props)=>{ return (
    props.persons.map((person, index) => {

        return (<Person
            click={() => props.clicked(index)}
            // click ={this.deleteHandler.bind(this,index)}
            key={person.id}
            name={person.name}
            age={person.age}
            change={(event) => props.changed(event, person.id)}
        />)
    })

)};

export default persons;