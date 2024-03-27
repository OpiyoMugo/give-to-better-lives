// import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
// import adapter from '@sveltejs/adapter-static';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	preprocess: vitePreprocess(),
// 	kit: {
// 		adapter: adapter({
// 			// fallback: 'index.html'

// 		}),
// 		// prerender: {
// 		// 	entries: [
// 		// 	  '/home',
// 		// 	  '/about',
// 		// 	  '/events',
// 		// 	  '/contacts',
// 		// 	  '/donate',
// 		// 	],
// 		//   },
// 	}
// };

// export default config;



import adapter from '@sveltejs/adapter-node';

export default {
  kit: {
    adapter: adapter({
      // default options are shown
      out: 'build',
      precompress: true,
      envPrefix: ''
    })
  }
};

