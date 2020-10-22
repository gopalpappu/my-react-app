import CalculatorKey from './../calculatorKey/calculatorKey'
import React, { Component } from 'react';

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            labelValue:' ',
            key7:'7',
            key8:'8',
            key9:'9',
            key4:'4',
            key5:'5',
            key6:'6',
            key1:'1',
            key2:'2',
            key3:'3',
            key0:'0',
            keyplus:'+',
            keyequal:'=',
            accumulator:0
        }
    }

    getSelectedValue=(val)=> {
        
        if (val=='+') {
            this.setState({accumulator: parseInt(this.state.labelValue)})
            this.setState({labelValue:' '})
            return
        }

        if (val=='=') {
            this.setState({labelValue: String(this.state.accumulator + parseInt(this.state.labelValue)) })
            return
        }

        this.setState({labelValue: this.state.labelValue + val}, ()=>{});
    }
    
    render() { 
        return (
                <div className="main">

                <br/>

                <input type="text" className="form-control" value={this.state.labelValue} readOnly />

                <br/>

                <div className="form-group">
                
                    <CalculatorKey className="Key7" data={this.state.key7} callBack={this.getSelectedValue.bind(this)}></CalculatorKey>
                    <CalculatorKey className="Key8" data={this.state.key8} callBack={this.getSelectedValue.bind(this)}></CalculatorKey>
                    <CalculatorKey className="Key9" data={this.state.key9} callBack={this.getSelectedValue.bind(this)}></CalculatorKey>

                </div>

                <div className="form-group">
                
                    <CalculatorKey className="Key7" data={this.state.key4} callBack={this.getSelectedValue.bind(this)}></CalculatorKey>
                    <CalculatorKey className="Key8" data={this.state.key5} callBack={this.getSelectedValue.bind(this)}></CalculatorKey>
                    <CalculatorKey className="Key9" data={this.state.key6} callBack={this.getSelectedValue.bind(this)}></CalculatorKey>

                </div>

                <div className="form-group">
                
                    <CalculatorKey className="Key7" data={this.state.key1} callBack={this.getSelectedValue.bind(this)}></CalculatorKey>
                    <CalculatorKey className="Key8" data={this.state.key2} callBack={this.getSelectedValue.bind(this)}></CalculatorKey>
                    <CalculatorKey className="Key9" data={this.state.key3} callBack={this.getSelectedValue.bind(this)}></CalculatorKey>

                </div>

                <div className="form-group">
                
                    <CalculatorKey className="Key7" data={this.state.key0} callBack={this.getSelectedValue.bind(this)}></CalculatorKey>
                    <CalculatorKey className="Key8" data={this.state.keyplus} callBack={this.getSelectedValue.bind(this)}></CalculatorKey>
                    <CalculatorKey className="Key9" data={this.state.keyequal} callBack={this.getSelectedValue.bind(this)}></CalculatorKey>

                </div>
                   

                   
                </div>
           

        );
    }
}
 
export default Calculator;