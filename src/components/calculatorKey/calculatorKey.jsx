import React, { Component } from 'react';

class CalculatorKey extends Component {
    constructor(props) {
        super(props);
         
    }
    
    pressed=(evt)=>{
        this.props.callBack(evt.target.value);
    }

    render() { 
        return (
            
                <input type="button" className="btn btn-success" value={this.props.data}
                  onClick={this.pressed.bind(this)}/>
              
        );
    }
}
 
export default CalculatorKey;