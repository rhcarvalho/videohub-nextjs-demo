import Link from "next/link";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";

import { VideoHub, VideoHubMeta } from "./[id]/videohub";
import Other from "./[id]/other";

export default async function Page({ params, searchParams }) {
  const { domain } = await params;
  const blur = (await searchParams).blur === "true";
  const { userId, id } = await searchParams;
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
        <Other domain={domain} id={id} query={await searchParams} />
        <Other
          domain={domain}
          id={id}
          query={await searchParams}
          idInQuery={true}
        />
      </div>
    </div>
  );
}
