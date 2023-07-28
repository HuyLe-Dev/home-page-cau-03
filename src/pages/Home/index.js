import React from "react";
import Footer from "../../components/Footer";
import Feature from "./Body/Feature";
import Post from "./Body/Post";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <div className="py-10 bg-white">
        <header className="xl:mx-[80px] sm:mx-[50px] sm:h-[840px] h-[440px]  mt-7">
          <Header />
        </header>
        <section className="w-full">
          <Feature />
          <Post />
        </section>

        <div className="relative max-w-7xl mx-auto px-4">
          <hr className="border-gray-600" />
          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    </>
  );
};

export default Home;
