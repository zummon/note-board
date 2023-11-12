export const prerender = true

export async function load({ params }){

	return {lang: params.lang}
}