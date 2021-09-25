import React, { Component } from 'react';
import axios from 'axios';

export class callapi extends Component {
    async  componentDidMount(){
        let res = await axios.get("www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita");
        console.log("check res:", res)
    }
    render() {
        return (
            <div>
                <Hello></Hello>
            </div>
        )
    }
}

export default callapi
