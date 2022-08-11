import styled from 'styled-components'

export const MovieDetailWrapper = styled.section`
    display: flex;
    flex-direction: column;
`

export const MoviewBackdrop = styled.section`
    width: 100%;
    height: 600px;
    position: relative;
    display: none;
    
    &:after {
        position: absolute;
        content: "";
        background: linear-gradient(0deg, rgba(0,0,0,1) 2%, rgba(0,0,0,0.5521806134563201) 54%, rgba(255,255,255,0) 91%, rgba(247,247,247,0) 100%);
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
    }

    @media (min-width: 576px) {
        & {
            display: block;
        }
    }
`

export const MoviewBackdropImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
`

export const MovieSumamryWrapper = styled.section`
    padding: 20px;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 2;
    top: 0px;

    @media (min-width: 576px) {
        & {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, auto));
            grid-gap: 30px;
            top: -176px;
        }
    }
`

export const MoviePoster = styled.figure`
    width: 100%;
    display: flex;
    aling-items: flex-start;
    margin-bottom: 20px;
`

export const MoviePosterImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const MovieDetailTitle = styled.h1`
    font-size: 24px;
    color: #ffffff;
    margin-bottom: 20px;
`

export const MovieGenres = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 30px;
`

export const MovieSummary = styled.div`
    padding: 0 16px;
`

export const MovieOverview = styled.section`
    margin-bottom: 30px;
`

export const MovieOverviewTitle = styled.h2`
    font-size: 18px;
    line-height: 24px;
    color: #ffffff;
    margin-bottom: 20px;
`

export const MovieOverviewText = styled.p`
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
`





