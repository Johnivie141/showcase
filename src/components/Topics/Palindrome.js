import React, {Component} from 'react';



class Palindrome extends Component{

constructor(props){
    super(props);
    this.state={
        userInput:'',
        isPalindrome:''
    }
}
handleChange(val){
    this.setState({userInput:val});
}
checkPalindrome(){
   console.log(this.state.isPalindrome);
    let c = this.state.userInput;
    
    let check=true;
    for (let i=0;i<c.length/2;i++){
        if (c[i] !== c[c.length -1 -i]) check=false;

    }
    if (!check) check="false";
    else check="true";
    
    this.setState({isPalindrome:check});

}

    render (){
        return (

          <div className="puzzleBox palindromePB">
            <h4></h4>
            <input onChange={(e)=>this.handleChange(e.target.value)} value={this.state.userInput} className="inputLine"/>
            <button onClick={(e)=>this.checkPalindrome()}className="confirmationButton">Check</button>
            <span className="resultsBox">Palindrome: {this.state.isPalindrome}</span>

          </div>


        );
    }
}

export default Palindrome;