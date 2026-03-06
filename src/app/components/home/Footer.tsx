import Link from "next/link";

function Footer() {
  return (
    <footer className="flex justify-between py-16 px-8 rounded-lg border-t border-gray-100">
      <div className="flex gap-6">
        <Link href="/resources">Resources</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/github">Github</Link>
      </div>
      <p>
        Made by{" "}
        <a
          href="https://github.com/HackWithNoman"
          target="_blank"
          className="text-[#6366f1]"
        >
          @HackWithNoman
        </a>
      </p>
    </footer>
  );
}

export default Footer;
