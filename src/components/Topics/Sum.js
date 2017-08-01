import React, { Component } from 'react';

class Sum extends Component{

constructor(props){
    super(props);
    this.state={
        number1:'0',
        number2:'0',
        sum:null
    }
}
onChangeOne(e){
    e.preventDefault();
    this.setState({
        number1:parseInt(e.target.value,10)
    })
}
onChangeTwo(e){
    e.preventDefault();
    this.setState({
        number2:  parseInt(e.target.value,10)
    })
}

sumValue(){
    let newSum= Number(this.state.number1) + Number(this.state.number2);
    console.log("new sum " + newSum);
    
    this.setState({
        sum:newSum,
        number1:'0',
        number2:'0'
    })
}

    render(){
        return (
   
          <div className="puzzleBox subPB">
            <h4>Sum</h4>
            <input  type="text" pattern="[0-9]*" onChange={(e)=>this.onChangeOne(e)} value={this.state.number1} className="inputLine" />
            <input type="text" pattern="[0-9]*" onChange={(e)=>this.onChangeTwo(e)} value={this.state.number2} className="inputLine" />
            <button onClick={(e)=>this.sumValue()} className="confirmationButton">Sum</button>
            <span className="resultsBox">{this.state.sum}</span>

          </div>
        
        
        );
    }
}

export default Sum;
