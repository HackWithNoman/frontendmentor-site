import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

function Hero() {
  return (
    <section className="flex flex-col items-center mt-12">
      <p className="py-4">Growing collection of</p>
      <h1 className="text-3xl mb-6">Frontend Mentor Projects</h1>
      <p className="max-w-2xl text-center mb-6">
        Explore difrent types of project built with html, css and vanillla
        javascript. Here I’m listing all the projects am crating with
        javascript. You can use these projects to practice your javascript
        skills. Copy these or get inspired from these.
      </p>
      <Link href={"/projects"}>
        <Button size={"lg"}>
          Browse Projects
          <FaArrowRightLong />
        </Button>
      </Link>
    </section>
  );
}

export default Hero;
