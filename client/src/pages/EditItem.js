import React,{useState} from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const EditItem = () => {

    const navigator = useNavigate();

    const {id,name,count,price,category,promotion} = useParams();

    const [newName, setName] = useState(name);
    const [newCount, setCount] = useState(count);
    const [newCategory, setCategory] = useState(category);
    const [newPrice, setPrice] = useState(price);
    const [newPromotion,setPromotion] = useState(promotion);

    const handleCategory = (e) => {
        const { value } = e.target;
        setCategory(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        const item = {id:id,name:newName,count:newCount,price:newPrice,category:newCategory,promotion:newPromotion};
        try {
          const sendData = await axios.post("/editItems",item);
          setName('')
          setCount('')
          setCategory('')
          setPrice('')
          navigator('/tradersHome')
        } catch (error) {
          console.log(error);
        }
        
    }

  return (
    <div className='container my-3'>

      <h1>Edit Item</h1>
      <form onSubmit={handleSubmit}>
      <div>
          <label htmlFor='newName'>Edit Item Name</label>
          <input type="text" name="newName" value={newName} onChange={(e)=>setName(e.target.value)}/>
      </div>
      <div>
          <label htmlFor='newCount'>Edit Item count</label>
          <input type="number" name="newCount" value={newCount} onChange={(e)=>setCount(e.target.value)}/>
      </div>
      <div>
          <label htmlFor='newPrice'>Item Price</label>
          <input type="number" name="newPrice" value={newPrice} onChange={(e)=>setPrice(e.target.value)}/>
      </div>
      <div>
          <label htmlFor="category">Edit category:</label>
          <select name="category" value={newCategory} onChange={handleCategory}>
            <option value="Electronics">Electronics</option>
            <option value="Toys">Toys</option>
            <option value="Clothing">Clothing</option>
            <option value="Other">Other</option>
          </select>
      </div>
      <button type='submit'>Submit</button>
    </form>
    </div>
  )
}

export default EditItem
