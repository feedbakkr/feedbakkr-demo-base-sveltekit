<script lang="ts">
	import { site } from '$lib/content';
</script>

<footer class="footer">
	<div class="footerInner">
		<div>
			<p class="footerNote">{site.navigation.footerNote}</p>
			<p class="footerMicro">{site.navigation.footerMicro}</p>
		</div>
		<div class="footerLinks">
			<a href="/docs">Docs</a>
			<a href="/contact">Contact</a>
			<a href="/about">About</a>
		</div>
	</div>
</footer>

<style>
	.footer {
		border-top: 1px solid var(--border);
		background: var(--surface-muted);
		padding: 2rem 0;
		margin-top: 3rem;
	}

	.footerInner {
		max-width: var(--max-w);
		margin: 0 auto;
		padding: 0 1.25rem;
		display: grid;
		gap: 1.25rem;
	}

	@media (min-width: 640px) {
		.footerInner {
			grid-template-columns: 2fr 1fr;
			align-items: start;
		}
	}

	.footerNote {
		color: var(--text-muted);
		font-size: 0.875rem;
		margin: 0 0 0.25rem;
	}

	.footerMicro {
		color: var(--text-subtle);
		font-size: 0.8rem;
		margin: 0;
		font-style: italic;
	}

	.footerLinks {
		display: flex;
		gap: 1.25rem;
		flex-wrap: wrap;
		justify-self: start;
	}

	@media (min-width: 640px) {
		.footerLinks {
			justify-self: end;
		}
	}

	.footerLinks a {
		font-size: 0.875rem;
		color: var(--text-muted);
	}
</style>
