/**
 * Shared demo-modal open state. Using a Svelte 5 rune-based store so both the
 * info bar (which opens it) and the modal component (which closes it) can
 * subscribe to the same reactive flag without prop drilling.
 */
export const DEMO_MODAL_ACK_KEY = 'feedbakkr-demo-ack';

function createDemoModalState() {
	let open = $state(false);

	return {
		get open() {
			return open;
		},
		show() {
			open = true;
		},
		hide() {
			open = false;
		}
	};
}

export const demoModal = createDemoModalState();
