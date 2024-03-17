<script>
	import '../app.css';
</script>

<header>
	<div class="flex flex-col md:flex-row justify-between pt-4">
		<div class="flex text-center font-bold">
			Give To Better Lives
		</div>
		<nav class="flex flex-col md:flex-row justify-between">
			<ul class="gap-4 flex flex-col md:flex-row">
				<li><a href="/home" class="hover:text-green-500">Home</a></li>
				<li><a href="/about" class="hover:text-green-500">About</a></li>
				<li><a href="/events" class="hover:text-green-500">Events</a></li>
				<li><a href="/contact" class="hover:text-green-500">Contact</a></li>
				<li>
					<a
						href="/donate"
						class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-2 rounded block md:inline-block"
						>Donate
					</a>
				</li>
			</ul>
		</nav>
		<div class="toggle_btn">
			<i class="fa-solid fa-bars"></i>
		</div>
	</div>
</header>

<!-- Body content with increased padding at the top -->


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

