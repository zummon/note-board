import Home from "../Home"
import languages from '../languages.json'

export async function generateStaticParams() {
  const langs = Object.keys(languages)
 
  return langs.map((item) => ({
    lang: item,
  }))
}

export async function generateMetadata() {
  return {
    title: '',
    description: '',
  }
}

export default Home