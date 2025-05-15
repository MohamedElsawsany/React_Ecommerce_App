import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const stockBadge = product.stock > 0
    ? <Badge bg="success">In Stock</Badge>
    : <Badge bg="danger">Out of Stock</Badge>;

  return (
    <Card className="h-100">
      <Card.Img variant="top" src={product.thumbnail} height="200" style={{ objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          ${product.price} <br />
          {stockBadge}
        </Card.Text>
        <Link to={`/products/${product.id}`}>
          <Button variant="primary">View Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;