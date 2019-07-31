import React from "react";
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

const Home = () => {
    return <div>
    <h1>home</h1>
    <Link to="/detail/recipes/10">
    Opskrift
    </Link>
  </div>
  }

export default Home