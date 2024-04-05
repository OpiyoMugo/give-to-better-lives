<script>
	import PayPal from '../../components/paypal.svelte';
</script>

<div
	class="bg-[url('/truck.png')] flex bg-cover md:visible h-[500px] flex-col justify-center items-center text-white pt-16"
></div>

<h2 class="text-xl items-align justify-center flex font-bold pt-1 px-3 m-4">
	<p>
		Join Us in making a DIFFERENCE! Your donation fuels hope, ignites change, and transforms lives
	</p>
</h2>

<p class="text-xl flex items-align justify-center text-center md:text-lg mt-18 py-5 px-4 pt-0">
	At Give To Better Lives, we believe in the power of generosity to create a brighter future for
	all. Your donation is more than just a financial contribution; it's a lifeline for those in need,
	a beacon of hope in times of darkness, and a testament to the compassion that unites us all. With
	your support, we can continue to make a meaningful impact, reaching more individuals, families,
	and communities in their times of greatest need. Together, we can build a world where kindness
	knows no bounds and every person has the opportunity to thrive. Thank you for being a vital part
	of our mission.
</p>

<div class="flex items-center justify-center">
	<PayPal />
</div>

<div class="py-8 px-4 pt-4 ring-offset-blue-400 flex items-center justify-center">
	<h1 class="text-xl font-bold pt-0 pb-0 m-0">
		<p class="">OR</p>
	</h1>
</div>

<div class="flex items-center justify-center">
	<img src="/mpesa.png" alt="" class="h-40 m-5 mt-0 w-45" />
</div>

<div class="flex items-center justify-center">
	<h2 class="flex-row font-bold pt-0 m-1 h-1 pb-3">
		BUSINESS NAME: <span style="color: black; font-weight: semi-bold;">GIVE TO BETTER LIVES</span>
	</h2>
</div>

<div class="flex items-center justify-center font-bold">
	<h1 class="text-xl font-bold pt-4 m-2">
		<p class="">We also accept donations inform of Other Items</p>
	</h1>
</div>

<div class="flex items-center justify-center">
	<p class="sm:text-start md:text-center lg:w-[60%] mb-10 m-4">
		At Give To Better Lives, we greatly appreciate all forms of support from our community. In
		addition to monetary donations, we also welcome donations in the form of items that people are
		willing to purchase. Whether it's gently used clothing, household items, toys, books,
		electronics or any other goods, your in-kind donations can make a significant difference in the
		lives of those we serve. These donations enable us to provide essential resources and support to
		individuals and families in need. If you have items that you would like to donate, please reach
		out to us at <span class=" text-orange-500">bmakori@givetobetterlives.me</span>.Your generosity
		helps us continue our mission of Transforming lives one garment at a time
	</p>
</div>
