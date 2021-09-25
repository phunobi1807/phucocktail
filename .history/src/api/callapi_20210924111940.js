import React, { Component } from 'react';
import axios from 'axios';

export class callapi extends Component {
    async  componentDidMount(){
        let res = awai axios.get("www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita");
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default callapi
