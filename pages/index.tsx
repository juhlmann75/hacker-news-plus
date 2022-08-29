import type { NextPage } from 'next'
import Layout from "../components/layout";
import TopStories from "../components/topStories";

const Home: NextPage = () => {
  return (
      <div>
          <Layout home>
            <TopStories />
          </Layout>
      </div>
  )
}

export default Home
