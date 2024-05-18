
export const trailingSlash = 'always';

export function load({ url, params }){

	let languages={
		"en": {
			"name": "English",
		},
		"zh": {
			"name": "中国人",
		}
	}

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