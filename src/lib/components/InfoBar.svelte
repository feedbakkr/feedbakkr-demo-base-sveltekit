<script lang="ts">
	import { demoModal } from '$lib/stores/modal.svelte';

	const FEEDBAKKR_SITE_URL = 'https://feedbakkr.com';
</script>

<div class="infoBar" role="region" aria-label="Demo information">
	<div class="infoBarInner">
		<span class="infoBarLabel">
			<span class="infoBarDot" aria-hidden="true"></span>
			Feedbakkr demo app
		</span>
		<div class="infoBarActions">
			<a
				class="infoBarLink"
				href={FEEDBAKKR_SITE_URL}
				target="_blank"
				rel="noreferrer noopener"
			>
				Visit feedbakkr.com
			</a>
			<span class="infoBarDivider" aria-hidden="true">·</span>
			<button type="button" class="infoBarButton" onclick={() => demoModal.show()}>
				About this demo
			</button>
		</div>
	</div>
</div>

<style>
	.infoBar {
		background: #0d9488;
		border-bottom: 1px solid rgba(15, 23, 42, 0.12);
		font-size: 0.78rem;
		color: #f0fdfa;
	}

	.infoBarInner {
		max-width: var(--max-w);
		margin: 0 auto;
		padding: 0.4rem 1.25rem;
		display: flex;
		align-items: center;
		gap: 0.75rem;
		flex-wrap: nowrap;
		white-space: nowrap;
	}

	@media (max-width: 640px) {
		.infoBarLink,
		.infoBarDivider {
			display: none;
		}
	}

	.infoBarLabel {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		font-weight: 500;
		color: #ffffff;
	}

	.infoBarDot {
		width: 7px;
		height: 7px;
		border-radius: 999px;
		background: #ffffff;
		box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.25);
	}

	.infoBarActions {
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
		margin-left: auto;
	}

	.infoBarLink {
		color: #f0fdfa;
		font-size: 0.78rem;
	}

	.infoBarLink:hover {
		color: #ffffff;
		text-decoration: underline;
	}

	.infoBarDivider {
		color: rgba(255, 255, 255, 0.4);
	}

	.infoBarButton {
		background: transparent;
		border: 0;
		padding: 0;
		color: #ffffff;
		font-size: 0.78rem;
		font-weight: 500;
		font-family: inherit;
		cursor: pointer;
		text-decoration: underline;
	}

	.infoBarButton:hover {
		color: #ffffff;
		text-decoration: none;
	}

	@media (max-width: 480px) {
		.infoBarActions {
			margin-left: 0;
			width: 100%;
		}
	}
</style>
