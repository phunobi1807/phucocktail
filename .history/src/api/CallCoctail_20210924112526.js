import React, { Component } from 'react';
import axios from 'axios';

export class CallCoctail extends Component {
    async componentDidMount(){
        let res = await axios.get("https://reqres.in/api/users?page=1");
        console.log("check res:", res.data)
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
