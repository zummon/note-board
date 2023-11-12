<script>
  import Home from "../lib/Home.svelte"

  export let data
  
</script>

<Home lang={data.lang} dark={data.dark} languages={data.languages} />