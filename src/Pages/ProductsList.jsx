import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../Components/ProductCard';

export default function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(res => setProducts(res.data.products));
  }, []);

  return (
    <div className="container">
      <div className="row">
        {products.map(product => (
          <div className="col-md-4 mb-4" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
