import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import SectionHeader from "../Components/Shared/SectionHeader";
import SectionWrapper from "../Components/Shared/SectionWrapper";

import Title from "../Components/Shared/Title";
import Signin from "./Signin";

const ContactUs = () => {
  return (
    <section className="mb-14 md:mb-20">
      <Title title="Contact Us" />
      <SectionWrapper>
        <SectionHeader title="Contact Us" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 md:mb-14">
          <div>
            {" "}
            <img
              src="https://i.ibb.co/7yg2mxw/biodata7.jpg"
              alt=""
              className="w-full"
            />
          </div>
          <div>
            {" "}
            <h3 className="text-xl md:2xl font-bold pb-2">
              Adam Jones <span>(Admin)</span>
            </h3>
            <p className="text-desc-color text-justify ">
              Unity Mates, a premier matrimony website, pioneers modern
              matchmaking, bringing together individuals in search of life
              partners in a seamless digital environment. At Unity Mates,
              members create comprehensive profiles, detailing personal
            </p>
            <p className="text-desc-color mt-2">
              <span className="font-medium ">Phone:</span> +99867763746
            </p>
            <p className="text-desc-color mt-2">
              <span className="font-medium ">Gmail:</span> adamjhone@gmail.com
            </p>
            <div className="flex gap-3 text-3xl text-blue-800 pt-3">
              <FaFacebookF />
              <FaLinkedinIn />
              <FaTwitter />
              <FaInstagram />
            </div>
          </div>
        </div>
        <Signin></Signin>
      </SectionWrapper>
    </section>
  );
};

export default ContactUs;
