<script lang="ts">
	export let type: string;
</script>

<div class="flex flex-col gap-3  w-full">
	<h1 class=" text-lg md:text-2xl text-zinc-800 dark:text-zinc-100">
		{#if type == 'login'}
			Welcome back
		{:else}
			Get Started
		{/if}
	</h1>
	<p>Login or signup</p>
</div>
