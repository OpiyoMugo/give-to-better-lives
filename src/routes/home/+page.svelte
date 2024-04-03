<script>
	import PayPal from '../../components/paypal.svelte';


	let showSupportContent = false;
	let showVolunteerContent = false;
	let showDonationsContent = false;

	/**
	 * @param {string} content
	 */
	function toggleContent(content) {
		switch (content) {
			case 'support':
				showSupportContent = !showSupportContent;
				break;
			case 'volunteer':
				showVolunteerContent = !showVolunteerContent;
				break;
			case 'donations':
				showDonationsContent = !showDonationsContent;
				break;
		}
	}
</script>

<!-- Large Screens -->

<div
	class="bg-[url('/coverpage.png')] bg-no-repeat md:bg-cover md:h-screen hidden md:flex flex-col text-white pt-16"
>
	<div class="text-center items-center justify-center p-4 flex flex-col">
		<h1 class="text-4xl font-bold md:text-5xl mt-40">Give To Better Lives</h1>
		<p class="text-2xl flex justify-center items-center text-center md:text-lg mt-18 w-1/2 py-10">
			By Donating $1 or your used clothes, shoes, e.t.c, We commit to packaging and shipping to
			provide needy families and kids without clothes. Your donation, no matter how much, will help
			us reach more poor communities and empower them.
		</p>

		<div class="flex space-x-4 text-center items-center mt-4">
			<PayPal />
		</div>
	</div>
</div>

<!-- Small screens -->
<div class=" md:hidden">
	<div
		class="bg-[url('/coverpage.png')] flex bg-cover h-[250px] flex-col justify-center items-center text-white pt-16"
	></div>

	<div class="text-center p-4 bg-gradient-to-b from-white to-gray">
		<h1 class="text-4xl font-extrabold md:text-8x py-3">Give To Better Lives</h1>

		<p class="text-xl text-center flex justify-center mt-2 md:text-lg pt-2">
			By Donating $1 or your used clothes, shoes, e.t.c, We commit to packaging and shipping to
			provide needy families and kids without clothes. Your donation, no matter how much, will help
			us reach more poor communities and empower them.
		</p>
		<div class="flex items-center justify-center space-x-4 mt-4">
			<PayPal />
		</div>
	</div>
</div>

<div class="text-center p-4 mt-8 bg-white">
	<h2 class="text-xl font-bold">
		<p class="">WELCOME TO</p>
	</h2>
	<h2 class="my-6 text-5xl text-orange-500 font-bold">Give To Better Lives</h2>

	<p class="text-xl mt-2">
		At Give To Better Lives, We Believe we can make a <span class=" text-orange">Difference</span>
		in someone's life in Kenya and the world at large
	</p>
</div>

<!-- Cards -->
<div
	class="flex flex-col items-center justify-center lg:flex-row md:justify-center md:items-center gap-4 my-8 lg:mx-28"
>
	<div class="bg-gray p-4 rounded-md py-4 m-3 lg:w-1/3 lg:h-[500px]">
		<h3 class="text-xl font-bold mb-3">Support</h3>
		<p class="mb-3">
			Our organization welcomes people from all over the world to participate in the journey of
			improving the living conditions of the poor.
		</p>
		<button class="text-orange-500" on:click={() => toggleContent('support')}>
			{showSupportContent ? 'Read Less' : 'Read More'}
		</button>
		{#if showSupportContent}
			<p class="mt-3">
				We extend our heartfelt gratitude to each and every individual who chooses to support our
				clothing donation programs through financial contributions. Your generosity enables us to
				continue our mission of providing warmth, comfort, and dignity to children and homeless
				individuals in our community. Together, we can make a lasting impact and create a brighter
				future for those in need..
			</p>
		{/if}
	</div>

	<div class="bg-gray p-4 rounded-md py-4 m-3 lg:w-1/3 lg:h-[500px]">
		<h3 class="text-xl font-bold mb-3">Volunteer</h3>
		<p class="mb-3">
			To show our appreciation, we host regular volunteer appreciation events, such as potlucks,
			cookouts, and surprise parties. These events not only celebrate the hard work and dedication
			of our volunteers but also provide opportunities for networking and team-building. We also
			recognize volunteers through special awards, certificates, and even feature them in our annual
			reports and on our social media platforms.
		</p>
		<button class="text-orange-500" on:click={() => toggleContent('volunteer')}>
			{showVolunteerContent ? 'Read Less' : 'Read More'}
		</button>
		{#if showVolunteerContent}
			<p class="mt-3">
				Assist our team with distributing clothing donations to children and homeless individuals in
				local communities. Whether it's setting up distribution events, handing out clothing items,
				or providing logistical support, your presence can make a meaningful impact on those we
				serve.
			</p>
		{/if}
	</div>
	<div class="bg-gray p-4 rounded-md py-4 m-3 lg:w-1/3 lg:h-[500px]">
		<h3 class="text-xl font-bold mb-3">Donations</h3>
		<p class="mb-3">
			Making a financial donation is easy and secure. You can contribute online through our
			website's secure donation portal or by mailing a check to our office. Whether it's a one-time
			donation or a recurring contribution, every amount makes a meaningful difference in the lives
			of those we serve.
		</p>
		<button class="text-orange-500" on:click={() => toggleContent('donations')}>
			{showDonationsContent ? 'Read Less' : 'Read More'}
		</button>
		{#if showDonationsContent}
			<p class="mt-3">
				Behind every clothing donation is a network of operational expenses, including
				transportation, storage, sorting, and distribution costs. Your contributions help cover
				these essential expenses, allowing us to efficiently manage the donation process and reach
				as many individuals as possible with our clothing donation programs.
			</p>
		{/if}
	</div>
</div>


