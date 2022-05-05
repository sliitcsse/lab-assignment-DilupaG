import React,{useState} from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const CreateProfile = () => {

  const navigator = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [type, setType] = useState("Trader");

    const handleType = (e) => {
        const { value } = e.target;
        setType(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        const user = {name,email,phone,type};
        try {
          const sendData = await axios.post("/addUser",user);
        } catch (error) {
          console.log(error);
        }

        if(type=='Trader'){
          navigator('/tradersHome')
        }else{
          navigator('/customersHome')
        }
    }


  return (

    <div className='container'>
      <h1>Register</h1>
      <p>Customer will be navigated to Customers Homepage</p>
      <p>Traders will be navigated to Traders Homepage</p>

      <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor='name'>Name</label>
            <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div>
            <label htmlFor='email'>email</label>
            <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div>
            <label htmlFor='phone'>Phone</label>
            <input type="phone" name="phone" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="type">Choose a type:</label>
            <select name="type" value={type} onChange={handleType}>
              <option value="Trader">Trader</option>
              <option value="Traders">Customer</option>
            </select>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default CreateProfile
