import React from 'react';

const Hello = () => {
    //WIth JSX--

    /* return (
         <div>
             <h1>Hello Ujjawal</h1>
         </div>
     ) */

    //Without JSX--
    //return React.createElement('div',null,'<h1>Hello Ujjawal</h1>');// output- <h1>Hello Ujjawal</h1>
    //return React.createElement('div', null, React.createElement('h1', null, 'Hello Ujjawal'));// Output- Hello Ujjawal
    return React.createElement('div', { id: 'helloId', className: 'dummyClass' }, React.createElement('h1', null, 'Hello Ujjawal'));//2nd args is element with id and class

}

export default Hello;