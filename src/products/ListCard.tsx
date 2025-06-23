import { useSearchStore } from "../store/searchStore";
import { products20 } from "./items";
import List from "./List";
const ListCard = () => {
    const searchEngine = useSearchStore((state) => state.searchTerm);
    
      const filteredProducts = products20.filter((product) => {
        const matchName = product.name
          .toLowerCase()
          .includes(searchEngine.toLowerCase());
        return matchName;
      });
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
      {filteredProducts.map((item) => (
        <List key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ListCard
