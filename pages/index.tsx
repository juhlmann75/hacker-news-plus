import Layout from "../components/layout";
import TopStories from "../components/topStories";

export default function Home(props: { data: string[]; }) {
    return (
        <div>
            <Layout home>
                <TopStories data={props.data}/>
            </Layout>
        </div>
    );
}

export async function getServerSideProps() {
    const data = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
        .then((res) => res.json());

    return {
        props: { data }
    };
}
