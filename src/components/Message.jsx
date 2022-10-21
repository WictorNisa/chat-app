import React from "react";
import { auth } from "../firebase";

const styles = {
  message: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
  text: `px-2 tracking-wide`,
  imageWrapper:`flex -space-x-1 overflow-hidden`,
  image: ` absolute inline-block h-8 w-8 rounded-full ring-2 ring-white `,
  name: `absolute mt-[-4rem] text-gray-600 text-xs`,
  sent: `bg-[#395dff] text-white flex-row-reverse text-end float right rounded-bl-full`,
  received: `bg-[#e5e5ea] text-black float-left rounded-br-full`,
};

const Message = ({ message }) => {
  const user = auth.currentUser;
  const photoUrl = user.photoURL;
  console.log(user.photoUrl);
  const messageClass =
    message.uid === auth.currentUser.uid
      ? `${styles.sent}`
      : `${styles.received}`;

  return (
    <div>
      <div className={`${styles.message} ${messageClass}`}>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={photoUrl} />
        </div>

        <p className={styles.name}>{message.name}</p>
        <p className={styles.text}>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
