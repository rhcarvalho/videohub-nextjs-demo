"use client"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";

export default function Home() {
  const [formData, setFormData] = useState({
    domain: sessionStorage.getItem("domain") || "",
    userId: sessionStorage.getItem("userId") || "",
    videoId1: sessionStorage.getItem("videoId1") || "",
    videoId2: sessionStorage.getItem("videoId2") || "",
    blur: sessionStorage.getItem("blur") === "true" || false,
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    const checked_or_value = (e.target.type === "checkbox") ? checked : value;
    sessionStorage.setItem(name, checked_or_value);
    setFormData((prev) => ({
      ...prev,
      [name]: checked_or_value,
    }));
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 group" data-blur={formData.blur}>
        <h1 className="text-4xl font-bold text-center sm:text-left">VideoHub demo using Next.js</h1>

        <label className="flex flex-wrap items-baseline gap-2">
          <span className="text-sm italic text-neutral-700">Enter VideoHub domain:</span>
          <input
            type="text"
            name="domain"
            value={formData.domain}
            onChange={handleChange}
            className="group-data-[blur=true]:blur border p-1"
          />
        </label>

        <label className="flex flex-wrap items-baseline gap-2">
          <span className="text-sm italic text-neutral-700">Enter external user ID (optional):</span>
          <input
            type="text"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
            className="group-data-[blur=true]:blur border p-1"
          />
        </label>

        <div className="flex flex-col gap-2">
          <p className="text-sm italic text-neutral-700">Enter video IDs:</p>
          <div className="grid grid-cols-[1fr_max-content] items-baseline gap-2 md:text-xl font-[family-name:var(--font-geist-mono)]">
            <input
              type="text"
              name="videoId1"
              value={formData.videoId1}
              onChange={handleChange}
              className="group-data-[blur=true]:blur w-full border p-1"
            />
            <Link
              href={{
                pathname: `/video/${formData.domain}/${formData.videoId1}`,
                query: {
                  ...formData.blur && {blur: true},
                  ...formData.userId && {userId: formData.userId},
                },
              }}
              className="flex items-center gap-1 text-blue-500"
            >
              Go to video 1 <ArrowRightCircleIcon className="size-6" />
            </Link>
            <input
              type="text"
              name="videoId2"
              value={formData.videoId2}
              onChange={handleChange}
              className="group-data-[blur=true]:blur w-full border p-1"
            />
            <Link
              href={{
                pathname: `/video/${formData.domain}/${formData.videoId2}`,
                query: {
                  ...formData.blur && {blur: true},
                  ...formData.userId && {userId: formData.userId},
                },
              }}
              className="flex items-center gap-1 text-blue-500"
            >
              Go to video 2 <ArrowRightCircleIcon className="size-6" />
            </Link>
          </div>
        </div>

        <label className="flex flex-wrap items-center gap-2">
          <input
            type="checkbox"
            name="blur"
            checked={formData.blur}
            onChange={handleChange}
            className="border p-1"
          />
          <span className="text-sm text-neutral-700">Blur inputs</span>
        </label>

        <div className="mt-48 flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read Next.js docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
