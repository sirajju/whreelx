<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	/** @type {HTMLFormElement | null} */
	let form = null;

	/** @param {SubmitEvent} event */
	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch('submit');
		form?.reset();
	};
</script>

<section id="contact" class="mx-auto max-w-7xl px-6 py-24">
	<div class="grid gap-16 md:grid-cols-2">
		<div>
			<h2 class="mb-6 text-4xl font-bold">Let's Talk Business</h2>
			<p class="mb-8 leading-relaxed text-gray-400">Reach out and we'll get back to you within 24 hours.</p>
			<div class="space-y-6">
				<div class="flex items-center gap-4">
					<div class="glass flex h-10 w-10 items-center justify-center rounded-full text-violet-400">
						<i data-lucide="mail" class="w-5"></i>
					</div>
					<span class="text-gray-300">hello@whreelxcreative.com</span>
				</div>
				<div class="flex gap-4 pt-4">
					<a
						href="https://www.instagram.com/"
						target="_blank"
						rel="noreferrer"
						class="glass flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-violet-600"
						aria-label="Visit Instagram"
					>
						<i data-lucide="instagram" class="w-5" aria-hidden="true"></i>
					</a>
					<a
						href="https://www.linkedin.com/"
						target="_blank"
						rel="noreferrer"
						class="glass flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-violet-600"
						aria-label="Visit LinkedIn"
					>
						<i data-lucide="linkedin" class="w-5" aria-hidden="true"></i>
					</a>
				</div>
			</div>
		</div>
		<form
			bind:this={form}
			class="glass space-y-6 rounded-2xl border-white/5 p-8"
			on:submit={handleSubmit}
		>
			<input
				type="text"
				placeholder="Full Name"
				required
				class="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 transition focus:border-violet-500 focus:outline-none"
			/>
			<input
				type="email"
				placeholder="Email Address"
				required
				class="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 transition focus:border-violet-500 focus:outline-none"
			/>
			<textarea
				placeholder="How can we help?"
				required
				class="h-32 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-4 transition focus:border-violet-500 focus:outline-none"
			></textarea>
			<button
				type="submit"
				class="w-full rounded-lg bg-violet-600 py-4 font-bold uppercase tracking-widest transition hover:bg-violet-700"
			>
				Send Inquiry
			</button>
		</form>
	</div>
</section>
