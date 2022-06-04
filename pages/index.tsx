import Layout from "../components/Layout";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Layout pageTitle="Home Page">
        <Image
          src="/profile.jpg"
          width={200}
          height={200}
          className="profileImg"
          alt="profile"
        />
        <div className="title">Welcome to my Next JS Project</div>
        <div className="desc">
          This is my first Next JS Project. Make a simple Website with
          TypeScript, basic routing, move to another page with Link, Code
          Spliting and PreFetching, learn and use Global CSS and CSS Module,
          make the Header and Footer inside the Layout Page, Custom 404 Page
          and back to home page after 3 second, and make a Meta Data.
        </div>
      </Layout>
    </>
  );
}
