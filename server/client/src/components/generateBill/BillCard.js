import React, { useEffect, useState } from "react";
import productService from "../../redux/features/product/productService";
import "./BillCard.css";

const BillCard = ({ componentRef, quantities, confirm, handleDownload,username }) => {
  const [totalCost, setTotalCost] = useState(0);
  const [products, setProducts] = useState([]);
  const [extra, setExtra] = useState([]);
  const [date,setDate] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setProducts([]);
      for (const key in quantities) {
        if (extra.length > 0 && extra.includes(key)) continue;
        setExtra(extra.push(key));
        const product = await productService.getProduct(key);
        const modProduct = { ...product, quantity: quantities[key] };
        setProducts((prev) => [...prev, modProduct]);
        setTotalCost(prev => prev + product.price * modProduct.quantity);
        // console.log(totalCost);
      }
      console.log(new Date());
      setDate(new Date().toDateString());
    };
    fetchData();
    return () => {
      return setProducts([]);
    };
  }, []);
  return (
    <div className="bill-summary">
      <form onSubmit={confirm}>
        <div ref={componentRef}>
          <h2>Bill Summary</h2>
          <table>
            <thead>
              <tr>
                <th className="head-th">Name</th>
                <th className="head-th">Quantity</th>
                <th className="head-th">Cost</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="head-td">{item.name}</td>
                    <td className="head-td">{item.quantity}</td>
                    <td className="head-td">{item.quantity * item.price}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="total-bill">
            <strong>Total Bill:</strong> Rs.{totalCost}/-
          </div>
          <div className="username">
              Name: {username||"Anonymous"}
          </div>
          <div className="date">
            {date}
          </div>
        </div>

        <div className="--my">
          <button
            type="submit"
            className="--btn --btn-primary"
            onClick={handleDownload}
          >
            Confirm & Download
          </button>
        </div>
      </form>
    </div>
  );
};

export default BillCard;
