import React, { Component } from 'react';
import axios from 'axios';

export class CallCoctail extends Component {
    state = {
       listCoctail: [] 
    }
    async componentDidMount(){
        let res = await axios.get("www.thecocktaildb.com/api/json/v1/1/latest.php");
        console.log("check res:", res.data);
    }
    render() {
        let {}
        return (
            <div>
                Hello 
                {console.log("phu", res.data)}
            </div>
        )
    }
}

export default CallCoctail;
