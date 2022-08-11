import styled from "styled-components";
import { Link } from "react-router-dom";
import { Header, HeaderWrapper } from "../styled-components/Layouts"
import { NavList, NavListItem } from "../styled-components/Nav"
import { MovieSearch } from "./MovieSearch";

const Logotype = styled.h1`
    color: #ffffff;
    font-size: 20px;
    text-shadow: 0 0 20px blue;

    @media (min-width: 430px) {
        font-size: 40px;
    }
`


export function HeaderComponent() {
    return (
        <Header>
            <HeaderWrapper>
                <Logotype>MovieFlix</Logotype>
                <NavList>
                    <NavListItem><MovieSearch/></NavListItem>
                    <NavListItem><Link to="/">Home</Link></NavListItem>
                    <NavListItem><Link to="/movies">Movies</Link></NavListItem>
                    <NavListItem><Link to="/details">Movies</Link></NavListItem>
                </NavList>
            </HeaderWrapper>
        </Header>
    )
}