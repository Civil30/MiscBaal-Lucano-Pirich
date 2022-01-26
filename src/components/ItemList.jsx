import Item from "./Item";
import { WrapperCards } from "./ItemList-Styled";

export default function ItemList ({ products }) {
    
    return (
        <WrapperCards>
            { products.map( product => <Item item={product} key={product.id} />) }
        </WrapperCards>
    )
}