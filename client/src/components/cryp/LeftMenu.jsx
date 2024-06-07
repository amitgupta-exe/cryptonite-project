import React from 'react'

import { Link } from 'react-router-dom'

import links from '../../data/_LinksData'

const LeftMenu = () => {
  return (
    <div>
        {
            links.map((link, index)=>{
                return(
                    <div className="link-box">
                        <Link className='link' to={link.path}>{link.title}</Link>
                    </div>
                )
            })
        }

    </div>
  )
}

export default LeftMenu