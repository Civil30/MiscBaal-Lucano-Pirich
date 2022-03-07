import { Shimmer } from "components/Skeletons/Shimmer";
import { Count, DataContainer, TitleWrapper, GridContainer, Img, Price, Title, Details } from "components/Skeletons/SkeletonsElements";

export function SkeletonDetails () {
    return(
        <>
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
            <Details>
                <Price />
                <Title />
                <Title />
                <Title />
            </Details>
        </>

    )

}