// Supabase Configuration Helper
// This file would typically hold the initialized Supabase client logic if using Node.js

const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL || 'https://xyz.supabase.co';
const supabaseKey = process.env.SUPABASE_ANON_KEY || 'public-anon-key';

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
