import React, { Component } from 'react';
import axios from 'axios';

export class CallCoctail extends Component {
    state = {
       listCoctail: [],
       name: ""
    }
    async componentDidMount(){
        let res = await axios.get("https://60bddef6ace4d50017aabb88.mockapi.io/FEE/order");
        console.log("a", res.data)
        this.setState({
            listCoctail: res && res.data && res.data.data ? res.data.data : []
        })
    }
    handleChange = (e) =>{
        this.setState({
            name: e.target.value
        })
         
    }
    render() {
        let {listCoctail} = this.state;
        return (
            <div>
                <div className="container">Get</div>
                {listCoctail && listCoctail.length > 0 &&
                    listCoctail.map((item,index)=>{
                        return(
                            
                            <div className="child-coctail" key={item.id}>
                                <p>Ten san pham:</p>
                                <p>Gia san pham</p>
                            </div>
                           
                           
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
