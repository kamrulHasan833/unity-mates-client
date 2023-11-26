import HowWebsiteWorks from "../Components/Sections/HowWebsiteWorks";
import PremiumBiodatas from "../Components/Sections/PremiumBiodatas";
import SuccessCounter from "../Components/Sections/SuccessCounter";
const Home = () => {
  console.log("hi");
  return (
    <main>
      <PremiumBiodatas />
      <HowWebsiteWorks />
      <SuccessCounter />
    </main>
  );
};

export default Home;
