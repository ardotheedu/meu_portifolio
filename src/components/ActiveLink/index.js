import  {NavLink,   useMatch, useResolvedPath,} from "react-router-dom";

import React from "react";

export function ActiveLink({activeClassName, to, children}) {

    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    const className = match
        ? activeClassName
        : '';
    return ( 
        <NavLink      
         className={className}
         to={to}
        >
            {children}
        </NavLink>
    )
}