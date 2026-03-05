import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaRegEye } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";

function ProjectCard({
  imageUrl,
  title,
  description,
  previewUrl,
  codeUrl,
}: {
  imageUrl: string;
  title: string;
  description: string;
  previewUrl: string;
  codeUrl: string;
}) {
  return (
    <section className="bg-gray-100 rounded-sm">
      <Image
        src={imageUrl}
        alt={title}
        width={500}
        height={500}
        className="rounded-t-sm"
      />
      <div className="p-6">
        <h3 className="mb-4 text-xl">{title}</h3>
        <p className="mb-6">{description}</p>
        <div className="flex gap-6">
          <Link href={previewUrl}>
            <Button>
              <FaRegEye />
              Preview
            </Button>
          </Link>
          <Link href={codeUrl}>
            <Button variant={"outline"}>
              <FaCode />
              Code
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProjectCard;
