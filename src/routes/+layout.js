import languages from '../lib/languages.json'

export function load({ url }){

	let [,lang,path] = url.pathname.split('/')
	if (!languages[lang]){
		lang = 'en'
	}
	if (!path){
		path = ''
	}

	return {
		pathname: url.pathname,
		languages,
		lang,
		path,
	}
}