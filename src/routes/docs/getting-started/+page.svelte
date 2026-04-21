<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import { site } from '$lib/content';

	const { gettingStarted } = site.docs;
</script>

<svelte:head>
	<title>{gettingStarted.title} — {site.product.name}</title>
</svelte:head>

<Section variant="hero">
	<div class="docPage">
		<article>
			<p class="breadcrumb">
				<a href="/docs">Docs</a> / {gettingStarted.title}
			</p>
			<h1>{gettingStarted.title}</h1>
			<p class="ui-lede">{gettingStarted.intro}</p>

			{#each gettingStarted.sections as s (s.title)}
				<div class="docSection">
					<h2>{s.title}</h2>
					<p>{s.body}</p>
					{#if 'code' in s && s.code}
						<pre><code>{s.code}</code></pre>
					{/if}
				</div>
			{/each}

			<div class="ui-callout" style="margin-top: 1.5rem;">
				{gettingStarted.callout}
			</div>

			<div class="docFeedback">
				<span>{gettingStarted.feedback}</span>
				<div class="docFeedbackActions">
					<button type="button" class="ui-button ui-buttonSecondary" disabled>Yes</button>
					<button type="button" class="ui-button ui-buttonSecondary" disabled>No</button>
				</div>
			</div>
		</article>

		<aside class="sidebar" aria-label="Related">
			<h4>Related</h4>
			<ul>
				<li><a href="/docs/sdk-setup">SDK Setup</a></li>
				<li><a href="/docs/troubleshooting">Troubleshooting</a></li>
				<li><a href="/contact">Contact support</a></li>
			</ul>
		</aside>
	</div>
</Section>
