<script lang="ts">
	import Icon from '@iconify/svelte';

	let name = '';
	let address = '';
	let email = '';
	let message = '';
	let phone = '';
</script>

<div
	class="relative bg-[url('/reachus.png')] h-[200px] lg:h-[500px] md:h-[400px] bg-cover bg-no-repeat px-5 py-5 flex items-center justify-center m-4 -my-2"
>
	<div
		class="absolute top-[50%] w-full h-[50px] md:top-[87.5%] lg:top-[90%] md:w-3/4 flex items-center justify-center"
	>
		<p class="  text-white font-bold text-2xl md:text-3xl">Contact Us</p>
	</div>
</div>

<div class="flex flex-row items-center justify-center p-20 pb-8 pt-3">
	<p class="text-l from-inherit pt-5 m-30">
		As a non-profit organization or donor, we invite you to join us in our mission to mobilize and
		impact the world through the joyful art of giving. Should you have any inquiry, please reach out
		to our team.
	</p>
</div>

<div class=" w-full border-2 flex flex-col gap-3 items-start justify-start md:w-3/4 p-3">
	<form class="w-full p-3" target="_blank" action="https://formsubmit.co/el/tafaka" method="POST">
		<input type="hidden" name="_template" value="box" />

		<div class="font-extrabold text-lg uppercase text-red-500 gap-4 mb-7">
			<p>* Required Information</p>
			<hr class="h-[4px] bg-gray-300 border-0 rounded w-full flex" />
		</div>

		<div class="w-full px-2 mb-1 md:mb-0">
			<p class="uppercase font-bold text-md py-2">
				Full name <span class="text-red-500">*</span>
			</p>
			<label class="block text-md mb-2">
				<input
					type="text"
					required
					name="Full Name"
					class="w-full p-3 outline outline-gray-400 lg:outline-gray-300 focus:outline-mainOrange"
					placeholder="Enter your Full Name"
					bind:value={name}
				/>
			</label>
		</div>

		<div class="w-full px-2 mb-1 md:mb-0">
			<p class="uppercase font-bold text-md py-2">
				Address <span class="text-red-500">*</span>
			</p>
			<label class="block text-md mb-2">
				<input
					type="text"
					required
					name="Address"
					class="w-full p-3 outline outline-gray-400 lg:outline-gray-300 focus:outline-mainOrange"
					placeholder="Enter your Adress"
					bind:value={address}
				/>
			</label>
		</div>

		<div class="flex flex-wrap mb-1">
			<div class="w-full md:w-1/2 px-2 mb-1 md:mb-0">
				<p class="uppercase font-bold text-md py-2">
					Email Address <span class="text-red-500">*</span>
				</p>
				<label class="block text-md mb-2">
					<input
						type="text"
						required
						name="Email Address"
						class="w-full p-3 outline outline-gray-400 lg:outline-gray-300 focus:outline-mainOrange"
						placeholder="Enter your Email Address"
						bind:value={email}
					/>
				</label>
			</div>

			<div class="w-full md:w-1/2 px-2 mb-1 md:mb-0">
				<p class="uppercase font-bold text-md py-2">
					Phone Number <span class="text-red-500">*</span>
				</p>
				<label class="block text-md mb-2">
					<input
						type="text"
						required
						name="Phone Number"
						class="w-full p-3 outline outline-gray-400 lg:outline-gray-300 focus:outline-mainOrange"
						placeholder="Enter your Phone Number"
						bind:value={phone}
					/>
				</label>
			</div>
		</div>

		<div class="w-full px-2 mb-1 md:mb-0">
			<p class="uppercase font-bold text-md py-2">
				question / inquiry <span class="text-red-500">*</span>
			</p>

			<label class="block text-md mb-2">
				<textarea
					name="Message"
					required
					class=" h-[150px] w-full p-3 outline outline-gray-400 lg:outline-gray-300 focus:outline-mainOrange"
					placeholder="Message"
					bind:value={message}
				/>
			</label>
		</div>
		<button
			class=" w-[200px] h-[60px] rounded-sm bg-mainOrange p-2 mb-8 text-lg font-light capitalize tracking-wider text-mainWhite"
			type="submit"
		>
			Submit
		</button>
	</form>
</div>
