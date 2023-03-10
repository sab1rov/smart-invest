import Footer from "../layout/Footer";
import Head from "../layout/Head";
import Header from "../layout/Header";
import HomeMain from "../layout/HomeMain";

export default function Home() {
  return (
    <div className="wrapper">
      <Head />
      <Header />
      <HomeMain />
      <Footer />
    </div>
  );
}
