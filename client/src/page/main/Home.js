import React from "react";
import Banner from "../../components/Main/Banner";
import Layout from "../../components/Main/Layout";
import Category from "../../components/Main/Category";

function Home() {
  return (
    <Layout>
      <Banner />
      <div className="w-full">
        <Category />
      </div>
    </Layout>
  );
}

export default Home;
