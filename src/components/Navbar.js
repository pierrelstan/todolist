import React from 'react';

class NavBar extends React.Component {
    render() {
        const pages =['About', 'Skills','Works','Contact'];
        const navlinks = pages.map(page => {
         return (
             <a href={'/' + page}>
             {page}
             </a>
         )
        })
        return (
            <div>
                <nav>{navlinks}</nav>
            </div>
        )
    }
}
export default NavBar;