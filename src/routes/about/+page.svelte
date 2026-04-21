<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import { site } from '$lib/content';

	const { title, intro, sections, closing } = site.about;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<Section variant="hero">
	<h1>{title}</h1>
	<p class="ui-lede">{intro}</p>
</Section>

<Section>
	<div class="ui-grid3">
		{#each sections as s (s.title)}
			<div class="ui-card">
				<h3 class="ui-cardTitle">{s.title}</h3>
				<p class="ui-cardBody">{s.body}</p>
			</div>
		{/each}
	</div>
</Section>

<Section>
	<div class="ui-ctaBlock">
		<h2>{closing}</h2>
	</div>
</Section>
