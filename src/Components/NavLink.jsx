import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavLink() {
  return (
    <div>
      <NavLink to='/home' >Home</NavLink>
      <NavLink to='/portfolio'>Portfolio</NavLink>
      <NavLink to='/company'>Company</NavLink>
    </div>
  )
}

