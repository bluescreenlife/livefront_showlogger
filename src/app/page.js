import Hero from "./components/Hero";
import Search from "./components/Search";
import ParentComponent from "./components/ParentComponent";

export default function Home() {
  return (
    <>
      <Hero />
      <ParentComponent />
    </>
  );
}
