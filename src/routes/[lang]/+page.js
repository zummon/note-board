export const prerender = true

export async function load({ parent }){
	let { lang } = await parent()

	return { lang }
}