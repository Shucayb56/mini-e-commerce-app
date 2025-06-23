import { useSearchStore } from "../store/searchStore";
import { FaSearch, } from "react-icons/fa";


const Search = () => {
    const { searchTerm, setSearchTerm } = useSearchStore();
  return (
    <div className="flex w-7xl items-center bg-white rounded-full overflow-hidden">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 text-black outline-none"
                />
                <button className="bg-white text-red-700 px-4 py-2">
                  <FaSearch size={18} />
                </button>
              </div>
  )
}

export default Search
