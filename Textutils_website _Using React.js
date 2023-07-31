


import './App.css';
import Navbar from './Components/Navbar';
import Textform from'./Components/Textform';
import Alert from './Components/Alert';
import React, { useState } from 'react'; 


function App() {
 
const[alert,setalert]=useState("light mode is  enabled ");
 const togglemode=()=>{  
  if(mode==='light'){
    setMode('dark');
    settxt('enable light mode');
    document.body.style.backgroundColor='grey';
  setalert("Dark mode enabled ");
  document.title='Textutils-Dark mode';
  setInterval(()=>{
  document.title='Textutils  is an amazing mode';
  },2000);
  
 
  }
  
  else{
    setMode('light');
    settxt('enable dark mode');
    document.body.style.backgroundColor='white';
 setalert("light mode enabled");
 document.title="Textutils-Light Mode";
  }

 }

 const [txt,settxt]=useState('Enable Dark mode');

  const[mode,setMode]=useState('light');//whether dark mode is enabled or not

  return (
   
    <>
 
   <Navbar title="my Textutils" about="About Textutils " mode={mode} togglemode={togglemode} txt={txt} />
    <Alert  alert={alert}/>
  <Textform heading="Enter the text to analyze" mode={mode}/>
   

     

  </>
  );
}

export default App;
