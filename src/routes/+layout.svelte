<script>
	import '../app.css';
</script>

<header>
	<div class="navbar">
		<div class="navbar-title">Give To Better Lives</div>
		<nav class="navbar-links">
			<a href="/home" class="hover:text-green-500">Home</a>
			<a href="/about" class="hover:text-green-500">About</a>
			<a href="/events" class="hover:text-green-500">Events</a>
			<a href="/contact" class="hover:text-green-500">Contact</a>
			<a
				href="/donate"
				class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-2 rounded md:inline-block"
				>Donate</a
			>
		</nav>
	</div>
</header>

<slot />

<footer class="bg-black text-white p-4">
	<div class="container mx-auto">
		<div class="flex flex-col md:flex-row justify-between pt-4">
			<div class="flex space-x-4">
				<a href="https://www.instagram.com" target="_blank" class="text-white hover:text-gray-300">
					<i class="fa fa-instagram"></i>
				</a>
				<a href="https://www.twitter.com" target="_blank" class="text-white hover:text-gray-300">
					<i class="fa fa-twitter"></i>
				</a>
				<a href="https://www.facebook.com" target="_blank" class="text-white hover:text-gray-300">
					<i class="fa fa-facebook"></i>
				</a>
				<a href="https://www.youtube.com" target="_blank" class="text-white hover:text-gray-300">
					<i class="fa fa-youtube"></i>
				</a>
			</div>
			<div class="flex flex-col pt-4">
				<p>Email: makoribenard@ymail.com</p>
				<p>Phone: + 8172179342</p>
				<p>Location: 1404 Cheyenne Big Spring Texas 79720 USA.</p>
			</div>
		</div>
		<div class="mt-4">
			<p>Terms of Privacy | Copyright &copy; 2024 Designed by VOXART Studios</p>
		</div>
	</div>
</footer>

<style>
	/* Header and navigation styles */
	.navbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		max-width: 1048px; /* Adjust based on your design */
		padding: 1rem;
	}

	.navbar-title {
		font-size: 1.5rem;
		font-weight: bold;
		text-align: center;
	}

	.navbar-links {
		display: flex;
		gap: 16px;
	}

	.navbar-links a {
		text-decoration: none;
		color: #333;
		font-weight: bold;
		padding: 10px;
		border-radius: 20px;
		transition: background-color 0.3s ease;
	}

	.navbar-links a:hover {
		background-color: #1bf30b;
	}
</style>
