import ModalChat from "@/components/chatbot/ModalChat";
import Profile from "@/components/home/Profile";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="max-w-screen-xl self-stretch m-auto w-full">
      <Navbar></Navbar>
      <article className="px-6 sm:px-12 py-6">
        <Profile></Profile>
      </article>
      <ModalChat></ModalChat>
    </main>
  );
}
