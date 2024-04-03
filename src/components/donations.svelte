<script context="module" lang="ts">
    import type { Donation } from '$lib/types'; 
   
    export async function load(): Promise<{ props: { donations: Donation[] } }> {
       const res = await fetch('/api/donations');
       const donations = await res.json();
       return { props: { donations } };
    }
   </script>
   
   <script lang="ts">
    export let donations: Donation[] = []; 
   </script>
   
   <div>
    <h2>Donations</h2>
    {#each donations as donation}
       <div>
         <p>Transaction ID: {donation.txn_id}</p>
         <p>Payment Status: {donation.payment_status}</p>
         <p>Payment Amount: {donation.mc_gross}</p>
         <p>Payment Date: {donation.payment_date}</p>
       </div>
    {/each}
   </div>
   