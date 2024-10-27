import React from 'react'

import { Link } from 'react-router-dom'

// import links from '../../data/_LinksData'
import routesConfig from '../../routesConfig'

const LeftMenu = () => {
  return (
    <div>
        {
            routesConfig.map((link, index)=>{
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