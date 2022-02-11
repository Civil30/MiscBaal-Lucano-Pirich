import { Shimmer } from "./Shimmer";
import { Count, DataContainer, TitleWrapper, GridContainer, Img, Price, Title } from "./SkeletonsElements";

export function SkeletonDetails () {
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
            <Shimmer />
        </GridContainer>
    )

}