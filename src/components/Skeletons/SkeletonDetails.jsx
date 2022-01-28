import { TitleWrapper } from "../ItemDetail-Styled";
import { Count, DataContainer, GridContainer, Img, Price, Title } from "./SkeletonsElements";

export default function SkeletonDetails () {
    return(
        <GridContainer>
            <Img />
            <DataContainer>
                <TitleWrapper>
                    <Title />
                    <Price />
                </TitleWrapper>
                <Count />
            </DataContainer>
        </GridContainer>
    )

}