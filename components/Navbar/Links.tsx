import React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

type LinksProps = {
  /** Match the floating pill navbar (glass border + blur). */
  pillStyle?: boolean
}

const Links = ({ pillStyle }: LinksProps) => {
  return (
    <div className="dropdown dropdown-end dropdown-hover">
      <li
        tabIndex={0}
        className={cn(
          "rounded-lg hover:text-white",
          pillStyle ? "hover:bg-white/10" : "hover:bg-gray-900"
        )}
      >
        <a className="cursor-pointer">Links</a>
      </li>
      <ul
        tabIndex={0}
        className={cn(
          "dropdown-content menu z-[1] w-52 p-2",
          pillStyle
            ? "rounded-2xl border border-white/15 bg-black/80 shadow-lg shadow-black/25 backdrop-blur-xl [&_li>a:hover]:bg-white/10 [&_li>a:focus]:bg-white/10"
            : "rounded-box bg-black shadow [&_li>a:hover]:bg-gray-800"
        )}
      >
        <li>
          <a
            className="flex cursor-pointer items-center"
            href="https://www.linkedin.com/in/martin-lacsamana/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://personal-website-company-images.s3.us-west-1.amazonaws.com/icons8-linkedin-48+(1).png"
              alt="LinkedInIcon"
              width={20}
              height={20}
            />
            <p className="">LinkedIn</p>
          </a>
        </li>

        <li>
          <a
            className="flex cursor-pointer items-center"
            href="https://github.com/Martinlacsamana"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://personal-website-company-images.s3.us-west-1.amazonaws.com/icons8-github-50.png"
              alt="Github icon"
              width={20}
              height={20}
            />
            <p className="">Github</p>
          </a>
        </li>

        <li>
          <a className="flex cursor-pointer items-center" href="mailto:martinlacsamana.dev@gmail.com">
            <Image
              src="https://personal-website-company-images.s3.us-west-1.amazonaws.com/icons8-gmail-48.png"
              alt="Gmail Icon"
              width={20}
              height={20}
            />
            <p className="">Gmail</p>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Links
