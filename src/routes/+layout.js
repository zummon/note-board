
export function load({ url, params }){

	let languages={
		"en": {
			"name": "English",
		},
		"zh": {
			"name": "中国人",
		}
	}

	lang = params.lang
	
	if (!languages[lang]){
		lang = 'en'
	}

	return {
		languages,
		lang,
		path,
		pathname: url.pathname
	}
}