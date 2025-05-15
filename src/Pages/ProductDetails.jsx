import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Badge, Button, Spinner } from 'react-bootstrap';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(res => {
        setProduct(res.data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Spinner animation="border" />;

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.thumbnail} alt={product.title} width="300" />
      <p>{product.description}</p>
      <h4>${product.price}</h4>
      <Badge bg={product.stock > 0 ? "success" : "danger"}>
        {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
      </Badge>
      <p className="mt-2">Rating: {product.rating}</p>
      <Button variant="primary">Add to Cart</Button>
    </div>
  );
};

export default ProductDetails;
