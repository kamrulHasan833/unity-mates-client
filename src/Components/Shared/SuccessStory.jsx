/* eslint-disable react/prop-types */
import { Rating } from "@smastrom/react-rating";
import moment from "moment";
import PropTypes from "prop-types";

import "@smastrom/react-rating/style.css";
import { useState } from "react";

const SuccessStory = ({ successStory }) => {
  const { couple_image, marriage_date, success_story, reviews } = successStory;
  //   const mad = moment(marriage_date).format("YYYY-MM-DD HH:mm:ss");

  const formattedDate = moment(marriage_date).format("MMM DD, yyy");

  const [rating, setRating] = useState(reviews);
  return (
    <div className="pb-6 md:pb-10">
      <div>
        <img src={couple_image} alt="" />
      </div>
      <div className="pt-4 space-y-1">
        <div className="flex items-center">
          {" "}
          <Rating
            style={{ maxWidth: 120 }}
            value={rating}
            isRequired
            onChange={setRating}
          />
          <span>({reviews}reviews)</span>
        </div>
        <p className="font-medium ">
          Marriage Date: <span className="font-normal">{formattedDate}</span>
        </p>

        <p className="font-medium ">
          Success Story: <span className="font-normal">{success_story}</span>
        </p>
      </div>
    </div>
  );
};

SuccessStory.propTypes = {
  successStory: PropTypes.object,
};

export default SuccessStory;
