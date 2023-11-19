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

	return {
		languages,
		lang,
		path,
		pathname: url.pathname
	}
}