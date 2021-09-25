import React, { Component } from 'react';
import axios from 'axios';

export class CallCoctail extends Component {
    state = {
       listCoctail: [],
       name: ""
    }
    async componentDidMount(){
        let res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.state.name}`);
        console.log("a", res)
        this.setState({
            listCoctail: res && res.data && res.data.drinks ? res.data.drinks : []
        })
    }
    handleChange = (e) =>{
        this.setState({
            name: e.target.value
        })
         

    }
    handleSubmit = ()=>{
        this.componentDidMount();
    }
    render() {
        let {listCoctail} = this.state;
        return (
            <div>
                <div className="container">day la cua input: {this.state.name}</div>
                {listCoctail && listCoctail.length > 0 &&
                    listCoctail.map((item,index)=>{
                        return(
                            
                            <div className="child-coctail" key={item.id}>
                                <p>Ten san pham:{item.idDrink}</p>
                                <p>Gia san pham:{item.strDrink}</p>
                                <img src={item.strImageSource} alt="" />
                            </div>
                           
                           
                        )
                    })

                }
                 <input type="text"  onChange={(e)=>this.handleChange(e)}/>  
                 <input type="button" onClick={()=>this.handleSubmit()} value="submit" />
            </div>
        )
    }
}

export default CallCoctail;
