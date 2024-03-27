<script>
	let showMore = false;
	const images = [
		'event1.png',
		'poverty.png',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZgVH0rAelJ2l7Ty-gU06ngwpGDnmeRJuUkw&usqp=CAU',
		'https://1.bp.blogspot.com/-vImShZH8tME/U6K4B6jFj5I/AAAAAAAABYg/bSTs6fdfmm4/s1600/gaia_clothing_bin_cult_donate_your_clothes_for_a_better_world.jpg',
		'https://www.movingmountainstrust.org/media/201449/exploring-social-enterprise-3.jpg?height=0&width=0&quality=&mode=Crop&center=0.5,0.5&bgcolor=',
		'https://npr.brightspotcdn.com/dims4/default/cd82aa1/2147483647/strip/true/crop/4608x3072+0+0/resize/880x587!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fwrvo%2Ffiles%2F201310%2FBabaDogo3.jpg',
		'https://st4.depositphotos.com/11089512/21554/i/450/depositphotos_215548860-stock-photo-donation-concept-woman-preparing-her.jpg',
		'https://giveuswings.org/wp-content/uploads/2018/09/group-of-women-600x475.jpg'
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
