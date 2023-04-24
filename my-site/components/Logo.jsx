import React from "react";
import Link from "next/link";
import TypeWriter from 'typewriter-effect'

const Logo = () => {
    return(   
     <div className="text-light">
        <h1 className="text-light text-4xl fixed top-5 left-10 font-mono">
            TOM.
        </h1>
        <div className="text-4xl fixed top-5 ml-10 left-20 font-mono">
        <TypeWriter
                options={{
                    strings:["JS", "JUDD"],
                    autoStart: true,
                    loop: true,
                }}
                />
            </div>
     </div>
    )
}

export default Logo;