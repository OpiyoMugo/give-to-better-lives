// src/lib/db.js
import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('./donations.db');

db.serialize(() => {
 db.run(`CREATE TABLE IF NOT EXISTS donations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    txn_id TEXT NOT NULL,
    payment_status TEXT NOT NULL,
    mc_gross REAL NOT NULL,
    payment_date TEXT NOT NULL
 )`);
});

export default db;
