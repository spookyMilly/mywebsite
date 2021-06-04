import React from "react"
import { Link } from "gatsby"

const Layout = ({ title, children }) => {
    return (
        <div
            style={{
                marginLeft: '2em',
                marginRight: 'auto',
                marginTop: '5%'
            }}
        >
            <header>
                <h1>
                    <Link
                        style={{
                            boxShadow: `none`,
                            color: `inherit`,
                        }}
                        to={`/`}
                    >
                        {title}
                    </Link>
                </h1>
            </header>
            <main>{children}</main>
            <footer>
                © 2019 - {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a> &#9829;
            </footer>
        </div>
    )
}

export default Layout