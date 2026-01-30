import React from 'react';
import Sidebar from '../components/Sidebar';

const AdminLayout = ({ children }) => {
    return (
        <div style={{ display: 'flex', minHeight: '100vh' }}>
            <Sidebar />
            <main style={{ marginLeft: '260px', flex: 1, padding: '2rem' }}>
                {children}
            </main>
        </div>
    );
};

export default AdminLayout;
