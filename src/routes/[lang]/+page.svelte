<script>
	export let data
	
	let lang=data.lang, dark=data.dark, languages=data.languages

	const { content, theButton, madeBy } = languages[lang]

</script>


<div class="flex-grow flex flex-col items-center sm:items-end mr-2 sm:mr-4 lg:mr-6 text-right">
	<div class="p-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-50 overflow-auto transition-responsive duration-500 ease-in-out shadow hover:shadow-lg focus:shadow-lg group h-20 w-40 hover:w-64 hover:h-64 focus:w-64 focus:h-64 mb-4 sm:mb-8 lg:mb-12 cursor-default" tabIndex="0">
		<h2 class="text-xl truncate group-hover:whitespace-normal group-focus:whitespace-normal">
			{content[0]["title"]}
		</h2>
		<p class="hidden group-hover:block group-focus:block my-2 p-2">
			{content[0]["desc"]}
		</p>
		<a class="hover:bg-gray-900 focus:bg-gray-900 dark:hover:bg-gray-50 dark:focus:bg-gray-50 hover:text-gray-50 focus:text-gray-50 dark:hover:text-gray-900 dark:focus:text-gray-900 shadow hover:shadow-lg focus:shadow-lg hidden group-hover:inline-flex group-focus:inline-flex items-center transition duration-500 ease-in-out px-4 py-2" href={`/${lang}/lorem?dark=${dark}`}>
			<!-- heroicons outline chevron-right -->
			<svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
				<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
			</svg>
			<span class="text-lg font-medium">
				{theButton}
			</span>
		</a>
	</div>

	<div class="p-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-50 overflow-auto transition-responsive duration-500 ease-in-out shadow hover:shadow-lg focus:shadow-lg group h-32 w-24 hover:w-64 hover:h-64 focus:w-64 focus:h-64 mb-4 sm:mb-8 lg:mb-12 cursor-default" tabIndex="0">
		<h2 class="text-xl truncate group-hover:whitespace-normal group-focus:whitespace-normal">
			{content[1]["title"]}
		</h2>
		<p class="hidden group-hover:block group-focus:block my-2 p-2">
			{content[1]["desc"]}
		</p>
	</div>
</div>

<div class="flex-grow flex flex-col items-center sm:items-start ml-2 sm:ml-4 lg:ml-6">
	<div class="p-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-50 overflow-auto transition-responsive duration-500 ease-in-out shadow hover:shadow-lg focus:shadow-lg group h-44 w-28 hover:w-64 hover:h-64 focus:w-64 focus:h-64 mb-4 sm:mb-8 lg:mb-12 cursor-default" tabIndex="0">
		<h2 class="text-xl truncate group-hover:whitespace-normal group-focus:whitespace-normal">
			{content[2]["title"]}
		</h2>
		<p class="hidden group-hover:block group-focus:block my-2 p-2">
			{content[2]["desc"]}
		</p>
		<a class="hover:bg-gray-900 focus:bg-gray-900 dark:hover:bg-gray-50 dark:focus:bg-gray-50 hover:text-gray-50 focus:text-gray-50 dark:hover:text-gray-900 dark:focus:text-gray-900 shadow hover:shadow-lg focus:shadow-lg hidden group-hover:inline-flex group-focus:inline-flex items-center transition duration-500 ease-in-out px-4 py-2" href={`/${lang}/asperior?dark=${dark}`}>
			<!-- heroicons outline chevron-right -->
			<svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
				<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
			</svg>
			<span class="text-lg font-medium">
				{theButton}
			</span>
		</a>
	</div>

	<div class="p-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-50 overflow-auto transition-responsive duration-500 ease-in-out shadow hover:shadow-lg focus:shadow-lg group h-20 w-44 hover:w-64 hover:h-64 focus:w-64 focus:h-64 mb-4 sm:mb-8 lg:mb-12 cursor-default" tabIndex="0">
		<h2 class="text-xl truncate group-hover:whitespace-normal group-focus:whitespace-normal">
			{content[3]["title"]}
		</h2>
		<p class="hidden group-hover:block group-focus:block my-2 p-2">
			{content[3]["desc"]}
		</p>
		<p class="hidden group-hover:block group-focus:block p-2">{madeBy}</p>
	</div>
</div>

