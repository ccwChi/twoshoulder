import { motion } from "framer-motion";
import Home from "../../asset/icons/Home";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import TitleBar from "../../components/TitleBar";
import FeedRecordContain from "./FeedRecordContain";
import HomeButton from "../../components/HomeButton";
import PageTrasition from "../../components/PageTrasition";

const FeedRecord = () => {
  return (
    <PageTrasition>
      <Header />
      <TitleBar title={"餵養紀錄"} />
      <SearchBar />
      <FeedRecordContain />
      <HomeButton />
    </PageTrasition>
  );
};

export default FeedRecord;
