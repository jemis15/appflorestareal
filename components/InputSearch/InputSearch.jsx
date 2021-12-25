import { Close as IconClose, Search as IconSearch } from "../SVGIcons";

const InputSearch = ({ ...otherProps }) => {
  return (
    <div className="inline-block">
      <div className="relative z-10">
        <IconSearch className="absolute top-2 left-2" size="16" />
        <input
          id="search"
          type="search"
          className="rounded border border-gray-300 pl-8 pr-3 py-1 focus:border-blue-500 focus:ring-1 outline-none"
          placeholder="Buscar"
          autoComplete="off"
          {...otherProps}
        />
        {/* <button className="absolute top-0 bottom-0 right-0 px-3 flex items-center justify-center">
          <IconClose size="12" className="text-gray-500" />
        </button> */}
      </div>
    </div>
    // <label className="inline-block">
    //   <input type="text" {...otherProps} />
    // </label>
  );
};

export default InputSearch;
