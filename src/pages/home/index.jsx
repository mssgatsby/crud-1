import { Link } from "react-router-dom";
import Card from "../../components/card";
import { useEffect, useState } from "react";

export default function HomePage() {
  let [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`https://crudcrud.com/api/1fbbcd8bfbcf43ccbafdc879ee20f281/product`)
      .then((res) => res.json())
      .then((res) => setProduct(res));
  }, [product]);

  const deleteProd = (id) => {
    fetch(
      `https://crudcrud.com/api/1fbbcd8bfbcf43ccbafdc879ee20f281/product/${id}`,
      {
        method: "DELETE",
      }
    );
  };

  return (
    <>
      {product.map((data) => (
        <div>
          <Card
            name={data.name}
            color={data.color}
            price={data.price}
            quantity={data.quantity}
            desc={data.desc}
          />
          <button onClick={() => deleteProd(data._id)}>delete</button>
        </div>
      ))}
    </>
  );
}
