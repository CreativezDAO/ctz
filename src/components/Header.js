import React, { useState } from 'react'
import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <Container>
    <div>
        <img src="/images/logo.svg" alt="" />
    </div>
    <Menu>
      <a href="#">DOCS</a>
      <a href="#">ANNOUNCEMENTS</a>
      <a href="#">VOTING</a>
      <a href="#">CTZ GALLERY</a>
      <a href="#">STATS</a>
    </Menu>
    <RightMenu>
    <RightButton>
          Connect Wallet
    </RightButton>    
          <CustomMenu onClick={()=>setBurgerStatus(true)}/>
    </RightMenu>
    <BurgerNav show={burgerStatus}>
      <CloseWrapper>
      <CustomClose onClick={()=>setBurgerStatus(false)}/>
      </CloseWrapper>      
      <li><a href="#">DOCS</a></li>
      <li><a href="#">ANNOUNCEMENTS</a></li>
      <li><a href="#">VOTING</a></li>
      <li><a href="#">CTZ GALLERY</a></li>
      <li><a href="#">STATS</a></li>
      <li><a href="#">MINT</a></li>
      <li><a href="#">EARN</a></li>

    </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`

const Menu = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a {
        font-weight: 500;
        text-transform: uppercase;
        padding: 0 30px;
        flex-wrap: nowrap;
    }

    @media(max-width: 1200px) {
      display: none;
    }
`

const RightButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 160px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a{
      font-weight: 600;
      text-transform: uppercase;
      margin-right: 10px;
    }
`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 100;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
    transition: transform 0.2s;
    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);

        a {
            font-weight: 600;
        }
    }

`

const CustomClose = styled(CloseIcon)`
      cursor: pointer;
`

const CloseWrapper = styled.div`
      display: flex;
      justify-content: flex-end;

`

