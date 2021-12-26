import Image from 'next/image'
import React from 'react'
import GithubIcon from '../../public/assets/github.svg'

const ProjectCard = ({ title, emoji, description, link, codeLink }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-16">
      <div className="underline-gradient font-serif text-4xl">{title}</div>
      <div className="my-4">{emoji}</div>
      <div className="content-big text-center font-light mb-4 mx-10 md:mx-72">
        {description}
      </div>
      <div className="flex flex-row gap-4 flex-wrap md:flex-nowrap">
        <a className="underline-gradient cursor-pointer" href={link}>
          Go to Project
        </a>
        {codeLink && (
          <a href={codeLink}>
            <Image
              width={30}
              height={30}
              src={GithubIcon}
              alt="project-on-github"
              className="color-dark"
            />
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectCard