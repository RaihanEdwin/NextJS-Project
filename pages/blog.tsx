import Layout from "../components/Layout";
import styles from "../styles/Blog.module.css";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface BlogProps {
  dataBlog: Post[];
}

export default function Blog(props: BlogProps) {
  const { dataBlog } = props;
  return (
    <>
      <Layout pageTitle="Blog Page">
        <div className="title">Blog Page</div>
        <div className="desc">
          In this page i learn and use Fetch API, Data Fetching
          getServerSideProps
        </div>
        {dataBlog.map((blog) => (
          <div key={blog.id} className={styles.card}>
            <h3>{blog.title}</h3>
            <p>{blog.body}</p>
          </div>
        ))}
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const dataBlog = await res.json();
  return {
    props: {
      dataBlog,
    },
  };
}
