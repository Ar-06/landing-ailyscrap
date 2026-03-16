import { BestSeller } from "../components/best-seller";
import { Collections } from "../components/collections";
import { Feedback } from "../components/feedback";
import { Hero } from "../components/hero";

export default function Home() {
  return (
    <div className="animate-fade-in">
      <Hero />
      <Collections />
      <BestSeller />
      <Feedback />
    </div>
  );
}
