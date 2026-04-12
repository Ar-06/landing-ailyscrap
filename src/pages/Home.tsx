import { AgendaModal } from "../components/features/agenda-modal";
import { BestSeller } from "../components/sections/best-seller";
import { Collections } from "../components/sections/collections";
import { Feedback } from "../components/sections/feedback";
import { Hero } from "../components/sections/hero";

export default function Home() {
  return (
    <>
      <div className="animate-fade-in">
        <Hero />
        <Collections />
        <BestSeller />
        <Feedback />
      </div>
      <AgendaModal />
    </>
  );
}
