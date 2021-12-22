import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Load from "../components/Load";
import Main from "../components/Main";
import MobileNavigation from "../components/Navigation/MobileNavigation";

export default function Home() {
  return (
    <Layout>
      <Load />
      <Main />

      <Footer />
    </Layout>
  );
}
