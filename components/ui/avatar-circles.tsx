"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"

interface Avatar {
  imageUrl: string
}
interface AvatarCirclesProps {
  className?: string
  numPeople?: number
  avatarUrls?: Avatar[]
}

export const AvatarCircles = ({
  numPeople,
  className,
  avatarUrls,
}: AvatarCirclesProps) => {
  return (
    <div className={cn("z-10 flex -space-x-4 rtl:space-x-reverse", className)}>
      {avatarUrls?.map((url, index) => (
          <Image
            key={index}
            className="h-8 w-8 rounded-full border-2 border-white dark:border-gray-800"
            src={url.imageUrl}
            width={32}
            height={32}
            alt={`Avatar ${index + 1}`}
          />
      ))}
      {(numPeople ?? 0) > 0 && (
        <div
          className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-black text-center text-xs font-medium text-white"
        >
          +{numPeople}
        </div>
      )}
    </div>
  )
}
