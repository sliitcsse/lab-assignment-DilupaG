import React,{useState,useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const UsersHome = () => {

  const [items, setItems] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get("/getItems");
      setItems(response.data)
    } catch (error) {
      console.log(error);
    }
   
  };

  useEffect(() => {
    getData();
  }, []);

  const printItems = () => {
    return items.map((item)=>{
      return (
        <div className='container my-5' key={item.id}>
          <h3>Item Name: {item.name}</h3>
          <h4>Item Price: {item.price}/=</h4>
          <h4>Promotion: {item.promotion}</h4>
        </div>
      )
    })
  }

  return (
    <div className='container'>
      <h1> Shopping Cart Landing Page</h1>
     <Link to="/createProfile"> <button className='btn btn-primary'> Create Profile </button></Link>
    {
      printItems()
    }
    </div>
  )
}

export default UsersHome