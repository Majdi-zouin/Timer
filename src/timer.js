import React, { Component } from 'react';
import './timer.css';
class Timer extends Component {
    constructor(props) {
        super (props);
        this.state = {  }
    }
    render() {
        return (<div>
            <div className='Timer'>
            
                <h1>00:30:00</h1>
                <h3>Hour Minute Second</h3>    
        </div>

        </div>)
    }
}




export default Timer;