import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import ChatContent from "./ChatContent";
import classNames from "classnames";


export default function ChatBox() {

  const [selected, setSelected] = useState(false)

  function toggleChat() {
    setSelected(!selected)
  };

  const toggleWidth = classNames("flex absolute right-0 h-full shadow-md bg-white drop-shadow-md z-50", {"w-1/4": selected, "": !selected});
  const rotateArrow = classNames("w-10 h-10 -left-3 text-black", {"": selected, "rotate-180": !selected});

  return (
    <div className={toggleWidth}>
      <ChatContent selected={selected}/>
      <button onClick={()=> toggleChat()} className="flex items-center bg-gray-200">
        <FontAwesomeIcon className={rotateArrow} icon={faArrowRight} />
      </button>
    </div>
  );
}
