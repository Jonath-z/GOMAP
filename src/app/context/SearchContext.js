import
{
    useContext,
    useState,
    createContext
} from "react";

const defaultData = {
    lng: 29.235600,
    lat: -1.683500,
    address: 'Goma'
}

const SearchContext = createContext(defaultData);

export const useSearchResult = () => useContext(SearchContext); 

const SearchProvider = ({Children}) => {
    const [searchResult, setSearchResult] = useState(null);
    
    return (
        <SearchContext.Provider value={{ setSearchResult, searchResult }}>
            {Children}
        </SearchContext.Provider>
    );
}

export default SearchProvider;