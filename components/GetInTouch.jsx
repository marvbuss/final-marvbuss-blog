import React from 'react'
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillLinkedin,
} from 'react-icons/ai'

const GetInTouch = () => {
  return (
    <div className="mb-8 rounded-lg bg-white p-8 pb-12 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">Get in touch</h3>
      <a
        target="_blank"
        href={`https://twitter.com/CodePlusCrypto`}
        rel="noopener noreferrer"
      >
        <span className="mb-3 block cursor-pointer pb-3">
          <AiFillTwitterCircle size={32} />
          Twitter
        </span>
      </a>
      <a
        target="_blank"
        href={`https://github.com/marvbuss`}
        rel="noopener noreferrer"
      >
        <span className="mb-3 block cursor-pointer pb-3">
          <AiFillGithub size={32} />
          Github
        </span>
      </a>
      <a
        target="_blank"
        href={`https://www.linkedin.com/in/marvbuss`}
        rel="noopener noreferrer"
      >
        <span className="mb-3 block cursor-pointer pb-3">
          <AiFillLinkedin size={32} />
          LinkedIn
        </span>
      </a>
    </div>
  )
}

export default GetInTouch
