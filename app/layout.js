'use client'

import './globals.css'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import languages from './languages.json'

export default function RootLayout({ children }) {
	const router = useRouter()
	const pathname = usePathname()
	const searchParams = useSearchParams()

  const dark = searchParams.get('dark') == 'true'
  const lang = pathname.slice(1)
  const { content, ...language } = languages[lang]

  return (
    <html lang={lang} className={dark ? 'dark' : ''}>
      <head>
        <title>Note Board</title>
      </head>
      <body className="">

<div className="flex flex-col items-center min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-400 dark:text-gray-500 font-medium duration-500">
	<div className="flex flex-wrap ml-auto p-4">
		<label className="flex items-center cursor-pointer bg-white dark:bg-gray-800 shadow hover:shadow-lg focus:shadow-lg py-1 px-3 rounded-3xl transition-responsive duration-500 ease-in-out mr-4">
			{/* heroicons Solid moon */}
			<svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
				<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
			</svg>
			<input className="" type="checkbox" hidden={true} checked={dark} onChange={(e) => {
				router.replace(`${pathname}?dark=${e.target.checked}`,{ scroll: false })
			}} />
		</label>
		<label className="flex items-center cursor-pointer bg-white dark:bg-gray-800 shadow hover:shadow-lg focus:shadow-lg py-1 px-3 rounded-3xl transition-responsive duration-500 ease-in-out">
			 {/* heroicons Solid globe  */}
			<svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
				<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
			</svg>
			<select className="text-lg bg-transparent font-medium cursor-pointer border-0" value={lang} onChange={(e) => {
				router.push(`/${e.target.value}?dark=${dark}`,{ scroll: false })
			}}>
				{Object.entries(languages).map(([locale, {name}], index) => {
					return <option key={`set-lang-${index}`} value={locale}>{name}</option>
				})}
			</select>
		</label>
		<input type="checkbox" hidden={true} />
	</div>

	<div className="flex-grow flex flex-wrap items-center">
		<div className="flex-grow flex flex-col items-center sm:items-end mr-2 sm:mr-4 lg:mr-6 text-right">
			<div className="p-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-50 overflow-auto transition-responsive duration-500 ease-in-out shadow hover:shadow-lg focus:shadow-lg group h-20 w-40 hover:w-64 hover:h-64 focus:w-64 focus:h-64 mb-4 sm:mb-8 lg:mb-12 cursor-default" tabIndex="0">
				<h2 className="text-xl truncate group-hover:whitespace-normal group-focus:whitespace-normal">
					{content[0]["title"]}
				</h2>
				<p className="hidden group-hover:block group-focus:block my-2 p-2">
          {content[0]["desc"]}
				</p>
				<a className="hover:bg-gray-900 focus:bg-gray-900 dark:hover:bg-gray-50 dark:focus:bg-gray-50 hover:text-gray-50 focus:text-gray-50 dark:hover:text-gray-900 dark:focus:text-gray-900 shadow hover:shadow-lg focus:shadow-lg hidden group-hover:inline-flex group-focus:inline-flex items-center transition duration-500 ease-in-out px-4 py-2" href="#">
					{/* heroicons outline chevron-right */}
					<svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
					</svg>
					<span className="text-lg font-medium">
            {language["theButton"]}
					</span>
				</a>
			</div>

			<div className="p-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-50 overflow-auto transition-responsive duration-500 ease-in-out shadow hover:shadow-lg focus:shadow-lg group h-32 w-24 hover:w-64 hover:h-64 focus:w-64 focus:h-64 mb-4 sm:mb-8 lg:mb-12 cursor-default" tabIndex="0">
				<h2 className="text-xl truncate group-hover:whitespace-normal group-focus:whitespace-normal">
					{content[1]["title"]}
				</h2>
				<p className="hidden group-hover:block group-focus:block my-2 p-2">
					{content[1]["desc"]}
				</p>
			</div>
		</div>

		<div className="flex-grow flex flex-col items-center sm:items-start ml-2 sm:ml-4 lg:ml-6">
			<div className="p-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-50 overflow-auto transition-responsive duration-500 ease-in-out shadow hover:shadow-lg focus:shadow-lg group h-44 w-28 hover:w-64 hover:h-64 focus:w-64 focus:h-64 mb-4 sm:mb-8 lg:mb-12 cursor-default" tabIndex="0">
				<h2 className="text-xl truncate group-hover:whitespace-normal group-focus:whitespace-normal">
					{content[2]["title"]}
				</h2>
				<p className="hidden group-hover:block group-focus:block my-2 p-2">
					{content[2]["desc"]}
				</p>
				<a className="hover:bg-gray-900 focus:bg-gray-900 dark:hover:bg-gray-50 dark:focus:bg-gray-50 hover:text-gray-50 focus:text-gray-50 dark:hover:text-gray-900 dark:focus:text-gray-900 shadow hover:shadow-lg focus:shadow-lg hidden group-hover:inline-flex group-focus:inline-flex items-center transition duration-500 ease-in-out px-4 py-2" href="#">
					{/* heroicons outline chevron-right */}
					<svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
					</svg>
					<span className="text-lg font-medium">
            {language["theButton"]}
					</span>
				</a>
			</div>

			<div className="p-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-50 overflow-auto transition-responsive duration-500 ease-in-out shadow hover:shadow-lg focus:shadow-lg group h-20 w-44 hover:w-64 hover:h-64 focus:w-64 focus:h-64 mb-4 sm:mb-8 lg:mb-12 cursor-default" tabIndex="0">
				<h2 className="text-xl truncate group-hover:whitespace-normal group-focus:whitespace-normal">
					{content[3]["title"]}
				</h2>
				<p className="hidden group-hover:block group-focus:block my-2 p-2">
					{content[3]["desc"]}
				</p>
				<p className="hidden group-hover:block group-focus:block mt-4">{language["madeBy"]}</p>
			</div>
		</div>
	</div>

	<div className="flex flex-wrap mr-auto p-4">
		<a className="hover:opacity-60" href="#">
			{/* Facebook  */}
			<svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
				<path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
			</svg>
		</a>
		<a className="hover:opacity-60 ml-6" href="#">
			{/* Twitter  */}
			<svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
				<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
			</svg>
		</a>
		<a className="hover:opacity-60 ml-6" href="#">
			{/* GitHub  */}
			<svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
				<path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
			</svg>
		</a>
		<a className="hover:opacity-60 ml-6" href="#">
			{/* Instagram */}
			<svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
				<path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
			</svg>
		</a>
	</div>
</div>

        {children}

      </body>
    </html>
  )
}
