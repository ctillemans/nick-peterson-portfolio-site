import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const HeroFullWrapper = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 95vh;
  background: url(${props => props.image});
  background-size: cover;
  color: white;
  overflow: hidden;
  img {
    width: 100vw;
  }
  h1 {
    color: white;
  }
  a {
    text-decoration: none;
    text-transform: uppercase;
  }
  div {
      width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    >*{
        margin
    }
  }
`

const HeroWithText = ({ image }) => {
  return (
    <HeroFullWrapper image={image}>
      <div>
        <Link to="/">
          <h1>About</h1>
        </Link>
        <Link to="/">
          <h1>Cuts</h1>
        </Link>
        <Link to="/">
          <h1>Schedule</h1>
        </Link>
      </div>
    </HeroFullWrapper>
  )
}

export default HeroWithText
