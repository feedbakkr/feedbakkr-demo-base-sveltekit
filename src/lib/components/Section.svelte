<script lang="ts">
	import type { Snippet } from 'svelte';

	type Variant = 'default' | 'tight' | 'hero';
	type Tag = 'section' | 'div' | 'main' | 'header' | 'footer';

	interface Props {
		children: Snippet;
		variant?: Variant;
		as?: Tag;
		class?: string;
		style?: string;
	}

	let {
		children,
		variant = 'default',
		as = 'section',
		class: className = '',
		style = ''
	}: Props = $props();

	const cls = $derived(
		[
			'section',
			variant === 'tight' ? 'sectionTight' : '',
			variant === 'hero' ? 'hero' : '',
			className
		]
			.filter(Boolean)
			.join(' ')
	);
</script>

{#if as === 'section'}
	<section class={cls} {style}>
		{@render children()}
	</section>
{:else if as === 'div'}
	<div class={cls} {style}>
		{@render children()}
	</div>
{:else if as === 'main'}
	<main class={cls} {style}>
		{@render children()}
	</main>
{:else if as === 'header'}
	<header class={cls} {style}>
		{@render children()}
	</header>
{:else}
	<footer class={cls} {style}>
		{@render children()}
	</footer>
{/if}

<style>
	.section {
		max-width: var(--max-w);
		margin: 0 auto;
		padding: 2.5rem 1.25rem;
	}

	@media (min-width: 640px) {
		.section {
			padding: 3.5rem 1.5rem;
		}
	}

	.sectionTight {
		padding-top: 1.5rem;
		padding-bottom: 1.5rem;
	}

	.hero {
		padding-top: 3rem;
		padding-bottom: 2.5rem;
	}

	@media (min-width: 640px) {
		.hero {
			padding-top: 5rem;
			padding-bottom: 3.5rem;
		}
	}
</style>
