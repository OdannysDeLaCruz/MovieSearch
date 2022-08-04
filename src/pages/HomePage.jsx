import { LayoutContainer } from "../styled-components/Layouts"
import { MovieCarousel } from "../components/MovieCarousel";

export function HomePage() {
    return (
        <LayoutContainer>
            <MovieCarousel title="Lo mejor para tí" />
            <MovieCarousel title="Lo mejor para tí" />
            <MovieCarousel title="Lo mejor para tí" />
            <MovieCarousel title="Lo mejor para tí" />
            <MovieCarousel title="Lo mejor para tí" />
            <MovieCarousel title="Lo mejor para tí" />
            <MovieCarousel title="Lo mejor para tí" />
            <MovieCarousel title="Lo mejor para tí" />
        </LayoutContainer>
    )
}