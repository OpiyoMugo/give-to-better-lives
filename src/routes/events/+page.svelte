<script>
	let showMore = false;
	const images = [
		'event1.png',
		'poverty.png',
		'africa.png',
		'box.png',
		'fbcoverpage.png',
		'dump.png'
	];
</script>

<div class="flex items-center justify-center">
	<h1 class="text-2xl font-bold">
		Join Us for our upcoming events and make a difference in the community!
	</h1>
</div>

<div class="flex flex-col items-align h-200px w-400px">
	{#each images as image, index}
		{#if index < 8 || showMore}
			<img src={image} alt="" />
		{/if}
	{/each}
</div>

<div
	class=" text-white bg-orange-500 hover:bg-green-500 m-10 p-4 mr-9 pr-8 rounded-md flex items-center justify-center"
>
	<button on:click={() => (showMore = !showMore)}>
		{showMore ? 'View Less' : 'View More'}
	</button>
</div>
