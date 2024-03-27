<script>
	import '../app.css';
	import Icon from '@iconify/svelte';

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
</script>

<header>
	<div class="navbar">
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
		<nav class="bg-white text-bold-800">
			<div class="container mx-auto px-4 md:flex items-center gap-6">
				<div class="flex items-center justify-between md:w-auto w-full">
					<!-- <a href="navbar" class="flex items-center py-5 px-2 text-white flex-1"> </a> -->
					<!-- Mobile Menu Button -->
					<div class="md:hidden flex items-center">
						<button class="mobile-menu-button">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
								<title>bars-3-bottom-left</title>
								<g fill="none">
									<path
										d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
										stroke="currentColor"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									></path>
								</g>
							</svg>
						</button>
					</div>
				</div>
				<div
					class="hidden md:flex md:flex-row flex-col items-center justify-start md:space-x-1 navigation-menu pb-3 md:pb-0"
				>
					<a href="/home" class="py-2 px-3 block hover:bg-orange-500">Home</a>
					<a href="/about" class="py-2 px-3 block hover:bg-orange-500">About</a>
					<a href="/events" class="py-2 px-3 block hover:bg-orange-500">Events</a>
					<a href="/contact" class="py-2 px-3 block hover:bg-orange-500">Contact</a>
					<a href="/donate" class="py-2 px-3 block hover:bg-orange-500">Donate</a>
				</div>
			</div>
		</nav>
	</div>
</header>

<slot />

<footer class="bg-black text-white p-4">
	<div class="container mx-auto">
		<div class="flex flex-col md:flex-row justify-between pt-4">
			<div class="flex space-x-4">
				<a href="https://www.instagram.com" target="_blank" class="text-white hover:text-gray-300">
					<Icon icon="skill-icons:instagram" />
				</a>

				<a href="https://www.twitter.com" target="_blank" class="text-white hover:text-gray-300">
					<Icon icon="line-md:twitter-x" />
				</a>

				<a
					href="https://www.facebook.com/profile.php?id=61557759776367"
					target="_blank"
					class="text-white hover:text-gray-300"
				>
					<Icon icon="logos:facebook" />
				</a>

				<a
					href="https://www.youtube.com/@GiveToBetterlives-if8ts"
					target="_blank"
					class="text-white hover:text-gray-300"
				>
					<Icon icon="logos:youtube-icon" />
				</a>
			</div>
			<div class="flex flex-col pt-4">
				<p>Email: makoribenard@ymail.com</p>
				<p>Phone: + 8172170342/+254740219716</p>
				<p>Location: 2404 Cheyenne dr. Big Spring Tx 79720 USA.</p>
			</div>
		</div>
		<div class="mt-4">
			<p>Terms of Privacy | Copyright &copy; 2024 Designed by VOXART Studios</p>
		</div>
	</div>
</footer>

<style>
	@media only screen and (max-width: 600px) {
		.navbar {
			visibility: visible;
		}
	}

	.navbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		max-width: 1048px;
		padding: 1rem;
	}

	.navbar-title {
		font-size: 1.5rem;
		font-weight: bold;
		text-align: center;
	}
</style>
