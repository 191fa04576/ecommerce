import React, { useEffect, useState } from "react";
import Card from "./Card";


function Homepage() {

    const url = "https://fakestoreapi.com/products/";
  let [products, setProducts] = useState([]);
  let [loading, setLoading] = useState(true);

  async function getAllProducts() {
    let response = await fetch(url);
    let data = await response.json();
    setProducts(data);
    setLoading(false);
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="pt-20">
        {loading ? "fetching...":(
            products.map((product)=>{
                return(
                    <Card product={product}/>
                )
            })
        )}
    </div>
  );
}

export default Homepage;
