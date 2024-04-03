// src/routes/api/donations.js
import db from '$lib/db';

export async function get() {
 return new Promise((resolve, reject) => {
    db.all('SELECT * FROM donations', (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve({ body: rows });
      }
    });
 });
}
