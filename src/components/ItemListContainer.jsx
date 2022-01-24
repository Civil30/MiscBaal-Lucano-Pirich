import ItemCount from './ItemCount';
import ItemList from './ItemList'
const ItemListContainer = () => {
    return (
        <>
            <div>
                <ItemList />
            </div>
            {/* <ItemCount stock={5} initial={0} /> */}
        </>
    )
};

export default ItemListContainer;