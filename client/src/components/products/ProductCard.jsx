import { Plus, Heart } from 'lucide-react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card glass-panel">
            <div className="product-image-container">
                <div className="product-placeholder" style={{ backgroundColor: product.color || '#334155' }}>
                    <span style={{ fontSize: '3rem' }}>{product.emoji}</span>
                </div>
                <button className="favorite-btn">
                    <Heart size={18} />
                </button>
            </div>
            <div className="product-info">
                <div className="product-header">
                    <h3 className="product-name">{product.name}</h3>
                    <span className="product-price">${product.price}</span>
                </div>
                <p className="product-description">{product.description}</p>
                <div className="product-footer">
                    <span className="product-unit">{product.unit}</span>
                    <button className="add-btn">
                        Add <Plus size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
