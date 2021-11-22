import adapter from '@sveltejs/adapter-netlify';

export default {
	kit: {
		adapter: netlify( build ), // currently the adapter does not take any options
		target: '#svelte'
	}
};
