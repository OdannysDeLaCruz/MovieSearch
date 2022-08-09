import { LayoutContainerFluid } from "../styled-components/Layouts"
import { MovieCarousel } from "../components/MovieCarousel";

export function HomePage() {
    return (
        <LayoutContainerFluid>
            <MovieCarousel title="Lo mejor para tí" />
            <MovieCarousel title="Lo mejor para tí" />
            <MovieCarousel title="Lo mejor para tí" />
            <MovieCarousel title="Lo mejor para tí" />
            <MovieCarousel title="Lo mejor para tí" />
            <MovieCarousel title="Lo mejor para tí" />
            <MovieCarousel title="Lo mejor para tí" />
            <MovieCarousel title="Lo mejor para tí" />
        </LayoutContainerFluid>
    )
}