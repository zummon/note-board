import matter from 'gray-matter';
import fs from 'fs'

export async function generateStaticParams() {
  const langs = ['en','zh']
 
  return langs.map((item) => ({
    lang: item,
  }))
}

export async function generateMetadata({ params }) {
	const str = fs.readFileSync(`./app/[lang]/lorem/${params.lang}.md`)
	const md = matter(str)

  return {
    title: md.data.headline,
    description: '',
  }
}

export default function({ params }){
	const str = fs.readFileSync(`./app/[lang]/lorem/${params.lang}.md`)
	const md = matter(str)

	return <>
		<div className="p-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-50 overflow-auto shadow max-w-3xl duration-500 transition">
			<h1 className="text-3xl font-bold dark:text-white mb-4">
				{md.data.headline}
			</h1>
			<div className="" dangerouslySetInnerHTML={{ __html: md.content }}></div>
		</div>
	</>
}