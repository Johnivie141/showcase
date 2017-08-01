import  React, {Component } from 'react';


class EvenAndOdd extends Component{



constructor(props){
    super(props);
    this.state={
    evenArray:[],
    oddArray:[],
    userInput:''
};

 this.inputHandler= this.inputHandler.bind(this);
 this.clickHandler=  this.clickHandler.bind(this);
   
}



clickHandler(event){
console.log("input is " +this.state.userInput);
var newEvenArray = this.state.evenArray.slice(0);
var newOddArray = this.state.oddArray.slice(0);

if (this.state.userInput%2===0){
   console.log("new even");
     newEvenArray.push(this.state.userInput);
    this.setState({
    
        evenArray:newEvenArray.slice(0)
    })
}
else{
    console.log("new odd")
    newOddArray.push(this.state.userInput);
    this.setState({
        oddArray:newOddArray.slice(0)
    })

}
this.setState({
 userInput:''

})

}
inputHandler(event){
    console.log("setting to " + event.target.value);
    this.setState({
        userInput:event.target.value
    })

    
}


    render(){
        return (
        <div className="puzzleBox evenAndOddPB">
            <h4>Evens and Odds</h4>
            <input  value={this.state.userInput} onChange={this.inputHandler} className="inputLine"/>
            <button onClick={this.clickHandler} className="confirmationButton">Calculate</button>
            <span className="resultsBox">Evens:{JSON.stringify(this.state.evenArray)}</span>
            <span className="resultsBox">Odds:{JSON.stringify(this.state.oddArray)}</span>

        </div>
        );
    }
}


export default EvenAndOdd;