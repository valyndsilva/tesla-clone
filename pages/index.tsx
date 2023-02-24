import Head from "next/head";
import {Main } from "../components";

function Home() {
  return (
    <div>
      <Head>
        <title>Tesla Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center">
     
      <Main />
      </div>
    </div>
  );
}

export default Home;
