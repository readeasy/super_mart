
const fs = require('fs');
const path = require('path');

const clientFiles = [
    'client/src/pages/Home.jsx',
    'client/src/pages/Products.jsx',
    'client/src/pages/ProductDetail.jsx',
    'client/src/pages/Cart.jsx',
    'client/src/pages/Checkout.jsx',
    'client/src/pages/Profile.jsx',
    'client/src/pages/Orders.jsx',
    'client/src/hooks/useAuth.js',
    'client/src/hooks/useCart.js',
    'client/src/hooks/useProducts.js',
    'client/src/hooks/useOrders.js',
    'client/src/services/supabase.js',
    'client/src/services/products.js',
    'client/src/services/orders.js',
    'client/src/context/AuthContext.jsx',
    'client/src/context/CartContext.jsx',
    'client/src/utils/helpers.js',
    'client/src/utils/validators.js'
];

const adminFiles = [
    'admin/src/pages/Dashboard.jsx',
    'admin/src/pages/Products.jsx',
    'admin/src/pages/Orders.jsx',
    'admin/src/pages/Customers.jsx',
    'admin/src/pages/Inventory.jsx',
    'admin/src/pages/Settings.jsx'
];

const supabaseFiles = [
    'supabase/seed.sql',
    'supabase/supabase-config.js'
]

const createFile = (filePath) => {
    const absolutePath = path.resolve('e:/super_mart', filePath);
    if (!fs.existsSync(absolutePath)) {
        fs.writeFileSync(absolutePath, '// Placeholder');
        console.log(`Created ${filePath}`);
    }
};

clientFiles.forEach(createFile);
adminFiles.forEach(createFile);
supabaseFiles.forEach(createFile);
