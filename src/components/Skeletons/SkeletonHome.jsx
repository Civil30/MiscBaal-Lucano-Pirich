import { Card } from "components/Skeletons/SkeletonsElements";
import { WrapperCards } from "components/ItemList/ItemList-Styled"
import { Shimmer } from "components/Skeletons/Shimmer";

export function SkeletonHome () {
    return (
        <WrapperCards>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Shimmer />
        </WrapperCards>
    )
} 