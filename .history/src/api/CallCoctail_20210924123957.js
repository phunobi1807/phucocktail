import React, { Component } from 'react';
import axios from 'axios';

export class CallCoctail extends Component {
    state = {
       listCoctail: [] 
    }
    async componentDidMount(){
        let res = await axios.get("www.thecocktaildb.com/api/json/v1/1/search.php?f=a");
        console.log("a", res)
        this.setState({
            listCoctail: res && res.data && res.data.data ? res.data.data : []
        })
    }
    render() {
        let {listCoctail} = this.state;
        return (
            <div>
                {listCoctail && listCoctail.length > 0 &&
                    listCoctail.map((item,index)=>{
                        return(
                            <div className="child-coctail">
                                {item.idDrink} - {item.strDrink}
                            </div>
                        )
                    })

                }
            </div>
        )
    }
}

export default CallCoctail;
