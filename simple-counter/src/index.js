import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faClock} from '@fortawesome/free-solid-svg-icons';


function App(props) {
  return (
    <div className="globalCounter">
      <div className="icon"><FontAwesomeIcon icon={faClock}/>
      </div>
      <div className="four">{props.digitFour}</div>
      <div className="three">{props.digitThree}</div>
      <div className="two">{props.digitTwo}</div>
  <div className="one">{props.digitOne}</div>
    </div>
  );
}

App.propTypes = {

  digitFour: PropTypes.number,
  digitThree: PropTypes.number,
  digitTwo: PropTypes.number,
  digitOne: PropTypes.number
};

let contador = 0;

setInterval(function(){
  
  const four = Math.floor(contador/1000 %10);
  const three = Math.floor(contador/100 %10);
  const two = Math.floor(contador/10 %10);
  const one = Math.floor(contador/1 %10);
  console.log(four , three , two, one);

  contador++;



  ReactDOM.render(
    <App digitOne={one} digitTwo={two} digitThree= {three} digitFour= {four} />,
    document.querySelector('#root')
  );
  
},1000);