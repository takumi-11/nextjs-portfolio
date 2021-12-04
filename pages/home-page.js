import React from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import Skills from "../components/Skills";
import UrlLink from "../components/UrlLink";

const Home = () => {
  return (
    <Layout title="Profile">
      <div className="bg-white text-center shadow-xl p-8 w-2/5 rounded">
        <div className="mt-4">
          <p className="font-bold text-2xl">Profile</p>
        </div>
        <div className="flex justify-center mt-4">
          <Image
            className="rounded rounded-3xl"
            src="/tora.jpeg"
            width={70}
            height={70}
            alt="Avatar"
          />
        </div>
        <div className="mt-4">
          <p className="font-bold text-1xl mb-1">Skills</p>
          <Skills />
          <p className="mt-4 font-bold text-1xl">2002/11/9 : 安江拓海(19)</p>
          <div className="mt-1">
              <p>プログラミング学習スタート : 2021/05/上期</p>
              <p>スクールの仮想インターンというものでReact, Typescriptを使っていました。</p>
              <p>今後学びたいもの : </p>
          </div>
        </div>
        <UrlLink />
      </div>
    </Layout>
  );
};

export default Home;
