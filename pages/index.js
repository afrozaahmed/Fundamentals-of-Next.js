import Article from '../components/ArticleList';
import {server} from '../config'

export default function Home({articles}) {
  return (
    <div>
        <Article articles={articles}/>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json();
  return {
    props: {
      articles
    }
}
}

/*export const getStaticProps = async () => {
  const res = await fetch('http://jsonplaceholder.typicode.com/posts?_limit=6')
  const articles = await res.json();
  return {
    props: {
      articles
    }
}
}*/
