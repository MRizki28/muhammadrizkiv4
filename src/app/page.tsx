import ModalChat from "@/components/chatbot/ModalChat";
import ProfileClient from "@/components/home/ProfileClient";
import Navbar from "@/components/Navbar";

export const revalidate = 60;

export default function Home() {
  return (
    <main className="max-w-screen-xl self-stretch m-auto w-full">
      <Navbar></Navbar>
      <article className="px-6 sm:px-12 py-6">
        <ProfileClient></ProfileClient>
      </article>
      <ModalChat></ModalChat>
    </main>
  );
}
