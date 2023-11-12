<script>
	export let data

</script>

<div className="p-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-50 overflow-auto shadow max-w-3xl duration-500 transition">
	<h1 className="text-3xl font-bold dark:text-white mb-4">
		{data.data.headline}
	</h1>
	<div className="">
		{@html data.content}
	</div>
</div>
