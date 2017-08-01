import React, { Component } from 'react';


class FilterString extends Component{
    constructor(props){
        super(props);
        this.state={
            names: [
                "James",
                "Jessica",
                "Melody",
                "Tyler",
                "Blake",
                "Jennifer",
                "Mark",
                "Maddy"

            ],
            userInput:'',
            filteredNames:[]
        };

    }
    handleChange(val){
        this.setState({userInput:val});

    }
    filterNames(){
        console.log("filter1");
        let resultArr=[];
        for (let i=0;i<this.state.names.length;i++){
            console.log("testing " + i + ": " + this.state.names[i]);
         if (this.state.names[i].toLowerCase().match(this.state.userInput.toLowerCase())){
             resultArr.push(this.state.names[i]);
         }

        }
        this.setState({
            userInput:'',
            filteredNames:resultArr
        })
    }

    render(){
        return (
<div className="puzzleBox filterStringPB">
<h4>Filter String</h4>
<span className="puzzleText">{JSON.stringify(this.state.names,null,10)}</span>
<input className="inputLine" value={this.state.userInput} onChange={(e)=>this.handleChange(e.target.value)} />
<button onClick={(e)=>this.filterNames(e)} className="confirmationButton">Calculate</button>
<span className="resultsBox filterStringPB">{JSON.stringify(this.state.filteredNames,null,10)}</span>

    </div>


        );
    }
}

export default FilterString;
