<script>
	import Sidebar from '$lib/components/layout/Sidebar.svelte';
</script>

<section class="h-screen max-h-screen flex">
	<Sidebar />
	<main class="flex-1 bg-red-500">
		<slot />
	</main>
</section>
