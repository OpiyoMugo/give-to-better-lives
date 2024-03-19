<div class="container">
	<div class="image-container">
		<img
			src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			alt=""
		/>
	</div>
	<div class="text-container">
		<h2 style="font-size: 24px; font-weight: bold;">
			Join Us in making a <span style="color: red; font-weight: bold;">DIFFERENCE</span>! Your
			donation fuels hope, ignites change, and transforms lives
		</h2>

		<p>
			At Give To Better Lives, we believe in the power of generosity to create a brighter future for
			all. Your donation is more than just a financial contribution; it's a lifeline for those in
			need, a beacon of hope in times of darkness, and a testament to the compassion that unites us
			all. With your support, we can continue to make a meaningful impact, reaching more
			individuals, families, and communities in their times of greatest need. Together, we can build
			a world where kindness knows no bounds and every person has the opportunity to thrive. Thank
			you for being a vital part of our mission.
		</p>
		<form action="https://www.paypal.com/donate" method="post" target="_top">
			<!-- Identify your business so that you can collect the payments. -->
			<div id="donate-button-container">
				<div id="donate-button"></div>
				<script src="https://www.paypalobjects.com/donate/sdk/donate-sdk.js"></script>
				<script>
					PayPal.Donation.Button({
						env: 'production',
						business: 'makoribenard@ymail.com',
						image: {
							src: 'https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif',
							alt: 'Donate with PayPal button',
							title: 'PayPal - The safer, easier way to pay online!'
						}
					}).render('#donate-button');
				</script>
			</div>
		</form>
	</div>
</div>

<div class="container">
	<!-- Existing content -->
	<div class="volunteer-section">
			<h1 style:font-size="24px" style:font-weight="bold">Volunteer With Us</h1>
			<div class="image-text-container">
					<div class="overlay-container">
							<img src="https://icma.org/sites/default/files/Volunteerism.jpeg" alt="" />
							<div class="overlay"></div>
					</div>
					<p>Your paragraph text goes here. This is where you can describe the volunteer opportunity or provide additional information.</p>
			</div>
	</div>
</div>


<style>
	.volunteer-section {
		margin-top: 20px; /* Adjust as needed */
	}

	.overlay-container {
		position: relative;
		width: 100%; /* Adjust as needed */
		height: 300px; /* Adjust as needed */
	}

	.overlay-container img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: light gray; /* Grey overlay with 50% opacity */
	}

	.container {
		display: flex;
		align-items: center;
		justify-content: left;
		padding: 20px;
	}

	.image-container {
		margin-right: 20px;
		border-bottom-left-radius: 40px;
	}

	.image-container img {
		max-width: 100%;
		max-height: 100%;
	}

	.text-container {
		display: flexbox;
		flex-direction: column;
		align-items: flex-start;
		justify-content: right;
	}

	
</style>


<link
	rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>