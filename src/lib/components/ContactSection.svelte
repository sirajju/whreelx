<script>
	const whatsappNumber = '918301973623';
	const defaultMessage = "Hi Whreelx, I'd like to discuss a project.";
	const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;
</script>

<section id="contact" class="mx-auto max-w-7xl px-6 py-24">
	<div class="grid gap-16 md:grid-cols-2">
		<div>
			<h2 class="mb-6 text-4xl font-bold">Let's Talk Business</h2>
			<p class="mb-8 leading-relaxed text-gray-400">
				Message us on WhatsApp and we'll reply within moments.
			</p>
			<div class="space-y-6">
				<div class="flex items-center gap-4">
					<div class="glass flex h-10 w-10 items-center justify-center rounded-full text-green-400">
						<i data-lucide="message-circle" class="w-5"></i>
					</div>
					<a
						href={whatsappLink}
						target="_blank"
						rel="noreferrer"
						class="text-gray-300 transition hover:text-white"
					>
						+91 {whatsappNumber.slice(-10)}
					</a>
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
		<div class="glass space-y-6 rounded-2xl border-white/5 p-8">
			<p class="text-sm leading-relaxed text-gray-300">
				Tap below to open a WhatsApp chat with our production lead. Share your vision and we'll tailor a plan on the spot.
			</p>
			<a
				href={whatsappLink}
				target="_blank"
				rel="noreferrer"
				class="flex items-center justify-center gap-3 rounded-lg bg-green-500 py-4 font-bold uppercase tracking-widest text-black transition hover:bg-green-400"
			>
				<i data-lucide="whatsapp" class="w-5" aria-hidden="true"></i>
				Start WhatsApp Chat
			</a>
			<p class="text-xs uppercase tracking-[0.3em] text-zinc-500">
				Available 9am–9pm IST · Response under 15 min
			</p>
		</div>
	</div>
</section>
