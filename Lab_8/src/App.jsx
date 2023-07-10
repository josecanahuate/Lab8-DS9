import Navbar from "./components/Navbar";
import MainBanner from "./components/IndexView/MainBanner";
import Features from "./components/IndexView/Features";
import Counter from "./components/IndexView/Counter";
import Jobs from "./components/IndexView/Jobs";
import Testimonial from "./components/IndexView/Testimonial";
import Pricind from "./components/IndexView/Pricind";
import MemberCard from "./components/IndexView/MemberCard";
import NewsLetter from "./components/IndexView/NewsLetter";
import Footer from "./components/Footer";
import { Helmet } from "react-helmet"

function App() {
  return (
    <>
    <Helmet>
        <script
          src="/js/main.js"
          async
        ></script>
        <script
          src="/js/bootsnav.js"
          async
        ></script>
      </Helmet>
      <Navbar />
      <MainBanner />
      <Features />
      <Counter />
      <Jobs />
      <Testimonial />
      <Pricind />
      <MemberCard />
      <NewsLetter />
      <Footer />

    </>
  );
}

export default App;
