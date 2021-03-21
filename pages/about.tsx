import Link from 'next/link'
import Layout from '../components/Layout'

const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>

    <style jsx global>
      {
        `
        h1{
          color:red
        }
        p{
          background:blue
        }
        `
      }
    </style>
  </Layout>
)

export default AboutPage
