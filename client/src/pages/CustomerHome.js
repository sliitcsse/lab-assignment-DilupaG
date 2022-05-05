import React,{useState,useEffect} from 'react';
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';

const CustomerHome = () => {

  const [items, setItems] = useState([]);

  const navigator = useNavigate()
  
const getData = async () => {
  try {
    const response = await axios.get("/getItems");
    setItems(response.data)
  } catch (error) {
    console.log(error);
  }
  
};

const addToWishList = async (item) => {
  const addItem = { id:item.id, name: item.name, count: item.count, price:item.price, category: item.category, promotion:item.promotion}
  try {
    const sendData = await axios.post("/addToWishList",addItem);
  } catch (error) {
    console.log(error);
  }
  
}

const addToCart = async (item) => {
  const addItem = { id:item.id, name: item.name, count: item.count, price:item.price, category: item.category, promotion:item.promotion}
  try {
    const sendData = await axios.post("/addToCart",addItem);
  } catch (error) {
    console.log(error);
  }
  
}

useEffect(() => {
  getData();
}, [items]);

const printItems = () => {
  return items.map((item)=>{
    return (
      <div className='container my-3' key={item.id}>
        <h3>Item Name: {item.name}</h3>
        <h4>Item Price: {item.price}/=</h4>
        <h4>Promotion: {item.promotion}</h4>

        <button onClick={()=>addToWishList(item)}>Add to wishList</button>
        <button onClick={()=>addToCart(item)}>Add to cart</button>
      </div>
    )
  })
}


return (
  <div>
  <h1>Customer Home</h1>

  <Link className='btn btn-primary' to='/viewCart'>ViewCart</Link>
  <Link className='btn btn-success' to='/viewWishList'> ViewWishList</Link>

  <Link className='btn btn-danger' to='/'>LogOut</Link>

  
  {printItems()}
   
  </div>
)
}
export default CustomerHome