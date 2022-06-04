import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import styles from "../../styles/Users.module.css";

interface UsersProps {
  dataUsers: Array<any>;
}

export default function Users(props: UsersProps) {
  const { dataUsers } = props;
  const router = useRouter();

  console.log(dataUsers);
  return (
    <>
      <Layout pageTitle="Users Page">
        <div className="title">Users Detail</div>
        <div className="desc">
          In this page i learn and use Dynamic Route, Fetch API, Data Fetching
          getStaticProps and getStaticPaths
        </div>
        {dataUsers.map((user) => {
          return (
            <div
              key={user.id}
              onClick={() => router.push(`/users/${user.id}`)}
              className={styles.card}
            >
              <p>{user.name}</p>
              <p>{user.email}</p>
            </div>
          );
        })}
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();
  return {
    props: {
      dataUsers,
    },
  };
}