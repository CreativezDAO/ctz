import styled from "styled-components"
import { FaTwitter, FaDiscord, FaGithub, FaBook, FaYoutube } from "react-icons/fa"
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
        <Button href="https://twitter.com/Creativez_DApp" target="_blank" rel="noreferrer"><FaTwitter onMouseEnter={ handleMouseEnter } /></Button>
        </Tippy>
        <Tippy content={<span style={{ color: "white"}}>Discord</span>}>
        <a href="https://discord.gg/Uj7fmHbTWj" target="_blank" rel="noreferrer"><FaDiscord /></a>
        </Tippy>
        <Tippy content={<span style={{ color: "white"}}>GitHub</span>}>
        <a href="https://github.com/CreativezDApp" target="_blank" rel="noreferrer"><FaGithub /></a>
        </Tippy>
        <Tippy content={<span style={{ color: "white"}}>Docs</span>}>
        <a href="https://creativezdapp.gitbook.io/c-r-ks-a-t-i-v-ks-z/" target="_blank" rel="noreferrer"><FaBook /></a>
        </Tippy>
        <Tippy content={<span style={{ color: "white"}}>YouTube</span>}>
        <a href="https://www.youtube.com/channel/UCovn1niyPXt5jy84y8cQV6A/featured" target="_blank" rel="noreferrer"><FaYoutube /></a>
        </Tippy>
        </Menu>
        </Container>
    </IconContext.Provider>
  )
}

export default Footer

const Container = styled.div`
    width: 100vw;
    min-height: 60px;
    position: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    bottom: 0;
    background-color: white;
    box-shadow: 10px 10px 10px 10px rgba(0,0,0,0.1);
`

const Menu = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a {
        padding: 0 18px;
        color: #060420;
    }

    @media(max-width: 790px) {
      width:100%;
    }
`

function handleMouseEnter(e) {
  e.target.className = 'mouseEnterIcons';
}



