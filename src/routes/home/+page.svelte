<script>
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

<!-- Large screens -->
<div
	class="bg-[url(https://images.pexels.com/photos/7293100/pexels-photo-7293100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-no-repeat md:bg-cover md:h-screen hidden md:flex flex-col justify-center items-center text-white pt-16"
>
	<div class="text-center p-4">
		<h1 class="text-4xl font-bold md:text-5xl">Give To Better Lives</h1>
		<p class="text-xl mt-2 md:text-lg">
			By Donating $1 or your used clothes, shoes, e.t.c, We commit to packaging and shipping to
			provide needy families and kids without clothes. Your donation, no matter how much, will help
			us reach more poor communities and empower them.
		</p>
	</div>
	<div class="flex space-x-4 mt-4">
		<a
			href="/donate"
			class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
		>
			Donate Now</a
		>
	</div>
</div>

<!-- Small screens -->
<div class="  md:hidden">
	<div
		class="bg-[url(https://images.pexels.com/photos/7293100/pexels-photo-7293100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] flex bg-cover h-[250px]  flex-col justify-center items-center text-white pt-16"
	></div>
	<div class="text-center p-4 bg-white">
		<h1 class="text-4xl font-bold md:text-5xl">Give To Better Lives</h1>
		<p class="text-xl mt-2 md:text-lg">
			By Donating $1 or your used clothes, shoes, e.t.c, We commit to packaging and shipping to
			provide needy families and kids without clothes. Your donation, no matter how much, will help
			us reach more poor communities and empower them.
		</p>
	</div>
	<div class="flex items-center justify-center space-x-4 mt-4">
		<a
			href="/donate"
			class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
		>
			Donate Now</a
		>
	</div>
</div>

<div class="text-center p-4 mt-8">
	<h2 class="text-3xl font-bold">
		<span style="color: #D3D3D3;">WELCOME TO</span> G.T.B.L
	</h2>
	<p class="text-xl mt-2">
		At Give To Better Lives, We Believe we can make a <span style="color: orange;">Difference</span>
		in someone's life in Kenya and the world at large
	</p>
</div>

<div class="grid grid-cols-3 gap-4 mt-8">
	<div class="bg-gray-200 p-4 rounded">
		<i class="fa fa-heart"></i>
		<h3 class="text-xl font-bold">Support</h3>
		<p>
			Our organization welcomes people from all over the world to participate in the journey of
			improving the living conditions of the poor.
		</p>
		<button on:click={() => toggleContent('support')}>
			{showSupportContent ? 'Read Less' : 'Read More'}
		</button>
		{#if showSupportContent}
			<p>
				We extend our heartfelt gratitude to each and every individual who chooses to support our
				clothing donation programs through financial contributions. Your generosity enables us to
				continue our mission of providing warmth, comfort, and dignity to children and homeless
				individuals in our community. Together, we can make a lasting impact and create a brighter
				future for those in need..
			</p>
		{/if}
	</div>
	<div class="bg-gray-200 p-4 rounded">
		<i class="fa fa-home"></i>
		<h3 class="text-xl font-bold">Volunteer</h3>
		<p>
			To show our appreciation, we host regular volunteer appreciation events, such as potlucks,
			cookouts, and surprise parties. These events not only celebrate the hard work and dedication
			of our volunteers but also provide opportunities for networking and team-building. We also
			recognize volunteers through special awards, certificates, and even feature them in our annual
			reports and on our social media platforms.
		</p>
		<button on:click={() => toggleContent('volunteer')}>
			{showVolunteerContent ? 'Read Less' : 'Read More'}
		</button>
		{#if showVolunteerContent}
			<p>
				Assist our team with distributing clothing donations to children and homeless individuals in
				local communities. Whether it's setting up distribution events, handing out clothing items,
				or providing logistical support, your presence can make a meaningful impact on those we
				serve.
			</p>
		{/if}
	</div>
	<div class="bg-gray-200 p-4 rounded">
		<i class="fa fa-check"></i>
		<h3 class="text-xl font-bold">Donations</h3>
		<p>
			Making a financial donation is easy and secure. You can contribute online through our
			website's secure donation portal or by mailing a check to our office. Whether it's a one-time
			donation or a recurring contribution, every amount makes a meaningful difference in the lives
			of those we serve.
		</p>
		<button on:click={() => toggleContent('donations')}>
			{showDonationsContent ? 'Read Less' : 'Read More'}
		</button>
		{#if showDonationsContent}
			<p>
				Behind every clothing donation is a network of operational expenses, including
				transportation, storage, sorting, and distribution costs. Your contributions help cover
				these essential expenses, allowing us to efficiently manage the donation process and reach
				as many individuals as possible with our clothing donation programs.
			</p>
		{/if}
	</div>
</div>

<link
	rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
/>
