<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import { site } from '$lib/content';

	const DOC_PATHS: { title: string; path: string }[] = [
		{ title: 'Getting Started', path: '/docs/getting-started' },
		{ title: 'SDK Setup', path: '/docs/sdk-setup' },
		{ title: 'Troubleshooting', path: '/docs/troubleshooting' }
	];

	const { index } = site.docs;
</script>

<svelte:head>
	<title>{index.title} — {site.product.name}</title>
</svelte:head>

<Section variant="hero">
	<h1>{index.title}</h1>
	<p class="ui-lede">{index.intro}</p>

	<div class="docCardRow" style="margin-top: 1.75rem;">
		{#each index.pages as p (p.title)}
			{@const target = DOC_PATHS.find((d) => d.title === p.title)?.path ?? '/docs'}
			<a href={target} class="ui-card ui-cardLink">
				<h3 class="ui-cardTitle">{p.title}</h3>
				<p class="ui-cardBody">{p.description}</p>
			</a>
		{/each}
	</div>

	<div class="ui-callout" style="margin-top: 1.5rem;">
		{index.note}
	</div>
</Section>
