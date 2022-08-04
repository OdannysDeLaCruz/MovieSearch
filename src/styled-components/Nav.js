import styled from 'styled-components'

export const Nav = styled.nav`
    outline: 1px solid pink;
    
`
    
export const NavList = styled.nav`
    padding: 0px;
    display: flex;
    justify-content: center;
    list-style: none;
`

export const NavListItem = styled.nav`
    padding-inline: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    
    > a {
        color: #ffffff;
    }
`

