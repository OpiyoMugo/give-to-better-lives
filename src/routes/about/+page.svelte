<div class="container">
	<div class="image">
		<img src="https://images.pexels.com/photos/9532305/pexels-photo-9532305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
			alt= ""
		/>
	</div>

	<div class="text">
		<h1>
			<span style="color: orange; font-size: 24px; font-weight: bold;">Who</span>
			<span style="color: green; font-size: 24px; font-weight: bold;">We Are</span>
		</h1>
		<p>
			A Charity Organization founded to ensure that children and families most in need have one
			basic commodity of life, “Clothing”.
		</p>
		<p>
			We commit ourselves to helping families in the poor communities, the marginalized and
			underprivileged to improve their lives and achieve lasting victory against poverty.
		</p>
		<div class="text-center mt-4">
			<a
				href="https://www.youtube.com/@GiveToBetterlives-if8ts"
				target="_blank"
				class="youtube-button"
			>
				YouTube
			</a>
		</div>
	</div>
</div>

<div class="what-we-do">
	<h2>
			<span style="color: orange; font-size: 24px; font-weight: bold;">What</span>
			<span style="color: green; font-size: 24px; font-weight: bold;">We Do</span>
	</h2>
	<div class="map-overlay">
			<div class="box">
					<h3 style="color: rgb(0, 200, 0);">Education</h3>
					<p>Our Volunteers ensure marginalized individuals are well-educated to survive their environment.</p>
			</div>
			<div class="box">
					<h3 style="color: rgb(0, 200, 0);">Donate Clothes</h3>
					<p>We fight poverty by ensuring needy kids and families afford proper clothing.</p>
			</div>
			<div class="box">
					<h3 style="color: rgb(0, 200, 0);">Protect Children</h3>
					<p>We fight poverty by ensuring needy kids and families afford proper clothing.</p>
			</div>
			<div class="box">
					<h3 style="color: rgb(0, 200, 0);">Support Families</h3>
					<p>We improve the living conditions of families so as to prevent possible calamities.</p>
			</div>
	</div>
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 20px;
		align-items: center;
		padding: 40px;
	}
	.image {
		grid-column: 1;
	}
	.text {
		grid-column: 0;
	}

	.youtube-button {
		display: inline-block;
		padding: 8px 10px; /* Adjust padding as needed */
		margin: 10px; /* Adjust margin as needed */
		font-size: 18px; /* Adjust font size as needed */
		text-decoration: none;
		color: #fff;
		background-color: #ff0000; /* YouTube red */
		border-radius: 5px;
		transition: background-color 0.3s ease;
		font-weight: bold;
	}

	.youtube-button:hover {
		background-color: #c40000; /* Darker shade for hover effect */
	}

	.what-we-do {
		text-align: center;
		padding: 30px;
	}

	.map-overlay {
		position: relative;
		background-image: url(https://previews.123rf.com/images/pytyczech/pytyczech1704/pytyczech170400041/76367207-arab-world-states-political-map-with-higlighted-22-arabic-speaking-countries-of-the-arab-league.jpg);
		background-size: cover;
		background-position: center;
		height: 400px; /* Adjust height as needed */
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}

	.map-overlay::backdrop {
		content: '';
		position: relative;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(247, 244, 244, 0.5); /* Gray overlay with 50% opacity */
	}

	.box {
		width: 200px; /* Adjust width as needed */
		padding: 20px;
		background-color: #fff;
		border-radius: 5px;
		box-shadow: 0 4px 8px rgba(181, 180, 180, 0.1);
	}
</style>

<link
	rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
/>