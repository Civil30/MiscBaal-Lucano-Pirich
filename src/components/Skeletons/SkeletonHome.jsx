import { Card } from "./SkeletonsElements";
import { WrapperCards } from "../ItemList-Styled"
import Shimmer from "./Shimmer";

export default function SkeletonHome () {
    return (
        <WrapperCards>
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