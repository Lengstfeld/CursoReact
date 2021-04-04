import React, {useState} from 'react'; 
import PropTypes from 'prop-types'
const CounterApp = ({value}) => {
    const [counter, setCounter] = useState(value);//[]
    //handlyaeAdd
    const sumar1 = () => {
        setCounter(counter+1);
        //setCounter((c)=> c+1);
    }
    const reset = () => {
        setCounter(value);
    }
    const restar1 = () => {
        setCounter(counter-1);
    }
       return (
           <>
           <h1>CounterApp</h1>
           <h2>{counter}</h2>
           <button onClick={sumar1}>+1</button>
           <button onClick={reset}>Reset</button>
           <button onClick={restar1}>-1</button>
           </>
       ) 
}  
CounterApp.propTypes = {
    value: PropTypes.number.isRequired     
}
CounterApp.defaultProps = {
    value: 0
}
export default CounterApp;