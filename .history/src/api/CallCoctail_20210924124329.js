import React, { Component } from 'react';
import axios from 'axios';

export class CallCoctail extends Component {
    state = {
       listCoctail: [] 
       name: ""
    }
    async componentDidMount(){
        let res = await axios.get("www.thecocktaildb.com/api/json/v1/1/search.php?f=a");
        console.log("a", res)
        this.setState({
            listCoctail: res && res.data && res.data.data ? res.data.data : []
        })
    }
    handleChange (e) =>{

    }
    render() {
        let {listCoctail} = this.state;
        return (
            <div>
                {listCoctail && listCoctail.length > 0 &&
                    listCoctail.map((item,index)=>{
                        return(
                            <>
                            <div className="child-coctail">
                                {item.idDrink} - {item.strDrink}
                            </div>
                           
                            </>
                        )
                    })

                }
                 <input type="text"  onChange={(e)=>this.handleChange(e)}/>  
                 <input type="button" value="submit" />
            </div>
        )
    }
}

export default CallCoctail;
