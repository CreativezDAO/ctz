import styled from "styled-components"
import { FaTwitter, FaDiscord, FaGithub } from "react-icons/fa"
import { IconContext } from "react-icons";

function Footer() {
  return (
    <IconContext.Provider value={{ color: "white", size: "2em" }}>
        <Container>
        <Menu>
        <a href="https://twitter.com/CreativezDAO" target="_blank" rel="noreferrer"><FaTwitter /></a>
        <a href="https://creativezdao.gitbook.io/c-r-ks-a-t-i-v-ks-z/introduction/what-is-crksativksz" target="_blank" rel="noreferrer"><FaDiscord /></a>
        <a href="https://github.com/CreativezDAO" target="_blank" rel="noreferrer"><FaGithub /></a>
        </Menu>
        </Container>
    </IconContext.Provider>
  )
}

export default Footer

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    bottom: 0;
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
        padding: 0 15px;
        color: white;
    }
`




