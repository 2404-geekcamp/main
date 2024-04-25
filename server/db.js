const { createClient } = require('@supabase/supabase-js');

const path = require('path');
require('dotenv').config({ 
    path: path.resolve(__dirname, './config/environment/.env') 
});

const supabaseSetup = () => {
    return createClient(process.env.SUPABASE_PROJECT_URL, process.env.SUPABASE_PROJECT_KEY);
}

module.exports = supabaseSetup;