import { useEffect, useState } from "react";

export default function UpdatePage() {
  let [name, setName] = useState("");
  let [color, setColor] = useState("");
  let [price, setPrice] = useState("");
  let [quantity, setQuantity] = useState("");
  let [desc, setDesc] = useState("");

  useEffect(() => {
    fetch(
      `https://crudcrud.com/api/1fbbcd8bfbcf43ccbafdc879ee20f281/product${id}`
    )
      .then((res) => res.json())
      .then((res) => {
        setName(res.name);
        setColor(res.color);
        setPrice(res.price);
        setQuantity(res.quantity);
        setDesc(res.desc);
      });
  }, []);

  const update = (e) => {
    e.preventDefault();
    fetch(
      `https://crudcrud.com/api/1fbbcd8bfbcf43ccbafdc879ee20f281/product${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, color, price, quantity, desc }),
      }
    );
  };
  return (
    <>
      <h1>Hello editpage</h1>

      <form onSubmit={(e) => update(e)} className="gap-3 flex">
        <input
          type="text"
          defaultValue={"name"}
          className="border border-gray-900"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          defaultValue={"color"}
          className="border border-gray-900"
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="number"
          placeholder={"price"}
          className="border border-gray-900"
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder={"quantity"}
          className="border border-gray-900"
          onChange={(e) => setQuantity(e.target.value)}
        />
        <input
          type="text"
          defaultValue={"desciption"}
          className="border border-gray-900"
          onChange={(e) => setDesc(e.target.value)}
        />
        <button className="border border-gray-500 bg-red-200">Update</button>
      </form>
    </>
  );
}
