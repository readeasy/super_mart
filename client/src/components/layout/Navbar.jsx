import { useNavigate } from 'react-router-dom';
import { ShoppingCart, LayoutGrid, Search, User, Menu, X } from 'lucide-react';
import { useState } from 'react';
import './Navbar.css'; // We'll create this locally for component-specific styles

const Navbar = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="navbar glass-panel">
            <div className="container navbar-content">
                <div className="logo" onClick={() => navigate('/')}>
                    <div className="logo-icon">S</div>
                    <span className="logo-text">Super<span className="text-gradient">Mart</span></span>
                </div>

                <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                    <a onClick={() => navigate('/')} className="nav-link">Home</a>
                    <a onClick={() => navigate('/products')} className="nav-link">Products</a>
                    <a onClick={() => navigate('/orders')} className="nav-link">Orders</a>
                    {/* Mobile Only Actions in Menu */}
                    <div className="mobile-actions">
                        <button className="icon-btn" onClick={() => navigate('/profile')}>
                            <User size={20} /> Profile
                        </button>
                    </div>
                </div>

                <div className="nav-actions">
                    <button className="icon-btn search-btn">
                        <Search size={20} />
                    </button>
                    <button className="icon-btn" onClick={() => navigate('/cart')}>
                        <ShoppingCart size={20} />
                        <span className="badge">3</span>
                    </button>
                    <button className="icon-btn desktop-only" onClick={() => navigate('/profile')}>
                        <User size={20} />
                    </button>
                    <button className="icon-btn mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
