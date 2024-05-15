<script>
	let showMore = false;
	const images = [
		'launch.png',
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

<div class="flex items-start justify-center">
	<h1 class="text-lg font-semibold">G.T.B.L Launch!</h1>
</div>

<div class="flex items-center">
	<h2 class="text-xl flex items-align justify-center text-center md:text-lg mt-18 py-5 px-4 pt-0">
		<p>
			We are thrilled to share with you the exciting news: Give To Better Lives is officially live
			and ready to make a difference! Since our inception, we have been tirelessly working towards
			making a difference in the lives of children and families. Now, with great pride and
			enthusiasm, we are delighted to announce that our doors are open, and our mission is set in
			motion.
		</p>
	</h2>
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
