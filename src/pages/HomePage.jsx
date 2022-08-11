import { LayoutContainerFluid } from "../styled-components/Layouts"
import { TheBestForYouCarousel } from "../components/TheBestForYouCarousel";

export function HomePage() {
    return (
        <LayoutContainerFluid>
            <TheBestForYouCarousel />
        </LayoutContainerFluid>
    )
}