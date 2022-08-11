import styled from 'styled-components'

export const LayoutContainer = styled.div`
    padding: 0;
    max-width: 1400px;
    margin: 30px auto;
`

export const LayoutContainerFluid = styled.div`
    padding: 0;
    margin: 30px auto;
`

export const Header = styled.header`
    position: sticky;
    top: 0px;
    padding: 16px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: #0E0E0E;
    z-index: 9;
`

export const HeaderWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-inline: 16px;

    @media (min-width: 430px) {
        padding-inline: 60px;
    }
`
