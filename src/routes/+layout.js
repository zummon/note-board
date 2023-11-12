import languages from '../lib/languages.json'

export const trailingSlash = 'always';

export function load({ url }){

	let [,lang,path] = url.pathname.split('/')
	if (!languages[lang]){
		lang = 'en'
	}
	if (!path){
		path = ''
	}

	// let searchParams = url.searchParams 
	let dark = false //searchParams.get('dark') == 'true'

	return {
		languages,
		lang,
		path,
		dark
	}
}