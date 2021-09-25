import React, { Component } from 'react';
import axios from 'axios';

export class CallCoctail extends Component {

    // Trường hợp muốn thêm tải trang khi lấy dữ liệu có thể làm như thế này
    // 1. Tạo một state loading , có giá trị mặc định là false
    // 2. Trước khi gọi API, settate loading = true
    // 3. Sau khi gọi api setLoading đó bằng false
    // 4. Dựa vào state đó, xây dựng giao diện loading
    
    state = {
       listCoctail: [],
       name: "margarita",

       loading: false
    }

    // Các hàm phải cách nhau 1 
    handleChange = (e) =>{
        // Khi viết code không nên bỏ tróng các dòng 
        this.setState({
            name: e.target.value
        })
    }

    async fetchingCoctail() {
        this.setState({loading: true})
        let res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.state.name}`);
        console.log("a", res.data.drinks)
        this.setState({
            listCoctail: res && res.data && res.data.drinks ? res.data.drinks : []
        });
    }

    handleSubmit = ()=>{
        this.fetchingCoctail();
    }

    // Các life cycle nên đặt dưới các function để tránh nhầm 
    async componentDidMount(){
       this.fetchingCoctail(); 
    }

    render() {
        let {listCoctail, loading} = this.state;
        return (
            <div>
                <div className="container">day la cua input: {this.state.name}</div>
                { !loading ?
                    listCoctail.map((item,index)=>{
                        return(
                            <div className="child-coctail" key={item.id}>
                                <p>Ten san pham:{item.idDrink}</p>
                                <p>Gia san pham:{item.strDrink}</p>
                                <img src={item.strImageSource} alt="" />
                            </div>
                        )
                    }) : <div>Loading...</div>
                }
                 <input type="text"  onChange={(e)=>this.handleChange(e)}/>  
                 <input type="button" onClick={()=>this.handleSubmit()} value="submit" />
            </div>
        )
    }
}

export default CallCoctail;
