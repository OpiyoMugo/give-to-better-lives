<script>
	let showMore = false;
	const images = [
		'event1.png',
		'poverty.png',
		'donating.png',
		'africa.png',
		'box.png',
		'fbcoverpage.png',
		'dump.png'
	];
</script>

<div class="events-page">
	<h1 style:font-size="150%" style:font-weight="bold">
		Join Us for our upcoming events and make a difference in the community!
	</h1>

	<div class="gallery">
		{#each images as image, index}
			{#if index < 8 || showMore}
				<img src={image} alt="" />
			{/if}
		{/each}
	</div>
	<button on:click={() => (showMore = !showMore)}>
		{showMore ? 'View Less' : 'View More'}
	</button>
</div>

<link
	rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
/>

<style>
	.events-page {
		max-width: 1200px;
		margin: 0 auto;
		padding: 20px;
	}

	.gallery {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 10px;
	}

	.gallery img {
		width: 100%;
		height: auto;
		object-fit: scale-down;
		object-position: center;
	}

	button {
		display: block;
		margin: 20px auto;
		padding: 10px 20px;
		background-color: #ff6600;
		color: white;
		border: none;
		border-radius: 5px;
		cursor: pointer;
	}
</style>
