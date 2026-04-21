<script lang="ts">
	import '../app.css';
	import '$lib/styles/ui.css';
	import '$lib/styles/docs.css';
	import { browser } from '$app/environment';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import InfoBar from '$lib/components/InfoBar.svelte';
	import DemoModal from '$lib/components/DemoModal.svelte';
	import { demoModal, DEMO_MODAL_ACK_KEY } from '$lib/stores/modal.svelte';

	let { children } = $props();

	// First-run: open modal client-side if ack hasn't been stored yet.
	$effect(() => {
		if (!browser) return;
		try {
			if (localStorage.getItem(DEMO_MODAL_ACK_KEY) !== '1') {
				demoModal.show();
			}
		} catch {
			demoModal.show();
		}
	});
</script>

<svelte:head>
	<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
</svelte:head>

<div class="shell">
	<div class="topStack">
		<InfoBar />
		<Header />
	</div>

	<main class="main">
		{@render children()}
	</main>

	<Footer />

	<DemoModal />
</div>

<style>
	.shell {
		min-height: 100dvh;
		display: flex;
		flex-direction: column;
		background: var(--surface);
	}

	.topStack {
		position: sticky;
		top: 0;
		z-index: 20;
	}

	.main {
		flex: 1;
		width: 100%;
	}
</style>
