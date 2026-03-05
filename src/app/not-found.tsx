import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function NotFound() {
  return (
    <main className="min-h-screen text-zinc-100 flex items-center justify-center px-4 font-mono">
      <div className="relative z-10 max-w-lg w-full">
        {/* Terminal-style header */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="ml-3 text-xs text-zinc-500 tracking-widest uppercase">
            error.log
          </span>
        </div>

        <Separator className="bg-zinc-800 mb-8" />

        {/* Status badge */}
        <Badge
          variant="outline"
          className="border-red-500/50 text-red-400 bg-red-500/10 text-xs tracking-widest mb-6"
        >
          STATUS: 404
        </Badge>

        {/* Big 404 */}
        <h1
          className="text-[120px] leading-none font-black text-transparent mb-2 select-none"
          style={{
            WebkitTextStroke: "1px #3f3f46",
          }}
        >
          404
        </h1>

        {/* Message */}
        <p className="text-zinc-400 text-sm mb-1">
          <span className="text-teal-400">$</span> GET /this-page
        </p>
        <p className="text-zinc-500 text-sm mb-8">
          &gt; Page not found. The resource you requested does not exist or has
          been moved.
        </p>

        <Separator className="bg-zinc-800 mb-8" />

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            asChild
            className="bg-teal-500 hover:bg-teal-400 text-zinc-950 font-bold tracking-wide text-sm"
          >
            <Link href="/">← Go Home</Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="border-zinc-700 text-zinc-400 hover:text-zinc-100 hover:border-zinc-500 bg-transparent text-sm tracking-wide"
          >
            <Link href="/projects">Browse Projects</Link>
          </Button>
        </div>

        {/* Footer hint */}
        <p className="text-zinc-700 text-xs mt-10 tracking-widest">
          FRONTEND MENTOR PROJECTS — {new Date().getFullYear()}
        </p>
      </div>
    </main>
  );
}
