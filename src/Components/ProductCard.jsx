import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  const inStock = product.stock > 0;

  return (
    <div className="card h-100">
      <img src={product.thumbnail} className="card-img-top" alt={product.title} style={{ height: '200px', objectFit: 'cover' }} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">${product.price}</p>
        <span className={`badge ${inStock ? 'bg-success' : 'bg-danger'} mb-2`}>
          {inStock ? 'In Stock' : 'Out of Stock'}
        </span>
        <Link to={`/product/${product.id}`} className="btn btn-primary mt-auto">View Details</Link>
      </div>
    </div>
  );
}
