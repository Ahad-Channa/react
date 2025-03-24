import { useEffect, useState } from "react";

function ProductList() {
  const [product, setProduct] = useState({});
  const [productId, setProductId] = useState(1);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);

  return (
    <div className="text-left">
      <h1 className="font-bold">Product Details</h1>

      {/*
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.price}</p>
            <img src={product.image} alt={product.title} />
          </li>
        ))}
      </ul>
      */}

      <div>
        <p>Product ID: {product.id}</p>
        <h2 className="text-xl font-bold">{product.title}</h2>
        <p className="text-gray-600">{product.description}</p>
        <img className="w-48" src={product.image} alt={product.title} />
      </div>

      <button
        className="bg-blue-500 text-white p-2 rounded-lg"
        onClick={() => setProductId(productId + 1)}
      >
        Next Product
      </button>
      <button
        className="bg-blue-500 text-white p-2 rounded-lg"
        onClick={() => setProductId(productId - 1)}
      >
        Prev Product

        
      </button>

      
    </div>
  );
}

export default ProductList;
