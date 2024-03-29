
export const trailingSlash = 'always';

export function load({ url }){

	let languages={
		"en": {
			"name": "English",
			"title": "Note Board",
			"theButton": "Enter",
			"content": [
				{
					"title": "Lorem",
					"desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
				},
				{
					"title": "Volup",
					"desc": "Voluptate est vero id, aperiam magni eveniet eius"
				},
				{
					"title": "Asperior",
					"desc": "asperiores amet nam veniam ut ipsum, quam iste"
				},
				{
					"title": "Autem perspicia",
					"desc": "autem perspiciatis minima quibusdam, possimus et."
				}
			],
			"madeBy": "Made by zummon (Teerapat Anantarattanachai)"
		},
		"zh": {
			"name": "中国人",
			"title": "记事板",
			"theButton": "进入",
			"content": [
				{
					"title": "色刈来月",
					"desc": "色刈来月郷連新将用聴作査刊城農東題提温。読並詳高省生将報万力強続強辞点。"
				},
				{
					"title": "話浮紙",
					"desc": "話浮紙究日水能禁必市得健材悩部。道表航集航問馬最川開語早響境。"
				},
				{
					"title": "更伎宿聞権刊石",
					"desc": "更伎宿聞権刊石禁字利追係見徴働文講。高糊試月社覧刊回行委持問話布泣。"
				},
				{
					"title": "読一甘両合",
					"desc": "読一甘両合道福全伝同一夢治。阻数鈴求数風円入口属国意。治骨込井辛品樽新入子加玲。更中切切手流福能金住表料敗見挑景来。"
				}
			],
			"madeBy": "由 ZUMMON 制造"
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