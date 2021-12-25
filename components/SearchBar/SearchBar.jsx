import { Close as IconClose, Search as IconSearch } from "../SVGIcons";

const SearchBar = ({ isLoading, query, onClear, onChange, ...otherProps }) => {
  return (
    <div className="focus-within:ring-2 ring-blue-500 flex items-center bg-gray-200 rounded-md overflow-hidden">
      <input
        type="text"
        className="block flex-auto outline-none bg-transparent px-3"
        value={query}
        onChange={onChange}
        {...otherProps}
      />
      <SearchIcon hasContent={query} isLoading={isLoading} onClear={onClear} />
    </div>
  );
};

const SearchIcon = ({ isLoading, hasContent, onClear }) => {
  return (
    <div
      className="flex items-center justify-center w-8 h-8"
      role="button"
      onClick={onClear}
    >
      {!isLoading && !hasContent && <IconSearch size="16" />}
      {!isLoading && hasContent && <IconClose size="12" />}
      {isLoading && (
        <svg class="circular-2NaZOq" viewBox="25 25 50 50">
          <circle
            class="path-92Hmty path3-2l9TIX"
            cx="50"
            cy="50"
            r="20"
          ></circle>
          <circle
            class="path-92Hmty path2-1q7bG_"
            cx="50"
            cy="50"
            r="20"
          ></circle>
          <circle class="path-92Hmty" cx="50" cy="50" r="20"></circle>
        </svg>
      )}
    </div>
  );
};

export default SearchBar;
