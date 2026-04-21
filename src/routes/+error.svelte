<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import { site } from '$lib/content';

	const { title, body, cta } = site.error404;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<Section variant="hero">
	<div style="text-align: center;">
		<p style="color: var(--accent); letter-spacing: 0.09em; font-weight: 600;">404</p>
		<h1>{title}</h1>
		<p class="ui-lede" style="margin: 0 auto 1.25rem;">{body}</p>
		<a href="/" class="ui-button ui-buttonPrimary">{cta}</a>
	</div>
</Section>
