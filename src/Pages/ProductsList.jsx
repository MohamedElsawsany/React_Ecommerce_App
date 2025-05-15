import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../Components/ProductCard';
import Pagination from '../Components/Pagination';
import { Row, Col, Spinner } from 'react-bootstrap';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    setLoading(true);
    const res = await axios.get(`https://dummyjson.com/products?limit=10&skip=${skip}`);
    setProducts(res.data.products);
    setTotal(res.data.total);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, [skip]);

  return (
    <>
      <h2>Product List</h2>
      {loading ? <Spinner animation="border" /> : (
        <Row md={2} lg={4} className="g-4">
          {products.map(product => (
            <Col key={product.id}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      )}
      <Pagination skip={skip} setSkip={setSkip} total={total} />
    </>
  );
};

export default ProductList;