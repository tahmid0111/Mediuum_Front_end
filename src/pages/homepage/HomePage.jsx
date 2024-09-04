import Hero from "../../components/homepage/hero/Hero";
import Trending from "../../components/homepage/trending/Trending";
import HomePageLayout from "../../layout/HomePageLayout";

const HomePage = () => {
  return (
    <HomePageLayout>
      <Hero />
      <Trending />
    </HomePageLayout>
  );
};

export default HomePage;
