import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { FaXTwitter } from 'react-icons/fa6'

const FollowOn = () => {
  return (
    <div className='fadded-text pt-2'>

        <span>Follow On:</span>
        <div className='flex justify-start gap-4 pt-3'>
            <a href="https://x.com/Swappy2003">
            <FaXTwitter size={20}/>
            </a>
            <a href="https://github.com/swappy-2003">
            <BsGithub size={20}/>
            </a>
            <a href="https://www.linkedin.com/in/swapnilkumar-dwivedi/">
            <BsLinkedin size={20}/>
            </a>

        </div>
    </div>
  )
}

export default FollowOn