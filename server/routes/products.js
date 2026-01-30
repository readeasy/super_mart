const express = require('express');
const router = express.Router();

// Dummy Data for now, would connect to Supabase/DB
const PRODUCTS = [
    { id: 1, name: 'Organic Bananas', price: 2.99 },
    { id: 2, name: 'Fresh Avocados', price: 4.99 }
];

// GET /api/products
router.get('/', (req, res) => {
    res.json({ data: PRODUCTS });
});

module.exports = router;
