import { CgProfile } from "react-icons/cg";
import { ImProfile } from "react-icons/im";
import {
  MdOutlineContactMail,
  MdOutlineContactPhone,
  MdOutlineExplore,
  MdOutlineWorkspacePremium,
} from "react-icons/md";
import SectionHeader from "../Shared/SectionHeader";
import SectionWrapper from "../Shared/SectionWrapper";
import Work from "../Shared/Work";

const works = [
  {
    id: 1,
    icon: <ImProfile />,
    title: "Create Profile",
    description:
      "Every user needs to create a profile to use the website. Then users have to find the biodata of others. Create your profile to showcase your information, interests, and preferences.",
    btn_text: "create profile",
    path: "/create-profile",
    "btn-text": "Create Profile",
  },
  {
    id: 2,
    icon: <CgProfile />,
    title: "Add Biodata",
    description:
      "Add your biodata with essential details. Share your personal information, educational background, and work experience to provide a comprehensive overview of yourself.",
    btn_text: "add biodata",
    path: "/add-biodata",
    "btn-text": "Add Biodata",
  },
  {
    id: 3,
    icon: <MdOutlineExplore />,
    title: "Explore Biodata",
    description:
      "Discover and explore biodata from a diverse community. Find matches, connect with like-minded individuals, and explore potential connections based on shared interests.",
    btn_text: "explore biodata",
    path: "/explore-biodata",
    "btn-text": "Explore Biodata",
  },
  {
    id: 4,
    icon: <MdOutlineContactPhone />,
    title: "Contact Request",
    description:
      "Initiate contact by sending requests to individuals who catch your interest. Express your interest and start a conversation to get to know each other better.",
    btn_text: "choose favourite",
    path: "/contact-request",
    "btn-text": "Send Request",
  },
  {
    id: 5,
    icon: <MdOutlineWorkspacePremium />,
    title: "Premium Request",
    description:
      "Upgrade to premium services for enhanced features and benefits. Unlock exclusive privileges to optimize your experience and increase your chances of finding meaningful connections.",
    btn_text: "view biodata",
    path: "/premium-request",
    "btn-text": "Upgrade Now",
  },
  {
    id: 6,
    icon: <MdOutlineContactMail />,
    title: "Contact Us",
    description:
      "Reach out to us for any inquiries or assistance. Our dedicated support team is here to help you. Feel free to contact us with your questions or feedback.",
    btn_text: "contact us",
    path: "/contact-us",
    "btn-text": "Contact Us",
  },
];

const HowWebsiteWorks = () => {
  return (
    <section>
      <SectionWrapper>
        <SectionHeader
          title="How Website works"
          subtitle="Working process of this website"
        ></SectionHeader>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {works.map((work) => (
            <Work key={work.id} work={work} />
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
};

export default HowWebsiteWorks;
