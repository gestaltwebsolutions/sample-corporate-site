import React from "react"
import { Link } from "gatsby"
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const companyName = 'Gestalt Web Solutions'
export default ({ children }) => (
  <div style={{ margin: `0 auto`, maxWidth: 1000, padding: `1.25rem 1rem` }}>
    <title>{companyName}</title>
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>{companyName}</h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>
    {children}
    <div>
    <Link to="/" style={{ position: 'fixed', bottom: 0, textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>Footer</h3>
      </Link>
    </div>
  </div>

)