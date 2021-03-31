import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './Component/Greet'; //default Import
//import {Greet} from './Component/Greet'; //Name import
import Welcome from './Component/Welcome';
import Hello from './Component/Hello';
import Message from './Component/Message';
import Counter from './Component/Counter';
import FunctionClick from './Component/FunctionClick';
import ClassClick from './Component/ClassClick';
import EventBind from './Component/EventBind';
import ParentComponent from './Component/ParentComponent';
import UserGreeting from './Component/UserGreeting';
import NameList from './Component/NameList';
import Stylesheet from './Component/Stylesheet';
import Inline from './Component/Inline';
import './Component/appStyles.css'
import styles from './Component/appStyles.module.css'
import Form from './Component/Form';
import LifeCycleA from './Component/LifeCycleA';
import UpdateLifeCycleA from './Component/UpdateLifeCycleA';
import FragmentDemo from './Component/FragmentDemo';
import Table from './Component/Table';
import PureComp from './Component/PureComp';
import ParentComp from './Component/ParentComp';
import RefsDemo from './Component/RefsDemo';
import ParentInput from './Component/ParentInput';
import FRParentInput from './Component/FRParentInput';
import PortalDemo from './Component/PotralDemo';
import Hero from './Component/Hero';
import ErrorBoundary from './Component/ErrorBoundary';
import ClickCounter from './Component/ClickCounter';
import HoverCounter from './Component/HoverCounter';
import ClickCounterTwo from './Component/ClickCounterTwo';
import HoverCounterTwo from './Component/HoverCounterTwo';
import User from './Component/User';
import CounterTwo from './Component/CounterTwo';
import ComponentC from './Component/ComponentC';
import { UserProvider } from './Component/userContext';
import EnableDisableLink from './Component/EnableDisableLink';
import Tenant from './Component/Tenant';
import ReactNewTable from './Component/ReactNewTable';



function App() {
  return (
    <div className="App">
      {/* <ReactNewTable/> */}
      <Tenant/>
      {/* {<EnableDisableLink notClickable={true}/>} */}
     {/* { <UserProvider value="Vishwash">
        <ComponentC />
      </UserProvider>} */}
      
      {/* <CounterTwo>
        {(count, incrementCount) =>
          <ClickCounterTwo count={count} incrementCount={incrementCount} />}
      </CounterTwo>
      <CounterTwo >{(count, incrementCount) =>
        <HoverCounterTwo count={count} incrementCount={incrementCount} />}
      </CounterTwo>
      */}
      {/*<ClickCounterTwo/>
      <HoverCounterTwo/>
      <User render={(isLoggerIn)=>isLoggerIn? 'Vishwash': 'Guest'}/>*/}
      {/*<HoverCounter/>*/}
      { /*<ClickCounter/>*/}
      {/* <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
     </ErrorBoundary> */}
      {/*<PortalDemo/>*/}
      {/*<FRParentInput/>*/}
      {/* <ParentInput/>*/}
      {/*<RefsDemo />*/}
      {/* <ParentComp/> */}
      {/* <PureComp/>*/}
      {/*<Table/>*/}
      {/* <FragmentDemo/> */}
      {/*<UpdateLifeCycleA/>*/}
      {/*<LifeCycleA/>*/}
      {/* <Form/>*/}
      {/* <h1 className='failure'>Error</h1>
     <h1 className={styles.success}>Success</h1>*/}
      {/* <Inline/>*/}
      {/*<Stylesheet primary={false}/>*/}
      {/*<NameList/>*/}
      {/*<UserGreeting/>*/}
      {/*<ParentComponent />*/}
      {/*<EventBind/>*/}
      {/*<FunctionClick/>
      <ClassClick/>*/}
      {/*<Message/>*/}
      {/*<Counter/>*/}
    </div>
    /*
    //Default import, in it we are allowed to import with any name like here MyComponent
    <div className="App">
      <MyComponent name='Bruce' heroName='Batman'>
        <p>This is children paragraph</p>
        </MyComponent>
      <MyComponent name='Clark' heroName='Superman'>
        <button >Action</button>
        </MyComponent>
      <MyComponent name='Diana' heroName='Wonder Woman' />
      <Welcome name='Bruce' heroName='Batman'/>
      <Welcome name='Clark' heroName='Superman'/>
      <Welcome name='Diana' heroName='Wonder Woman'/>
      <Hello />
    </div>
    //Name import, we had to import with component name only.
    // <div className="App">
    //   <Greet/>
    // </div>
    */
  );
}

export default App;
