import React, { Component } from 'react';
import axios from 'axios';

export class CallCoctail extends Component {
    async componentDidMount(){
        let res = await axios.get("www.thecocktaildb.com/api/json/v1/1/latest.php");
        console.log("checkà res:", res.data);
    }
    render() {
        return (
            <div>
                Hello 
            </div>
        )
    }
}

export default CallCoctail;
