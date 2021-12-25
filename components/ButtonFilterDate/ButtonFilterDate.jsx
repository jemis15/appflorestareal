import { createRef, useState } from "react";
import BaseText from "../Base/BaseText";
import { CalendarPager } from "../CalendarPager";
import { Popup } from "../Popup";
import { Calendario as IconDate, Caret as IconCaret } from "../SVGIcons";

const ButtonFilterDate = () => {
  return (
      <Popup
        trigger={
          <button className="flex items-center space-x-2 bg-gray-100 rounded-md px-3 py-2 hover:bg-gray-200">
            <IconDate size="16" />
            <BaseText size="value" display="truncate">
              Desde el principio: 1 ene 2009 - 7 dic 2021
            </BaseText>
            <IconCaret size="16" fill />
          </button>
        }
        position={['bottom left','bottom right']}
        offsetY={10}
        arrow={false}
      >
        <div className="bg-white rounded-lg border shadow">
          <CalendarPager />
        </div>
      </Popup>
  );
};

export default ButtonFilterDate;
