export const prerender = true

export async function load({ parent }){
	let { lang, dark, languages } = await parent()

	return { lang, dark, languages }
}