import React,{useState,useEffect} from 'react';
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';

const ViewCart = () => {
    const [items, setItems] = useState([]);
    const [Total, setTotal] = useState(0);
    const [paid, setPaid] = useState(false);

      const getData = async () => {
        try {
          const response = await axios.get("/getCart");
          const out = response.data.map((item) => {
            return { ...item, qty: 0 };
          });
          setItems(out);
        } catch (error) {
          console.log(error);
        }
      };
    
      const cartManage = (e, item) => {
        const { name, price, qty, id } = item;
        const newItems = items.filter((item) => {
          if (item.id != id) {
            return item;
          }
        });
        const newItem = { name, price, qty: e.target.value, id };
        let n = [...newItems, newItem];
        setItems(n);
      };
    
      const getTotal = () => {
        const value = items.reduce((sum, currentItem) => {
          return sum + currentItem.qty * currentItem.price;
        }, 0);
        setTotal(value);
        setPaid(true);
      };
      useEffect(() => {
        getData();
      }, []);

    return (
        <div className='container my-3'>
            <h1>Cart</h1>

            <form>
        <table className='table'>
          <thead>
            <tr>
              <th>Item:</th>
              <th>Price:</th>
              <th>Quantity:</th>
            </tr>
          </thead>
          {items
            .sort((a, b) => (a.price > b.price ? 1 : -1))
            .map((item) => {
              const { name, price, qty, id } = item;
              return (
                <tr>
                  <td>{name}</td>
                  <td>{price}</td>
                  <input
                    type="text"
                    value={qty}
                    onChange={(e) => cartManage(e, item)}
                  />
                </tr>
              );
            })}
        </table>
        {items.length>0 ?<button type="button" onClick={getTotal}>
          purchase
        </button>: 'no items in cart'}
      </form>
      {paid
        ? `
        Paid Successful!!!
        Total Price: ${Total}
        `
        : ``}



        
        </div>
    )
}

export default ViewCart
