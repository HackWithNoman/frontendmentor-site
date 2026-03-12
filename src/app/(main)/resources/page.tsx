import data from "@/data/resources";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaCode } from "react-icons/fa";
import Image from "next/image";

function Resources() {
  return (
    <section className="mt-24 flex flex-col items-center">
      <div className="text-center mb-6">
        <h2 className="text-2xl">Resources</h2>
        <p>Preview and get Source Code</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item) => (
          <section key={item.id} className="bg-gray-100 rounded-sm mt-4">
            <div className="p-6 relative">
              <Image
                className="absolute bottom-[-4] right-0 transform p-3 rounded-full opacity-70"
                src={item.logo}
                width={70}
                height={70}
                alt={item.name}
              />
              <h1 className="flex gap-4">
                <span className="text-2xl">{item.name}</span>
                <span className="mb-6 border bg-blue-100 text-gray-800 rounded-full px-2 py-1 text-xs w-auto">
                  {item.type}
                </span>
              </h1>
              <p className="mt-2">{item.description}</p>
              <Link href={item.url} target="_blank">
                <Button variant={"outline"} className="mt-6">
                  <FaCode />
                  Learn More
                </Button>
              </Link>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}

export default Resources;
