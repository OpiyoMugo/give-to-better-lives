<script>
	import '../app.css';
	import Icon from '@iconify/svelte';
	import { Hamburger } from 'svelte-hamburgers';
	import { page } from '$app/stores';

	/**
	 * @param {any} page
	 */
	function setActivePage(page) {
		// Remove active class from all links
		const links = document.querySelectorAll('.navigation-menu a');
		links.forEach((link) => link.classList.remove('bg-orange-500'));

		// Add active class to the clicked link
		const activeLink = document.querySelector(`.navigation-menu a[href="/${page}"]`);
		if (activeLink) {
			activeLink.classList.add('bg-orange-500');
		}
	}
	let open = false;
</script>

<header>
	<nav class="bg-transparent p-4">
		<!-- Large screen navigation bar -->

		<div class="hidden lg:flex flex-row ">
			<div class="flex flex-row">
				<div>
					<img src="Logo.png" alt="" class="mr-3 h-[80px]" />
				</div>
				<div class="flex flex-col gap-0 font-bold text-sm">
					<p>Give</p>
					<p>To</p>
					<p>Better</p>
					<p>Lives</p>
				</div>
			</div>

			<div class="hidden lg:ml-80 lg:flex px-3 py-2 text-xs">
				<ul class="flex  lg:gap-10  md:pl-5 text-lg justify-between items-center">
					<li>
						<a
							href="/home"
							class="hover:text-orange-500 {$page.route.id === '/' || $page.route.id === '/home'
								? 'text-orange-500'
								: ''}   active:text-orange-500">Home</a
						>
					</li>

					<li>
						<a
							href="/about"
							class="hover:text-orange-500 {$page.route.id === '/about' ? 'text-orange-500' : ''}"
							>About Us</a
						>
					</li>

					<li>
						<a
							href="/events"
							class="hover:text-orange-500 {$page.route.id === '/events' ? 'text-orange-500' : ''}"
							>Events</a
						>
					</li>

					<li>
						<a
							href="/contact"
							class="hover:text-mainGold {$page.route.id === '/contact' ? 'text-orange-500' : ''}"
							>Contacts</a
						>
					</li>

					<li>
						<a
							href="/donate"
							class="hover:text-mainGold {$page.route.id === '/donate' ? 'text-orange-500' : ''} "
							>Donate</a
						>
					</li>
				</ul>
			</div>
		</div>

		<!-- Small screen navigation bar (hamburger menu) -->

		<div class="lg:hidden flex flex-row justify-between">
			<div class="flex flex-row">
				<div>
					<img src="Logo.png" alt="" class="mr-3 h-[80px]" />
				</div>
				<div class="flex flex-col gap-0 font-bold text-sm">
					<p>Give</p>
					<p>To</p>
					<p>Better</p>
					<p>Lives</p>
				</div>
			</div>
			<div class="text-black"><Hamburger bind:open --color="black" /></div>
		</div>

		<!-- Dropdown menu for small screens -->
		{#if open}
			<div class=" items-center py-3 lg:hidden">
				<ul class="flex flex-col pl-10 items-start font-bold space-y-2">
					<li>
						<a
							href="/home"
							class={$page.route.id === '/' || $page.route.id === '/home' ? 'text-orange-500' : ''}
							on:click={() => (open = false)}>Home</a
						>
					</li>
					<li>
						<a
							href="/about"
							class={$page.route.id === '/about' ? 'text-orange-500' : ''}
							on:click={() => (open = false)}>About Us</a
						>
					</li>
					<li>
						<a
							href="/events"
							class={$page.route.id === '/events' ? 'text-orange-500' : ''}
							on:click={() => (open = false)}>Events</a
						>
					</li>
					<li>
						<a
							href="/contact"
							class={$page.route.id === '/contact' ? 'text-orange-500' : ''}
							on:click={() => (open = false)}>Contact Us</a
						>
					</li>
					<li>
						<a
							href="/donate"
							class={$page.route.id === '/donate' ? 'text-orange-500' : ''}
							on:click={() => (open = false)}>Donates</a
						>
					</li>
				</ul>
			</div>
		{/if}
	</nav>
</header>

<slot />

<footer class="bg-black text-white p-4">
	<div class="container mx-auto">
		<div class="flex flex-col md:flex-row justify-between">
			<div class="flex gap-6 items-center justify-center">
				<a
					href="https://www.facebook.com/profile.php?id=61557759776367"
					target="_blank"
					class="text-white hover:text-gray-300"
				>
					<Icon icon="logos:facebook" width="40" />
				</a>

				<a
					href="https://www.youtube.com/@GiveToBetterlives-if8ts"
					target="_blank"
					class="text-white hover:text-gray-300 pt-1"
				>
					<Icon icon="logos:youtube-icon" width="40" />
				</a>
			</div>
			<div class="flex flex-col pt-4 gap-3">
				<p>Email: makoribenard@ymail.com</p>
				<p>Phone: + 8172170342/+254740219716</p>
				<p>Location: 2404 Cheyenne dr. Big Spring Tx 79720 USA.</p>
			</div>
		</div>
		<div class="">
			<p>Terms of Privacy | Copyright &copy; 2024 Designed by VOXART Studios</p>
		</div>
	</div>
</footer>
