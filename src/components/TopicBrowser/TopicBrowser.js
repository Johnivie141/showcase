import React, { Component } from 'react';

import FilterObject from '../Topics/FilterObject';

import EvenAndOdds from '../Topics/EvenAndOdd';

import FilterString from '../Topics/FilterString';
import Palindrome from '../Topics/Palindrome';
import Sum from '../Topics/Sum';

class TopicBrowser extends Component{



    render(){
        return (
    <div>
         <EvenAndOdds/>
         <FilterObject/>
         <FilterString/>
         <Palindrome/>
         <Sum/>
         </div>   
            
        );
    }
}



export default TopicBrowser;