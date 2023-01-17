import React from "react";
import { Link } from "react-router-dom";


import links from "../../data/_LinksData";

const Links = ({ setShowLinksDropDown }) => {

    return (
        <>
            <div className="links-container">
                {links.map((link, index) => {
                    return (
                        <div className="link">
                            <Link onClick={() => { setShowLinksDropDown(false) }} className="link" key={index} to={`${link.path}`}>{link.title}</Link>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Links;