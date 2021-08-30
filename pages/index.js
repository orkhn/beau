import Hero from "components/home/hero/Hero";
import Brands from "components/home/brands/Brands";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Beau | A Beauty for You</title>
      </Head>
      <Hero />
      <Brands />
    </>
  );
};

export default Home;
