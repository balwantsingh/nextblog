import Title from '../components/Title'
export default function Blog({ data }) {
    return (
        <>
            <Title title="Blog" />
            <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
            <h1 className="text-3xl font-bold">Blogs</h1>
            {data.map((post, i) => {
    return (
        
    <div className="border-b py-5" key={i}>
      <h3 className="text-2xl font-bold">{post.title}</h3>
      <p className="text-gray-600 my-4 font-normal leading-8 text-xl">{post.body}</p>
    </div>
    
  )}
  )}
  </div>
        </>
    )
}

export async function getStaticProps() {
    const res = await fetch ("https://jsonplaceholder.typicode.com/posts?_limit=20")
    const data = await res.json()
    return {
      props: {
        data
      }
    }
  }