import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle = "" }) => (
  <header>
    <div>
      <h1>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
