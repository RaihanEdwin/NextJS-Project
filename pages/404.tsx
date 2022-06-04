import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <>
      <div className="container404">
        <div className="page404">404 This page could not be found.</div>
      </div>
    </>
  );
}
