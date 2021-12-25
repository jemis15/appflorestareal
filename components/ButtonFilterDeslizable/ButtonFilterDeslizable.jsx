import { createRef, useState } from "react";
import BaseText from "../Base/BaseText";
import { Popup } from "../Popup";
import { Caret as IconCaret } from "../SVGIcons";

function ButtonFilterDeslizable({
  textStrong,
  options,
  valueDefault,
  onChange,
}) {
  const [width, setWidth] = useState(0);
  const myRef = createRef(null);
  const [itemsSelect, setItemSelect] = useState(() => {
    if (valueDefault) {
      return options.find((option) => option.value === valueDefault);
    }

    return {};
  });

  function handleClickItem(value) {
    setItemSelect(value);
    onChange(value);
  }

  return (
    <div ref={myRef}>
      <Popup
        trigger={
          <button className="flex items-center border border-gray-300 rounded-lg px-3 py-2 space-x-3 ring-inset focus:ring-2 ring-blue-200 focus:border-blue-500 outline-none">
            <div>
              <BaseText size="value" display="truncate">
                {textStrong && <strong>{textStrong} </strong>}
                {itemsSelect.label2 || itemsSelect.label}
              </BaseText>
            </div>
            <div>
              <IconCaret size="16" fill />
            </div>
          </button>
        }
        position="bottom left"
        arrow={false}
        offsetY={10}
        onOpen={(e) => {
          var node = e.target;
          while (node.localName !== "button") {
            node = node.parentNode;
          }
          setWidth(node.clientWidth);
        }}
      >
        {(close) => (
          <div style={{width}} className="bg-white rounded-lg p-1 border shadow">
            <div className="space-y-1 p-1">
              {options.map((item, key) => (
                <ItemButton
                  key={key}
                  label={item.label}
                  values={item}
                  onClick={() => {
                    close();
                    handleClickItem(item);
                  }}
                  active={itemsSelect.value === item.value}
                />
              ))}
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
}

function ItemButton({ label, active, onClick }) {
  return (
    <button
      className={`w-full text-left px-3 py-1 rounded-md focus:ring focus:outline-none ${
        active ? "bg-blue-50 hover:bg-blue-100" : "hover:bg-gray-100"
      }`}
      onClick={onClick}
    >
      <BaseText size="value" className="leading-6">
        {label}
      </BaseText>
    </button>
  );
}

export default ButtonFilterDeslizable;
