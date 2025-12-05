import { createContext, useState } from 'react';
import { useDebounce } from '../lib/hooks';

type SearchTextContextType = {
  searchText: string;
  debouncedSearchText: string;
  handleSearchTextChange: (searchText: string) => void;
};

export const SearchTextContext = createContext<SearchTextContextType | null>(
  null
);

export default function SearchTextContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchText, setSearchText] = useState('');
  const debouncedSearchText = useDebounce(searchText, 400);

  const handleSearchTextChange = (searchText: string) => {
    setSearchText(searchText);
  };

  return (
    <SearchTextContext.Provider
      value={{
        searchText,
        debouncedSearchText,
        handleSearchTextChange,
      }}
    >
      {children}
    </SearchTextContext.Provider>
  );
}
