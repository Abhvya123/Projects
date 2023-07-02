

import TextForm from './Textform';
import Navbar from './Navbar';
// import About from './About';
import React, { useState } from "react";
import Alert from './Alert';

export default function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState("hey this is the alert function ");
  const showAlert=(message,type)=>{
    setAlert({
  msg:message,
  type:type
  })
 
}
const showAlert2=(message,type)=>{
  setAlert({
msg:message,
type:type
})
}




  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode has been enabled","success")

    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled","success")
    }
  }

  return (
    
    <>  
 
    <Navbar title="textutils" mode={mode} togglemode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
          
    
            {/* <About  showalert2={showAlert2}/> */}
      
        
          <TextForm showAlert={showAlert} heading="enter the text to analyze below"/>
          
       
      
          
        
        </div>
   
      
      </>
       
      
      
    
  );
}
