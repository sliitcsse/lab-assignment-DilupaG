import React, { useState, useEffect } from 'react'
import axios from "axios";


const CustomerList = () => {

    const [customers, setCustomers] = useState([]);

    const getData = async () => {
      try {
        const response = await axios.get("/getUsers");
        setCustomers(response.data)
      } catch (error) {
        console.log(error);
      }
       
      };

      useEffect(() => {
        getData();
      }, [customers]);

      const printCustomers = () => {
        return customers.map((customer)=>{
            if(customer.type==='Customer'){
                return (
                    <div className='container my-3' key={customer.id}>
                      <h4>{customer.name}</h4>
                      <h3>{customer.email}</h3>
                      <h3>{customer.phone}</h3>
                    </div>
                  )
            }
        })
      }

  return (
    <div>
        <h2>Customers</h2>
      {
          printCustomers()
      }
    </div>
  )
}

export default CustomerList
