import React from "react";
import Header from "../../components/Header";
import TitleBar from "../../components/TitleBar";
import { motion } from "framer-motion";
import PageTrasition from "../../components/PageTrasition";

const Home = () => {
  return (
    <PageTrasition>
      <Header />
      <TitleBar title={""} />
    </PageTrasition>
  );
};

export default Home;
