import { useNavigate } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{
            marginTop: 'auto',
            padding: 'var(--spacing-xl) 0',
            borderTop: '1px solid var(--color-border)',
            color: 'var(--color-text-muted)'
        }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <p>&copy; {new Date().getFullYear()} SuperMart. All rights reserved.</p>
            </div>
        </footer>
    );
};
export default Footer;
