import {marked} from 'marked';
import parse from 'html-react-parser';

const Postitem = ({post}) => {

  return (

      <article className="container max-w-3xl px-4 sm:px-6 xl:max-w-4xl xl:px-0">
          <h1 className='font-poppins font-bold text-4xl'>{post.data.attributes.title}</h1>
          <div>
          {post.data.attributes.content && (parse(marked.parse(post.data.attributes.content)))}
          </div>
      </article>

  )
}

export async function getServerSideProps({params}) {
  const data = await fetch(`https://strapi-production-714e.up.railway.app/api/posts/${params.id}`);
  const post = await data.json();
  console.log(post);
  return { props: { post } }
}

export default Postitem