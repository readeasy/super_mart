import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, User, Menu, X, Phone, Heart, Grid } from 'lucide-react';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Top Section */}
                <div className="navbar-top">
                    <div className="container">
                        <div className="logo" onClick={() => navigate('/')}>
                            <div className="logo-icon">BS</div>
                            <span className="logo-text">Big <span style={{ color: 'var(--color-primary)' }}>ShopMart</span></span>
                        </div>

                        {/* Contact Info (Desktop) */}
                        <div className="contact-info">
                            <Phone size={18} fill="currentColor" className="text-muted" />
                            <div>
                                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Call Us</div>
                                <div>123-234-234</div>
                            </div>
                        </div>

                        {/* Search Bar */}
                        <div className="search-wrapper">
                            <input
                                type="text"
                                className="search-input"
                                placeholder="Search here..."
                            />
                            <button className="search-icon-btn">
                                <Search size={18} />
                            </button>
                        </div>

                        {/* Actions */}
                        <div className="top-actions">
                            <div className="action-item" onClick={() => navigate('/wishlist')}>
                                <Heart size={24} />
                            </div>
                            <div className="action-item" onClick={() => navigate('/profile')}>
                                <User size={24} />
                            </div>
                            <div className="action-item" onClick={() => navigate('/cart')}>
                                <div className="cart-icon-wrapper">
                                    <ShoppingCart size={24} />
                                    <span className="cart-badge">3</span>
                                </div>
                                <span className="cart-total">$4.99</span>
                            </div>
                            <div className="mobile-menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section (Navigation) */}
                <div className="navbar-bottom">
                    <div className="container">
                        <div className="categories-btn">
                            <Grid size={20} />
                            ALL CATEGORIES
                        </div>

                        <div className="main-nav">
                            <a onClick={() => navigate('/')} className="nav-link">Home</a>
                            <a onClick={() => navigate('/products')} className="nav-link">Shop</a>
                            <a onClick={() => navigate('/products?cat=meats')} className="nav-link">Meats & Seafood</a>
                            <a onClick={() => navigate('/products?cat=bakery')} className="nav-link">Bakery</a>
                            <a onClick={() => navigate('/products?cat=beverages')} className="nav-link">Beverages</a>
                        </div>

                        <div className="nav-right">
                            <div className="nav-offer">
                                <span style={{ background: '#facc15', color: 'black', padding: '0.1rem 0.3rem', fontSize: '0.7rem', borderRadius: '4px', marginRight: '5px' }}>HOT</span>
                                BEST OFFERS
                            </div>
                            <div className="login-link" onClick={() => navigate('/profile')}>
                                <User size={16} /> Login / Register
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown (Simplified) */}
            {isMenuOpen && (
                <div style={{ background: 'white', padding: '1rem', borderBottom: '1px solid #eee' }}>
                    <a onClick={() => navigate('/')} style={{ display: 'block', padding: '0.5rem 0' }}>Home</a>
                    <a onClick={() => navigate('/products')} style={{ display: 'block', padding: '0.5rem 0' }}>Shop</a>
                    <a onClick={() => navigate('/products?cat=meats')} style={{ display: 'block', padding: '0.5rem 0' }}>Meats & Seafood</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
