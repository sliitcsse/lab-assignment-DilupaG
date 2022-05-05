import React,{useState} from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const AddPromotion = () => {

    const navigator = useNavigate();
    const {id,name,count,price,category,promotion} = useParams();

    const [newName, setName] = useState(name);
    const [newPromotion, setPromotion] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault()
        const item = {id:id,name:name,count:count,price:price,category:category,promotion:newPromotion};
        try {
          const sendData = await axios.post("/editItems",item);
          setPromotion('')
          navigator('/tradersHome')
        } catch (error) {
          console.log(error);
        }
        
    }
  return (
    <div className='container my-3'>
      <form onSubmit={handleSubmit}>
      <div>
        <h1>Add Promotion</h1>
          <label htmlFor='newName'>Item Name :</label>
          <input type="text" name="newName" value={newName} onChange={(e)=>setName(e.target.value)} readOnly/>
      </div>
      <div>
          <label htmlFor='newPromotion'>Add Promotion :</label>
          <input type="text" name="newPromotion" value={newPromotion} onChange={(e)=>setPromotion(e.target.value)}/>
      </div>
      <button type='submit'>Submit</button>
    </form>
    </div>
  )
}

export default AddPromotion
