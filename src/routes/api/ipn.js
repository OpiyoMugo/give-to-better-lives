// src/routes/api/ipn.js
import db from '$lib/db';

/**
 * @param {{ body: any; }} request
 */
export async function post(request) {
 const ipnData = request.body;

 db.run(`INSERT INTO donations (txn_id, payment_status, mc_gross, payment_date) VALUES (?, ?, ?, ?)`, [
    ipnData.txn_id,
    ipnData.payment_status,
    ipnData.mc_gross,
    ipnData.payment_date
 ], function(err) {
    if (err) {
      return console.error(err.message);
    }
    console.log(`A row has been inserted with rowid ${this.lastID}`);
 });

 return {
    status: 200,
    body: 'OK'
 };
}
