import React, { Fragment } from 'react'
import styled from 'styled-components'

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  position: relative;
`

const Footer = styled.footer`
  font-size: 14px;
  color: #333;
  padding: 30px 100px;
  text-align: right;
  width: 100vw;
  border-top: 1px solid #0095ff;
  display: flex;
  justify-content: space-between;
`

const Layout = ({ children }) => (
  <Fragment>
    <Wrapper>{children}</Wrapper>
    <Footer>
      <span>JSDayCAN2018 🇮🇨</span>
      <span>@martafonda</span>
    </Footer>
  </Fragment>
);

export default Layout
