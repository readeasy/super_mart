import { Search, SlidersHorizontal } from 'lucide-react';
import ProductCard from '../components/products/ProductCard';
import '../styles/Products.css';

const DUMMY_PRODUCTS = [
    { id: 1, name: 'Organic Bananas', price: 2.99, unit: 'per bunch', emoji: '🍌', color: '#fef3c7', description: 'Sweet and creamy organic bananas from Ecuador.' },
    { id: 2, name: 'Fresh Avocados', price: 4.99, unit: '3 pack', emoji: '🥑', color: '#dcfce7', description: 'Ready-to-eat Hass avocados, perfect for toast.' },
    { id: 3, name: 'Red Apples', price: 3.49, unit: 'per lb', emoji: '🍎', color: '#fee2e2', description: 'Crisp and juicy red apples, locally grown.' },
    { id: 4, name: 'Sourdough Bread', price: 5.99, unit: 'loaf', emoji: '🍞', color: '#ffedd5', description: 'Artisanal sourdough baked fresh daily.' },
    { id: 5, name: 'Organic Eggs', price: 6.99, unit: 'dozen', emoji: '🥚', color: '#f1f5f9', description: 'Free-range organic eggs rich in Omega-3.' },
    { id: 6, name: 'Whole Milk', price: 3.99, unit: 'gallon', emoji: '🥛', color: '#e0f2fe', description: 'Pasture-raised whole milk, non-homogenized.' },
    { id: 7, name: 'Spinach', price: 1.99, unit: 'bag', emoji: '🥬', color: '#d1fae5', description: 'Fresh baby spinach washed and ready to eat.' },
    { id: 8, name: 'Steak', price: 15.99, unit: 'per lb', emoji: '🥩', color: '#fecaca', description: 'Premium grass-fed ribeye steak.' },
];

const Products = () => {
    return (
        <div className="products-page">
            <div className="page-header">
                <h1>All Products</h1>
                <div className="toolbar">
                    <div className="search-bar glass-panel">
                        <Search size={18} className="search-icon" />
                        <input type="text" placeholder="Search for products..." />
                    </div>
                    <button className="filter-btn glass-panel">
                        <SlidersHorizontal size={18} /> Filter
                    </button>
                </div>
            </div>

            <div className="products-grid">
                {DUMMY_PRODUCTS.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Products;