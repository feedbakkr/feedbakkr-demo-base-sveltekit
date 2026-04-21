<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import { site } from '$lib/content';

	const { hero, whatItDoes, features, howItWorks, stats, cta } = site.home;
</script>

<svelte:head>
	<title>{site.product.name}</title>
</svelte:head>

<Section variant="hero" class="home-hero">
	<span class="eyebrow">{site.product.phrases[0]}</span>
	<h1 class="heroTitle">{hero.title}</h1>
	<p class="heroSubtitle">{hero.subtitle}</p>
	<p class="heroBody">{hero.body}</p>
	<div class="heroActions">
		<a href="/docs" class="ui-button ui-buttonPrimary">{hero.primaryCTA}</a>
		<a href="/contact" class="ui-button ui-buttonSecondary">{hero.secondaryCTA}</a>
	</div>
</Section>

<Section>
	<div class="ui-sectionHeader">
		<h2>{whatItDoes.title}</h2>
		<p class="ui-lede">{whatItDoes.body}</p>
	</div>

	<div class="ui-grid2">
		{#each features as f (f.title)}
			<div class="ui-card">
				<h3 class="ui-cardTitle">{f.title}</h3>
				<p class="ui-cardBody">{f.body}</p>
			</div>
		{/each}
	</div>
</Section>

<Section>
	<div class="ui-sectionHeader">
		<h2>How it works</h2>
		<p class="ui-lede">
			A small, predictable loop — capture, structure, and route signals to where your team
			already works.
		</p>
	</div>
	<ol class="howItWorks">
		{#each howItWorks as step (step)}
			<li>{step}</li>
		{/each}
	</ol>
</Section>

<Section>
	<div class="ui-sectionHeader">
		<h2>Signals at a glance</h2>
		<p class="ui-lede">Mock numbers used for illustrative demo purposes.</p>
	</div>
	<div class="ui-statGrid">
		{#each stats as s (s)}
			<div class="ui-statItem">{s}</div>
		{/each}
	</div>
</Section>

<Section>
	<div class="ui-ctaBlock">
		<h2>{cta.title}</h2>
		<p class="ui-lede" style="margin: 0 auto;">{cta.body}</p>
		<div class="ui-ctaBlockActions">
			<a href="/docs" class="ui-button ui-buttonPrimary">{cta.action}</a>
		</div>
	</div>
</Section>

<style>
	:global(.home-hero) {
		text-align: center;
	}

	.eyebrow {
		display: inline-block;
		font-size: 0.72rem;
		font-weight: 600;
		letter-spacing: 0.09em;
		text-transform: uppercase;
		color: var(--accent);
		margin-bottom: 0.75rem;
	}

	.heroTitle {
		font-size: clamp(2rem, 4vw + 1rem, 3.5rem);
		line-height: 1.1;
		letter-spacing: -0.02em;
		margin: 0 0 0.75rem;
	}

	.heroSubtitle {
		color: var(--text-muted);
		font-size: 1.15rem;
		max-width: 62ch;
		margin: 0 auto 1.5rem;
	}

	.heroActions {
		display: flex;
		gap: 0.75rem;
		justify-content: center;
		flex-wrap: wrap;
		margin-top: 1rem;
	}

	.heroBody {
		color: var(--text-muted);
		max-width: 58ch;
		margin: 0 auto 1.5rem;
	}

	.howItWorks {
		display: grid;
		gap: 0.75rem;
		counter-reset: step;
		padding: 0;
		margin: 0;
		list-style: none;
	}

	.howItWorks li {
		background: var(--surface-raised);
		border: 1px solid var(--border);
		border-radius: var(--radius-sm);
		padding: 0.9rem 1rem 0.9rem 3rem;
		position: relative;
		counter-increment: step;
	}

	.howItWorks li::before {
		content: counter(step);
		position: absolute;
		left: 0.9rem;
		top: 50%;
		transform: translateY(-50%);
		width: 1.6rem;
		height: 1.6rem;
		border-radius: 50%;
		background: var(--accent-soft);
		color: var(--accent);
		display: inline-flex;
		align-items: center;
		justify-content: center;
		font-weight: 600;
		font-size: 0.85rem;
	}
</style>
