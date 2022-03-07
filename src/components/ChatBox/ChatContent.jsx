import FriendTabGroup from "./FriendTabGroup";
import FriendConversations from "./FriendConversations";
import { useState } from "react";
import classNames from "classnames";

export default function ChatContent(props) {
  const [activeFriend, setActiveFriend] = useState(null);
  const { isOpen, topicRefresh } = props;
  const [topicSelected, setTopicSelected] = useState(null);

  const topicOnClick = (topicIndex) => {
    setTopicSelected(topicIndex);
  };
  const activeFriendClick = (friendId) => {
    setActiveFriend(friendId);
  };

  const toggleChat = classNames("flex w-full", {
    "": isOpen,
    "invisible chatlg:visible": !isOpen,
  });

  // set the state of activeFriend to the userId on click, if the activeFriend userId === the friend tab userId.  Pass activeFriend down to friend conversations, and that's the conversation you show

  return (
    <div className={toggleChat}>
      <FriendTabGroup
        activeFriend={activeFriend}
        activeFriendClick={activeFriendClick}
      />
      <FriendConversations
        topicRefresh={topicRefresh}
        activeFriend={activeFriend}
        isOpen={isOpen}
        topicOnClick={topicOnClick}
        topicSelected={topicSelected}
      />
    </div>
  );
}
