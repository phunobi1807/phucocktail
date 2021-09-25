import React, { Component } from 'react';
import axios from 'axios';

export class CallCoctail extends Component {
    state = {
       listCoctail: [],
       name: "margarita"
    }

    // Các hàm phải cách nhau 1 
    handleChange = (e) =>{
        // Khi viết code không nên bỏ tróng các dòng 
        this.setState({
            name: e.target.value
        })
    }

    async _fetchingCoctail() {
        let res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.state.name}`);
        console.log("a", res.data.drinks)
        this.setState({
            listCoctail: res && res.data && res.data.drinks ? res.data.drinks : []
        })
    }

    handleSubmit = ()=>{
        this.componentDidMount();
    }

    // Các life cycle nên đặt dưới các function để tránh nhầm 
    async componentDidMount(){
        
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
