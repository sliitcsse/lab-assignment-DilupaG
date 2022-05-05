import React,{useState,useEffect} from 'react';
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';


const TradersHome = () => {

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

  const editItem = (item) => {
    navigator(`/editItem/${item.id}/${item.name}/${item.count}/${item.price}/${item.category}/${item.promotion}`);
  }
  const promoteItem =(item)=>{
    navigator(`/promoteItem/${item.id}/${item.name}/${item.count}/${item.price}/${item.category}/${item.promotion}`);
  }
  useEffect(() => {
    getData();
  }, [items]);

  const printItems = () => {
    return items.map((item)=>{
      return (
        <div className='container my-3' key={item.id}>
          <h3>Item Name: {item.name}</h3>
          <h4>Item Count: {item.count}</h4>
          <h4>Item Price: {item.price}/=</h4>
          <h4>Promotion: {item.promotion}</h4>

          <button onClick={()=>editItem(item)}>Edit Item</button>
          <button onClick={()=>promoteItem(item)}>Add Promotion</button>
        </div>
      )
    })
  }


  return (
    <div>
    <h1>Traders Items Inventory</h1>

    <Link className='btn btn-primary' to='/customerList'>Customers</Link>

    <Link className='btn btn-secondary' to='/addItem'>AddItems</Link>

    <Link className='btn btn-success' to='/viewPromotion'>ViewPromotion</Link>

    <Link className='btn btn-danger' to='/'>LogOut</Link>

    

    {printItems()}
     
    </div>
  )
}

export default TradersHome