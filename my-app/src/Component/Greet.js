import React from 'react';

//Functional Componet without arrow function
// function Greet(){
//     return <h1>Hello Ujjawal</h1>
// }

// Default export
const Greet = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Greeting {props.name} also known as {props.heroName}</h1>
            {props.children}
        </div>
    )
}

export default Greet;

//Name Export
//export const Greet= () => <h1>Hello Ujjawal</h1>