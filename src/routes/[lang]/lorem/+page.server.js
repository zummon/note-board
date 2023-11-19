export const prerender = true

export async function load({ params }){
	const markdown = await import(`../../../lib/content/lorem/${params.lang}.md`)
	let content = markdown.default;
	let metadata = markdown.metadata;

	return { meta: metadata, content }
}