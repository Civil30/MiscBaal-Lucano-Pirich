import { Item } from "components/ItemList/Item";
import { WrapperCards } from "components/ItemList/ItemList-Styled";

export function ItemList ({ products }) {
    
    return (
        <WrapperCards>
            { products.map( product => <Item item={product} key={product.id} />) }
        </WrapperCards>
    )
}