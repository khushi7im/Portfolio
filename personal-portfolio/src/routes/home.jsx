import { React } from "react";
import Navbar from "../components/nav";
import HomeContent from "../components/homeContent";
import Footer from "../components/footer";
import Projects from "../components/projects";

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeContent />
      <Footer />
    </>
  );
};
export default Home;
