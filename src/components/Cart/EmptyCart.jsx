import { Container, GoProducts, Title } from "./EmptyCart-Styled"

export function EmptyCart () {
    return (
        <Container>
            <Title>Todavía no has agregado ningún producto!</Title>
            <GoProducts to={"/"}>Ir a productos</GoProducts>
        </Container>
    )
}