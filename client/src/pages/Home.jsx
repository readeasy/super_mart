import { useNavigate } from 'react-router-dom';
import { ArrowRight, Star, Truck, ShieldCheck, Clock } from 'lucide-react';
import '../styles/Home.css';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section glass-panel">
                <div className="hero-content">
                    <span className="pill">New Harvest Arrival</span>
                    <h1 className="hero-title">
                        Freshness You Can <br />
                        <span className="text-gradient">Taste & Trust</span>
                    </h1>
                    <p className="hero-subtitle">
                        Experience the finest selection of organic produce, artisanal goods,
                        and daily essentials delivered straight to your doorstep within hours.
                    </p>
                    <div className="hero-actions">
                        <button className="btn btn-primary" onClick={() => navigate('/products')}>
                            Shop Now <ArrowRight size={20} />
                        </button>
                        <button className="btn btn-secondary">
                            View offers
                        </button>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="floating-card card-1 glass-panel">
                        <div className="icon-box">🥦</div>
                        <div>
                            <h4>100% Organic</h4>
                            <p>Certified Farmers</p>
                        </div>
                    </div>
                    <div className="floating-card card-2 glass-panel">
                        <div className="icon-box">🚀</div>
                        <div>
                            <h4>Fast Delivery</h4>
                            <p>Under 30 mins</p>
                        </div>
                    </div>
                    {/* Abstract visual representation */}
                    <div className="hero-circle"></div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="features-section">
                <div className="feature-card glass-panel">
                    <div className="feature-icon"><Star size={24} /></div>
                    <h3>Premium Quality</h3>
                    <p>Hand-picked items ensuring only the best reaches your table.</p>
                </div>
                <div className="feature-card glass-panel">
                    <div className="feature-icon"><Truck size={24} /></div>
                    <h3>Express Delivery</h3>
                    <p>Real-time tracking and delivery within stipulated time slots.</p>
                </div>
                <div className="feature-card glass-panel">
                    <div className="feature-icon"><ShieldCheck size={24} /></div>
                    <h3>Secure Checkout</h3>
                    <p>Bank-grade encryption for all your transactions.</p>
                </div>
                <div className="feature-card glass-panel">
                    <div className="feature-icon"><Clock size={24} /></div>
                    <h3>24/7 Support</h3>
                    <p>Always here to help you with your queries and concerns.</p>
                </div>
            </section>

            {/* Categories Preview */}
            <section className="categories-section">
                <div className="section-header">
                    <h2>Shop by Category</h2>
                    <button className="btn-link" onClick={() => navigate('/products')}>See all</button>
                </div>
                <div className="categories-grid">
                    {['Fruits & Veg', 'Dairy & Eggs', 'Bakery', 'Beverages', 'Meats', 'Snacks'].map((cat, i) => (
                        <div key={i} className="category-card glass-panel" onClick={() => navigate('/products')}>
                            <h3>{cat}</h3>
                            <div className="category-overlay"></div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;