<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import { site } from '$lib/content';

	const { title, intro, items, cta } = site.featuresPage;
</script>

<svelte:head>
	<title>{title} — {site.product.name}</title>
</svelte:head>

<Section variant="hero">
	<h1>{title}</h1>
	<p class="ui-lede">{intro}</p>
</Section>

<Section>
	<div class="ui-grid3">
		{#each items as item (item.title)}
			<div class="ui-card">
				<h3 class="ui-cardTitle">{item.title}</h3>
				<p class="ui-cardBody">{item.body}</p>
			</div>
		{/each}
	</div>
</Section>

<Section>
	<div class="ui-ctaBlock">
		<h2>{cta.title}</h2>
		<div class="ui-ctaBlockActions">
			<a href="/docs" class="ui-button ui-buttonPrimary">{cta.action}</a>
		</div>
	</div>
</Section>
