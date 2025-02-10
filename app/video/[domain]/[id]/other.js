"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRightCircleIcon } from '@heroicons/react/24/solid'

export default function Other({ domain, id, query }) {
  const [otherId, setOtherId] = useState("")

  useEffect(() => {
    const videoId1 = sessionStorage.getItem("videoId1")
    const videoId2 = sessionStorage.getItem("videoId2")
    setOtherId(id === videoId1 ? videoId2 : videoId1)
  }, [id])

  return (
    <Link
      href={{
        pathname: `/video/${domain}/${otherId}`,
        query,
      }}
      className="flex items-center gap-1 text-blue-500"
    >
      Next video <ArrowRightCircleIcon className="size-6" />
    </Link>
  )
}
