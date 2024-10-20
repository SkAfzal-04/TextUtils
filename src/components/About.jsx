import React from 'react'
import PropTypes from 'prop-types';
export default function About(props) {
  return (
    <div style={{ color: props.mode === "dark" ? "azure" : "black" }}>
      <h1>About Page</h1>
      <p>You are in about page</p>
    </div>
  )
}
