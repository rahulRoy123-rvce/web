import React from 'react'
import { useState,useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Hero from './Hero'


const Practice = () => {


const [resourceType, setResourceType] = useState('posts')

// const number = 0;
const [count,setCount] = useState(0);

function increment(){
   
   setCount(count+1);

}

function decrement(){
   
    setCount(count-1);
}

  return (
    <>
    <div>
        <button onClick ={()=> setResourceType('posts')}>Navbar</button>
        <button onClick ={()=> setResourceType('users')}>Users</button>
        <button onClick ={()=> setResourceType('comments')}>Comments</button>
      
    </div>
    <h1>{resourceType}</h1>
    <button onClick={increment}>
        +
    </button>
    {count}
    <button onClick={decrement}>
        -
    </button>
    </>
  )
}

export default Practice;
