import  React, { Component } from 'react';

class FilterObject extends Component{

constructor(props){
    super(props);
    this.state={
      unFilteredArray: [
        {
          name: 'Jimmy Joe',
          title: 'Hack0r',
          age: 12,
        },
        {
          name: 'Jeremy Schrader',
          age: 24,
          hairColor: 'brown'
        },
        {
          name: 'Carly Armstrong',
          title: 'CEO',
        }
      ],
      userInput:"",
      filteredArray:[]
    };

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);

}
onChange(event){
  
    this.setState({userInput:event.target.value});

}



onClick(event){
   
  let prop=this.state.userInput;
  let newArray=[];
  for (let i=0;i<this.state.unFilteredArray.length;i++){
      if (this.state.unFilteredArray[i].hasOwnProperty(prop)){
         newArray.push(this.state.unFilteredArray[i]);
      }
  }
  
  this.setState({
      filteredArray:newArray.slice(0),
      userInput:""
      });

}
    render(){
        return (
          <div className="puzzleBox filterObjectPB">
              <h4>Filter Object</h4>
            <span className="puzzleText">{JSON.stringify(this.state.unFilteredArray)}</span>
            <input className="inputLine" value={this.state.userInput} onChange={this.onChange}/>
            <button onClick={this.onClick} className="confirmationButton">Calculate</button>
            <span className="resultsBox filterObjectRB">{JSON.stringify(this.state.filteredArray)}</span>
           </div>
       
       
        );
    }
}


export default FilterObject;