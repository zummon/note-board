export async function generateStaticParams() {
  const langs = ['en','zh']
 
  return langs.map((item) => ({
    lang: item,
  }))
}

export default function({ params }){
	return <>{params.lang}</>
}