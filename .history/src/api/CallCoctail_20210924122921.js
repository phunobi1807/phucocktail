import React, { Component } from 'react';
import axios from 'axios';

export class CallCoctail extends Component {
    state = {
       listCoctail: [] 
    }
    async componentDidMount(){
        let res = await axios.get("www.thecocktaildb.com/api/json/v1/1/random.php");
        this.setState({
            listCoctail: res && res.data && res.data.data ? res.data.data : []
        })
    }
    render() {
        // let {listCoctail} = this.state;
        return (
            <div>
                Hello 
                {/* {console.log("phu", listCoctail)} */}
            </div>
        )
    }
}

export default CallCoctail;
