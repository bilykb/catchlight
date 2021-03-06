import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceGrin,
  faFaceFrown,
  faFaceMeh,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

export default function RatingBar(props) {
  const { interactionStats, handleRatingClick, mediaInteraction } = props;
  const { like_count, dislike_count, meh_count, total_count } =
    interactionStats;

  function getPercentages(count) {
    // return {} to empty bars if percent === 0
    if (total_count === 0) return {};
    return { height: `${(parseInt(count) / parseInt(total_count)) * 100}%` };
  }

  const toggleLike = classNames("mt-2", {
    "like-btn-clicked": mediaInteraction.rating === "like",
    "like-btn": mediaInteraction.rating !== "like",
  });
  const toggleMeh = classNames("mt-2", {
    "meh-btn-clicked": mediaInteraction.rating === "meh",
    "meh-btn": mediaInteraction.rating !== "meh",
  });
  const toggleDislike = classNames("mt-2", {
    "dislike-btn-clicked": mediaInteraction.rating === "dislike",
    "dislike-btn": mediaInteraction.rating !== "dislike",
  });

  return (
    <div className="row-span-2 justify-items-center grid grid-cols-3 min-h-[300px]">
      <div className="like-container">
        <div className="flex items-end h-full bg-searchmain w-full rounded-full">
          <div
            className="rounded-b-full rounded-t-full bg-green-300 w-full"
            style={getPercentages(like_count)}
          ></div>
        </div>
        <button>
          <FontAwesomeIcon
            onClick={() => {
              handleRatingClick("like");
            }}
            className={toggleLike}
            icon={faFaceGrin}
          />{" "}
        </button>
      </div>

      <div className="meh-container">
        <div className="flex items-end h-full mr-2 bg-searchmain rounded-full w-full">
          <div
            className={`rounded-b-full rounded-t-full bg-amber-300 w-full`}
            style={getPercentages(meh_count)}
          ></div>
        </div>
        <button>
          <FontAwesomeIcon
            onClick={() => {
              handleRatingClick("meh");
            }}
            className={toggleMeh}
            icon={faFaceMeh}
          />{" "}
        </button>
      </div>
      <div className="dislike-container">
        <div className="flex items-end h-full bg-searchmain rounded-full w-full">
          <div
            className={"rounded-b-full rounded-t-full bg-red-400 w-full"}
            style={getPercentages(dislike_count)}
          ></div>
        </div>
        <button>
          <FontAwesomeIcon
            onClick={() => {
              handleRatingClick("dislike");
            }}
            className={toggleDislike}
            icon={faFaceFrown}
          />{" "}
        </button>
      </div>
    </div>
  );
}
