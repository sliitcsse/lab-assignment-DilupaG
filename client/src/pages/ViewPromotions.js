import React,{useState,useEffect} from 'react';
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';

const ViewPromotions = () => {

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
    
      useEffect(() => {
        getData();
      }, [items]);

      const editItem = (item) => {
        navigator(`/editItem/${item.id}/${item.name}/${item.count}/${item.price}/${item.category}`);
      }
 
      const printItems = () => {
        return items.map((item)=>{
            if(item.promotion!='no promotion'){

                return (
            <div  className='container my-3' key={item.id}>
              <h3>Item Name: {item.name}</h3>
              <h4>Item Count: {item.count}</h4>
              <h4>Item Price: {item.price}/=</h4>
              <h4>Promotion: {item.promotion}</h4>
    
              <button onClick={()=>editItem(item)}>Edit Item</button>
            </div>
          )
        }
        })
      }
  return (
    <div>
        <h2>Ongoing promotions</h2>
      {printItems()}
    </div>
  )
}

export default ViewPromotions
