import styled from 'styled-components'

export const Results = styled.section`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    overflow-y: scroll;
    max-height: 400px;
`

export const ResultsList = styled.ul`
    list-style: none;
`

export const ResultsListItem = styled.li`
    padding: 16px;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
`

export const ResultsListItemImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 125px;
    margin-right: 16px;
    overflow: hidden;
`