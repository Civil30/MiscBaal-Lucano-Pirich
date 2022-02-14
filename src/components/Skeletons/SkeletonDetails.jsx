import { Shimmer } from "components/Skeletons/Shimmer";
import { Count, DataContainer, TitleWrapper, GridContainer, Img, Price, Title } from "components/Skeletons/SkeletonsElements";

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