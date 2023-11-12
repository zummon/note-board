import matter from 'gray-matter';

export const prerender = true

export async function load({ params }){
	const str = await import(`../../../lib/content/lorem/${params.lang}.md`)
	const md = matter(str.default)

	return {...md}
}