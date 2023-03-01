<script lang="ts">
  import type { ActionData, PageData } from "./$types";
  export let data: PageData;
  export let form: ActionData;
</script>

<main class="p-2">
  <h1>Main page</h1>

  <form method="post">
    <input
      type="url"
      name="url"
      class=" rounded-md border border-t-zinc-300 px-3 py-1.5"
    />
    <button
      type="submit"
      class=" rounded bg-indigo-500 px-3 py-1.5 text-white hover:bg-indigo-600"
      >Test</button
    >
  </form>

  <div class=" mt-2 w-96">
    <p>{JSON.stringify(form)}</p>
  </div>
</main>
