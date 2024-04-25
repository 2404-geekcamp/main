const { createClient } = require('@supabase/supabase-js');

const path = require('path');
require('dotenv').config({ 
    path: path.resolve(__dirname, './config/environment/.env') 
});

module.exports = class Db {
    #connect = null;
    
    constructor() {
        this.#connect = createClient(process.env.SUPABASE_PROJECT_URL, process.env.SUPABASE_PROJECT_KEY);
    }

    connect() {
        return this.#connect;
    }
}

