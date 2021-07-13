import {useRouter} from 'next/router'
import Link from 'next/link';
import {server} from '../../../config/index'
import Meta from '../../../components/Meta'
import { articles } from '../../../data';

const article = ({article}) => {
    //const router = useRouter()
    //const {id} = router.query;
    console.log("----",articles);
    return (
    <>
    <Meta title={article.title} description={articles.excerpt}/>
        <h1>This is an article {article.title}</h1>
        <p>{article.body}</p>
        <br />
        <Link href='/'>Go Back</Link>
    </>
    )
}

export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/articles/${context.params.id}`)
    const article = await res.json();

    return {
        props: {
            article
        }
    }
}

export const getStaticPaths = async () =>{
    const res = await fetch(`${server}/api/articles/`)
    const article = await res.json();
    const ids = article.map(item=> item.id)
    const paths = ids.map(id => (
        {
            params: {id: id.toString()}
        }
    ))
    return {
        paths,
        fallback:false
    }
}

/*export const getStaticProps = async (context) => {
    const res = await fetch(`http://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const article = await res.json();

    return {
        props: {
            article
        }
    }
}

export const getStaticPaths = async () =>{
    const res = await fetch(`http://jsonplaceholder.typicode.com/posts`)
    const article = await res.json();
    const ids = article.map(item=> item.id)
    const paths = ids.map(id => (
        {
            params: {id: id.toString()}
        }
    ))
    return {
        paths,
        fallback:false
    }
}*/

export default article;