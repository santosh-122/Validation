import React  from "react";
import classess from './Card.module.css';

const Card = (props) => {
    const classes = 'Card ' + props.className;
return <div className={classes}> {props.children} </div>


};
export default Card;