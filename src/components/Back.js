import React from 'react';
import  ReactDOM  from 'react-dom';
import classes from './Back.module.css';


const Back = (props) => {
   const Back = (props)=>{
    return (
        <div className={`${classes.back} ${props.className}`}>
            {props.children}
        </div>
    )
   }
  return (
   <React.Fragment>
    {ReactDOM.createPortal(<Back children={props.children}/>,document.getElementById('backdrop'))}
   </React.Fragment>
  )
}

export default Back