import styled from "styled-components"
import { FaTwitter, FaDiscord, FaGithub } from "react-icons/fa"
import { IconContext } from "react-icons";
import Tippy from "@tippy.js/react"
import "tippy.js/dist/tippy.css"
import { Button } from "@mui/material";

function Footer() {
  return (
    <IconContext.Provider value={{ size: "2.5em" }}>
        <Container>
        <Menu>
        <Tippy content={<span style={{ color: "white"}}>Twitter</span>}>
        <Button href="https://twitter.com/CreativezDAO" target="_blank" rel="noreferrer"><FaTwitter onMouseEnter={ handleMouseEnter } /></Button>
        </Tippy>
        <Tippy content={<span style={{ color: "white"}}>Discord</span>}>
        <a href="https://creativezdao.gitbook.io/c-r-ks-a-t-i-v-ks-z/introduction/what-is-crksativksz" target="_blank" rel="noreferrer"><FaDiscord /></a>
        </Tippy>
        <Tippy content={<span style={{ color: "white"}}>GitHub</span>}>
        <a href="https://github.com/CreativezDAO" target="_blank" rel="noreferrer"><FaGithub /></a>
        </Tippy>
        </Menu>
        </Container>
    </IconContext.Provider>
  )
}

export default Footer

const Container = styled.div`
    width: 100%;
    min-height: 60px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    bottom: 0;
    background-color: white;
`

const Menu = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a {
        padding: 0 18px;
        color: #0f0a52;
    }
`

function handleMouseEnter(e) {
  e.target.className = 'mouseEnterIcons';
}



