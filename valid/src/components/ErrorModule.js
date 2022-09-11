import React from 'react';
import  classess from './ErrorModule.css';
import Card from './Card';

const ErrorModule = (props) => {

   const backdrop =
       {
         position: "fixed",
         top: 0,
         left: 0,
         width: "100%",
         height: "100vh",
         zIndex: "10",
         backGround: "rgba(0, 0, 0, 0.75)",
       }

  return (
   <div>

      <div style ={backdrop} onClick={props.onConfirm}/>

    <Card className = "classess.modal">
   
         <header className={classess.header} >
            <h2>{props.title}</h2>
         </header>
         <div className={classess.content}>
            <p>{props.message}</p>
         </div>
         <footer className={classess.actions}>
            <button onClick={props.onConfirm}>okay</button>
         </footer>
    </Card>
    </div>
  );
}

export default ErrorModule;
