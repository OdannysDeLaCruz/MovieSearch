import { LayoutContainerFluid } from "../styled-components/Layouts"
// import { MovieCarousel } from "../components/MovieCarousel";
import { TheBestForYouCarousel } from "../components/TheBestForYouCarousel";

export function HomePage() {
    return (
        <LayoutContainerFluid>
            {/* <MovieCarousel title="Lo mejor para tí" /> */}
            <TheBestForYouCarousel />
            
        </LayoutContainerFluid>
    )
}