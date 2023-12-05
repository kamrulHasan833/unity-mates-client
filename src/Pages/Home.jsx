import HowWebsiteWorks from "../Components/Sections/HowWebsiteWorks";
import PremiumBiodatas from "../Components/Sections/PremiumBiodatas";
import SuccessCounter from "../Components/Sections/SuccessCounter";
import SuccessStories from "../Components/Sections/SuccessStories";
import Title from "../Components/Shared/Title";
const Home = () => {
  return (
    <main>
      <Title title="Home" />
      <PremiumBiodatas />
      <HowWebsiteWorks />
      <SuccessCounter />
      <SuccessStories />
    </main>
  );
};

export default Home;
