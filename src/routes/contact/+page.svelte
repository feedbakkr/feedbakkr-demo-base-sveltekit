<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import { site } from '$lib/content';

	const { title, intro, form, notes } = site.contact;

	function onSubmit(e: SubmitEvent) {
		e.preventDefault();
		// Demo only — no submission logic.
	}
</script>

<svelte:head>
	<title>{title} — {site.product.name}</title>
</svelte:head>

<Section variant="hero">
	<h1>{title}</h1>
	<p class="ui-lede">{intro}</p>

	<form class="formCard" style="margin-top: 1.5rem;" onsubmit={onSubmit}>
		<div class="formGrid">
			<div class="row2">
				<div class="field">
					<label for="name">Name</label>
					<input id="name" name="name" type="text" placeholder={form.fields.name} required />
				</div>
				<div class="field">
					<label for="email">Email</label>
					<input
						id="email"
						name="email"
						type="email"
						placeholder={form.fields.email}
						required
					/>
				</div>
			</div>

			<div class="field">
				<label for="topic">Topic</label>
				<select id="topic" name="topic" value="">
					<option value="" disabled>Select a topic</option>
					{#each form.fields.topic as t (t)}
						<option value={t}>{t}</option>
					{/each}
				</select>
			</div>

			<div class="field">
				<label for="message">Message</label>
				<textarea
					id="message"
					name="message"
					placeholder={form.fields.message}
					rows={6}
					required
				></textarea>
			</div>

			<div>
				<button type="submit" class="ui-button ui-buttonPrimary">Send message</button>
			</div>
		</div>

		<div class="notes">
			<p style="margin: 0;">{notes.response}</p>
			<p style="margin: 0;">{notes.tip}</p>
		</div>
	</form>
</Section>

<style>
	.formCard {
		background: var(--surface-raised);
		border: 1px solid var(--border);
		border-radius: var(--radius);
		padding: 1.5rem;
		box-shadow: var(--shadow-sm);
	}

	.formGrid {
		display: grid;
		gap: 0.85rem;
	}

	.row2 {
		display: grid;
		gap: 0.85rem;
		grid-template-columns: 1fr;
	}

	@media (min-width: 560px) {
		.row2 {
			grid-template-columns: 1fr 1fr;
		}
	}

	.field {
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
	}

	.field label {
		font-size: 0.85rem;
		color: var(--text-muted);
	}

	.field input,
	.field select,
	.field textarea {
		width: 100%;
		background: var(--surface);
		border: 1px solid var(--border-strong);
		border-radius: var(--radius-sm);
		padding: 0.55rem 0.7rem;
		font: inherit;
		color: var(--text);
		transition:
			border-color 120ms,
			box-shadow 120ms;
	}

	.field input:hover,
	.field select:hover,
	.field textarea:hover {
		border-color: var(--accent);
	}

	.field textarea {
		resize: vertical;
		min-height: 7rem;
	}

	.notes {
		display: grid;
		gap: 0.5rem;
		color: var(--text-muted);
		font-size: 0.875rem;
		margin-top: 1rem;
	}
</style>
