import styles from '../styles/Home.module.css'
import Homepage from '../components/homepage'
import Title from '../components/Title'
export default function Home({ data }) {
  return (
    <>
    <Title title="Homepage" />
    <Homepage />
    {data.map((post, i) => {
    return (
    <div className="border-b py-5" key={i}>
      <h3 className="text-xl font-bold px-5">{post.title}</h3>
      <p className="text-gray-600 px-5">{post.body}</p>
    </div>
  )}
  )}
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch ("https://jsonplaceholder.typicode.com/posts?_limit=10")
  const data = await res.json()
  return {
    props: {
      data
    }
  }
}
