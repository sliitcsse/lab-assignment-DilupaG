import React,{useState} from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const AddItem = () => {

  const navigator = useNavigate();


    const [name, setName] = useState("");
    const [count, setCount] = useState("");
    const [category, setCategory] = useState("Electronics");
    const [price, setPrice] = useState("");
    const [promotion, setPromotion] = useState("no promotion");


    const handleSubmit = async (e) => {
        e.preventDefault()
        const item = {name,count,category,price,promotion};
        try {
          const sendData = await axios.post("/addItems",item);
          setName('')
          setCount('')
          setCategory('')
          setPrice('')
          navigator('/tradersHome')
        } catch (error) {
          console.log(error);
        }
        
    }
    
    const handleCategory = (e) => {
        const { value } = e.target;
        setCategory(value);
    };

  return (
    <div className='container my-3'>
      <h1>Add Item</h1>
      <form onSubmit={handleSubmit}>
      <div>
          <label htmlFor='name'>Item Name</label>
          <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
      </div>
      <div>
          <label htmlFor='count'>Item count</label>
          <input type="number" name="count" value={count} onChange={(e)=>setCount(e.target.value)}/>
      </div>
      <div>
          <label htmlFor='price'>Item Price</label>
          <input type="number" name="price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
      </div>
      <div>
          <label htmlFor="category">Choose a category:</label>
          <select name="category" value={category} onChange={handleCategory}>
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

export default AddItem
