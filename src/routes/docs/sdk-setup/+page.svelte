<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import { site } from '$lib/content';

	const { sdkSetup } = site.docs;
</script>

<svelte:head>
	<title>{sdkSetup.title} — {site.product.name}</title>
</svelte:head>

<Section variant="hero">
	<div class="docPage">
		<article>
			<p class="breadcrumb">
				<a href="/docs">Docs</a> / {sdkSetup.title}
			</p>
			<h1>{sdkSetup.title}</h1>
			<p class="ui-lede">{sdkSetup.intro}</p>

			{#each sdkSetup.sections as s (s.title)}
				<div class="docSection">
					<h2>{s.title}</h2>
					<p>{s.body}</p>
					{#if 'code' in s && s.code}
						<pre><code>{s.code}</code></pre>
					{/if}
				</div>
			{/each}

			<div class="ui-callout" style="margin-top: 1.5rem;">
				{sdkSetup.callout}
			</div>

			<div class="docFeedback">
				<span>{sdkSetup.feedback}</span>
				<div class="docFeedbackActions">
					<button type="button" class="ui-button ui-buttonSecondary" disabled>Yes</button>
					<button type="button" class="ui-button ui-buttonSecondary" disabled>No</button>
				</div>
			</div>
		</article>

		<aside class="sidebar" aria-label="Related">
			<h4>Related</h4>
			<ul>
				<li><a href="/docs/getting-started">Getting Started</a></li>
				<li><a href="/docs/troubleshooting">Troubleshooting</a></li>
				<li><a href="/contact">Contact support</a></li>
			</ul>
		</aside>
	</div>
</Section>
