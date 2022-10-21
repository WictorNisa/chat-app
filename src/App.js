import react from "react";
import Navbar from "./components/Navbar";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Chat from "./components/Chat";

const styles = {
  appContainer: `max-w-[728px] mx-auto text-center`,
  sectionContainer: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`,
};

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className={styles.appContainer}>
      <section className={styles.sectionContainer}>
        {/* Navbar */}
        <Navbar />
        {/* Chat Component */}
        {user ? <Chat /> : <p>Sign in to start chatting :)</p>}
      </section>
    </div>
  );
}

export default App;
