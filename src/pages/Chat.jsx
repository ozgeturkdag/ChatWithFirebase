import {
  addDoc,
  collection,
  onSnapshot,
  serverTimestamp,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { auth, db } from "../firebase/config";
import { useEffect, useState } from "react";
import Message from "./../components/Message";

const Chat = ({ room, setRoom }) => {
  const messagesCol = collection(db, "messages");
  const [messages, setMessages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const text = e.target[0].value;

    await addDoc(messagesCol, {
      text,
      room,
      user: {
        name: auth.currentUser.displayName,
        photo: auth.currentUser.photoURL,
        uid: auth.currentUser.uid,
      },
      createdAt: serverTimestamp(),
    });
  };

  useEffect(() => {
    const queryOptions = query(
      messagesCol,
      where("room", "==", room),
      orderBy("createdAt", "asc")
    );

    onSnapshot(queryOptions, (snapshot) => {
      let tempMessages = [];

      snapshot.docs.forEach((doc) =>
        tempMessages.push({ id: doc.id, ...doc.data() })
      );
      setMessages(tempMessages);
    });
  }, []);

  return (
    <div className="chat">
      <header>
        <p className="user">{auth?.currentUser?.displayName}</p>
        <p>{room}</p>
        <button onClick={() => setRoom(null)}>Different Room</button>
      </header>

      <main>
        {messages?.map((msg) => (
          <Message key={msg.id} msg={msg} />
        ))}
      </main>

      <form onSubmit={handleSubmit}>
        <input required type="text" placeholder="Your message..." />
        <button>Send</button>
      </form>
    </div>
  );
};

export default Chat;
