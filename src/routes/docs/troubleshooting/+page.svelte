<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import { site } from '$lib/content';

	const { troubleshooting } = site.docs;
</script>

<svelte:head>
	<title>{troubleshooting.title} — {site.product.name}</title>
</svelte:head>

<Section variant="hero">
	<div class="docPage">
		<article>
			<p class="breadcrumb">
				<a href="/docs">Docs</a> / {troubleshooting.title}
			</p>
			<h1>{troubleshooting.title}</h1>
			<p class="ui-lede">{troubleshooting.intro}</p>

			<ul class="issueList">
				{#each troubleshooting.issues as issue (issue.title)}
					<li>
						<p class="issueTitle">{issue.title}</p>
						<p class="issueBody">{issue.resolution}</p>
					</li>
				{/each}
			</ul>

			<p style="margin-top: 1.5rem; color: var(--text-muted);">
				{troubleshooting.cta} <a href="/contact">Contact us</a>.
			</p>

			<div class="docFeedback">
				<span>{troubleshooting.feedback}</span>
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
				<li><a href="/docs/sdk-setup">SDK Setup</a></li>
				<li><a href="/contact">Contact support</a></li>
			</ul>
		</aside>
	</div>
</Section>
