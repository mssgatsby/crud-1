import { Link } from "react-router-dom";

export default function Card({ name, color, price, quantity, desc }) {
  return (
    <>
      <div className="m-4 border border-red-600 inline-block w-[30%] text-center container-mx-auto">
        <div className="flex gap-3 p-2 justify-between">
          <h1>{name}</h1>
          <p>{color}</p>
        </div>
        <div className="flex gap-3 p-2 justify-between">
          <p>{price}</p>
          <p>{quantity}</p>
        </div>
        <p className="p-2">{desc}</p>
        <Link to={"/update"}>Update</Link>
      </div>
    </>
  );
}
