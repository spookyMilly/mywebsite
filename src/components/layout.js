import React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
    return (
        <div
            style={{
                marginLeft: `auto`,
                marginRight: `auto`,
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
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
        </div>
    )
}

export default Layout