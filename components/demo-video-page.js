import Link from "next/link";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";

import { VideoHub, VideoHubMeta } from "@/components/videohub";
import SeeOtherLink from "@/components/see-other-link";

export default async function Page({ domain, id, query, userId }) {
  const blur = query.blur === "true";
  return (
    <div className="p-2 flex flex-col gap-4">
      <VideoHubMeta userId={userId} />
      <h1 className="text-4xl font-bold text-center sm:text-left">
        VideoHub demo using Next.js
      </h1>
      <Link href="/" className="flex items-center gap-1 text-blue-500">
        <ArrowLeftCircleIcon className="size-6" /> Back to home
      </Link>
      <h2 className="text-2xl font-semibold text-center sm:text-left mt-4">
        Video: <span className={blur ? "blur" : ""}>{id}</span>
      </h2>
      <p className="text-sm italic text-neutral-700 text-center sm:text-left">
        Some text BEFORE video player component
      </p>
      <VideoHub key={id} domain={domain} id={id} />
      <p className="text-sm italic text-neutral-700 text-center sm:text-left">
        Some text AFTER video player component
      </p>
      <div className="flex flex-col gap-2">
        <SeeOtherLink domain={domain} id={id} query={query} />
        <SeeOtherLink domain={domain} id={id} query={query} idInQuery={true} />
      </div>
    </div>
  );
}
