import styled from 'styled-components'

export const Nav = styled.nav`
    outline: 1px solid pink;
`
    
export const NavList = styled.ul`
    padding: 0px;
    display: flex;
    justify-content: center;
    list-style: none;
`

export const NavListItem = styled.li`
    padding-inline: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #ffffff;
    
    > a {
        color: #ffffff;
    }
`

export const NavigationBar = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
`

