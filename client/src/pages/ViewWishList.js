import React,{useState,useEffect} from 'react';
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';

const ViewWishList = () => {

    const [items, setItems] = useState([]);

    const getData = async () => {
      try {
        const response = await axios.get("/getWishList");
        setItems(response.data)
      } catch (error) {
        console.log(error);
      }
        
      };

      useEffect(() => {
        getData();
      }, [items]);

      const addToCart = async (item) => {
        const addItem = { id:item.id, name: item.name, count: item.count, price:item.price, category: item.category, promotion:item.promotion}
        try {
          const sendData = await axios.post("/addToCart",addItem);

        } catch (error) {
          console.log(error);
        }
      }

      const printItems = () => {
        return items.map((item)=>{
          return (
            <div className='container my-3' key={item.id}>
              <h3>Item Name: {item.name}</h3>
              <h4>Item Count: {item.count}</h4>
              <h4>Item Price: {item.price}/=</h4>
              <h4>Promotion: {item.promotion}</h4>
      
              {/* <button onClick={()=>addToWishList(item)}>Add to wishList</button> */}
              <button onClick={()=>addToCart(item)}>Add to cart</button>
            </div>
          )
        })
      }

    return (
        <div>
            <h2>WishList</h2>
            {printItems()}
        </div>
    )
}

export default ViewWishList
