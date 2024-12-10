import About from "@/components/About";
import FAQS from "@/components/FAQS";
import Gallary from "@/components/Gallary";
import Welcome from "@/components/Welcome";

export default function Home() {
  return (
    <>
      <Welcome />
      <About />
      <Gallary />
      <FAQS />
    </>
  );
}
