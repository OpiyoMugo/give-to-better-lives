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
