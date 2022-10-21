import { onSnapshot, orderBy, query, collection } from "@firebase/firestore";
import { db } from "../firebase";
import React, { useState, useEffect, useRef } from "react";
import Message from "./Message";
import SendMessage from "./SendMessage";

const styles = {
  main: `flex flex-col p-[10px] relative`,
};

const Chat = () => {
  const scroll = useRef();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <main className={styles.main}>
        {/* Chat Message Component */}
        {messages &&
          messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
      </main>
      {/* Send Message Component */}
      <SendMessage scroll={scroll}/>
      <span ref={scroll}></span>
    </>
  );
};

export default Chat;
