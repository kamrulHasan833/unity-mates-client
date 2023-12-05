import SuccessCounter from "../Components/Sections/SuccessCounter";
import SuccessStories from "../Components/Sections/SuccessStories";
import SectionHeader from "../Components/Shared/SectionHeader";
import SectionWrapper from "../Components/Shared/SectionWrapper";
import Title from "../Components/Shared/Title";
const About = () => {
  return (
    <section className="mb-14 md:mb-20">
      <Title title="About" />
      <SectionWrapper>
        <SectionHeader title="about Us" />
        <div>
          <img
            src="https://unity-mates-server.vercel.app/images/slider-2.jpg"
            alt=""
          />
          <p className="text-desc-color text-justify ">
            Unity Mates, a premier matrimony website, pioneers modern
            matchmaking, bringing together individuals in search of life
            partners in a seamless digital environment. At Unity Mates, members
            create comprehensive profiles, detailing personal attributes,
            preferences, and aspirations, enhancing the matchmaking process.
            This platform employs cutting-edge algorithms that analyze user data
            to intelligently suggest compatible matches, streamlining the search
            for a lifelong companion. Unity Mates stands out with its
            user-friendly interface, empowering members to navigate and explore
            potential matches effortlessly. The platform prioritizes privacy and
            authenticity, providing a secure space for individuals to interact
            and build connections. Bridging geographical gaps, Unity Mates
            caters to diverse communities and cultures, fostering inclusivity in
            the quest
          </p>
        </div>
        <SuccessCounter />
        <SuccessStories />
      </SectionWrapper>
    </section>
  );
};

export default About;
