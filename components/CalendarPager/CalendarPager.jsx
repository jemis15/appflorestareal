import { randomstring } from "../../helpers/string";
import BaseText from "../Base/BaseText";
import {
  Chevron as IconChevron,
} from "../SVGIcons";

const NAMELABEL = randomstring(4);
const FILTERS = [
  { label: "Últimos 7 dias", value: "last_7_days" },
  { label: "Últimos 14 dias", value: "last_14_days" },
  { label: "Últimos 28 dias", value: "last_28_days" },
  { label: "Últimos 90 dias", value: "last_90_days" },
  { label: "Este mes", value: "this_month" },
  { label: "Este trimestre", value: "this_quarter" },
  { label: "Desde el principio", value: "all_time" },
  { label: "Personalizado", value: "CUSTOM" },
];
const DAYS = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];
const daysss = [
  { number: 1, day: "Lunes", dayAbreviatura: "Lun" },
  { number: 2, day: "Martes", dayAbreviatura: "Mar" },
  { number: 3, day: "Miércoles", dayAbreviatura: "Mié" },
  { number: 4, day: "Jueves", dayAbreviatura: "Jue" },
  { number: 5, day: "Viernes", dayAbreviatura: "Vie" },
  { number: 6, day: "Sábado", dayAbreviatura: "Sáb" },
  { number: 0, day: "Domingo", dayAbreviatura: "Dom" },
];

const MONTHS = [
  { number: 0, month: "ene", monthAbreviatura: "ene" },
  { number: 1, month: "feb", monthAbreviatura: "feb" },
  { number: 2, month: "mar", monthAbreviatura: "mar" },
  { number: 3, month: "abr", monthAbreviatura: "abr" },
  { number: 4, month: "mayo", monthAbreviatura: "may" },
  { number: 5, month: "junio", monthAbreviatura: "jun" },
  { number: 6, month: "julio", monthAbreviatura: "jul" },
  { number: 7, month: "agosto", monthAbreviatura: "ago" },
  { number: 8, month: "septiembre", monthAbreviatura: "sep" },
  { number: 9, month: "octubre", monthAbreviatura: "oct" },
  { number: 10, month: "nobiembre", monthAbreviatura: "nob" },
  { number: 11, month: "diciembre", monthAbreviatura: "dic" },
];

const CalendarPager = () => {
  return (
    <div className="flex">
      <div className="flex-none shadow p-4 rounded-lg">
        <ul className="space-y-1">
          {FILTERS.map((filter, key) => (
            <li key={key}>
              <LabelInput
                name={NAMELABEL}
                label={filter.label}
                value={filter.value}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-auto">
        <div className="relative">
          <div>
            <div className="absolute top-2 left-2">
              <button className="px-3 py-2 rounded-md hover:bg-gray-100">
                <IconChevron size={16} />
              </button>
            </div>
            <div className="absolute top-2 right-2">
              <button className="px-3 py-2 rounded-md hover:bg-gray-100">
                <IconChevron size={16} className="transform -rotate-180" />
              </button>
            </div>
          </div>
          <div className="p-4 flex space-x-6">
            <div>
              <div className="text-center mb-4">
                <BaseText size="value">enero 2019</BaseText>
              </div>
              <Calendar
                selectDate={{ date: 5, month: 1, year: 2021 }}
                selectDateRange={{ date: 25, month: 1, year: 2021 }}
                focusDate={{ date: 1, month: 1, year: 2021 }}
                defaultCursor={{ date: 1, month: 1, year: 2021 }}
              />
            </div>
            <div>
              <div className="text-center mb-4">
                <BaseText size="value">enero 2019</BaseText>
              </div>
              <Calendar
                selectDate={{ date: 5, month: 1, year: 2021 }}
                selectDateRange={{ date: 25, month: 1, year: 2021 }}
                focusDate={{ date: 1, month: 2, year: 2021 }}
                defaultCursor={{ date: 1, month: 2, year: 2021 }}
              />
            </div>
          </div>
        </div>
        <div className="flex space-x-2 px-4">
          <button className="flex-1 bg-gray-100 rounded-md px-3 py-2 hover:bg-gray-200">
            <BaseText size="value">Cancelar</BaseText>
          </button>
          <button className="flex-1 bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-600">
            <BaseText size="value" weight="bold">
              Actualizar
            </BaseText>
          </button>
        </div>
      </div>
    </div>
  );
};

const CalendarDay = ({
  number,
  selected,
  valid,
  date,
  isInRange,
  isRowStart,
  isRowEnd,
  rangePosition,
}) => {
  return (
    <div className="relative flex w-8 h-6" role="gridcell">
      <div
        className={`w-1/2 h-full ${
          isRowStart && rangePosition === "mid" ? "rounded-l-md" : ""
        } ${
          rangePosition === "mid" || rangePosition === "end"
            ? "bg-blue-100"
            : ""
        }`}
      ></div>
      <div
        className={`w-1/2 h-full ${
          isRowEnd && rangePosition === "mid" ? "rounded-r-md" : ""
        } ${
          rangePosition === "mid" || rangePosition === "start"
            ? "bg-blue-100"
            : ""
        }`}
      ></div>
      <div
        className={`absolute inset-0 flex items-center justify-center text-sm rounded-md ${
          rangePosition === "start" || rangePosition === "end" || selected
            ? "bg-blue-500 text-white font-bold"
            : "hover:bg-gray-200"
        }`}
        role="button"
        style={{ marginLeft: 2 }}
      >
        {number}
      </div>
    </div>
  );
};

function Calendar({
  selectDate = "05/10/2021",
  selectDateRange = "25/10/2021",
  focusDate = "01/10/2021",
  defaultCursor = "01/10/2021",
}) {
  const numberDays = new Date(focusDate.year, focusDate.month, 0).getDate();
  const dayInicio = new Date(
    selectDate.year,
    selectDate.month,
    selectDate.date
  ).getDay();
  const dayFin = new Date(
    selectDateRange.year,
    selectDateRange.month,
    selectDateRange.date
  ).getDay();
  console.log(numberDays, dayInicio, dayFin);

  return (
    <div role="grid">
      <ul className="flex" role="row">
        {DAYS.map((day) => (
          <li
            key={day}
            className="text-center text-xs text-gray-500 w-8 items-center justify-center"
            role="columnheader"
          >
            {day}
          </li>
        ))}
      </ul>
      <div>
        {/* {Array(6)
            .fill()
            .map((item, semanaKey) => (
              <div key={semanaKey} className="flex" style={{ marginTop: 6 }} role="row">
                {Array(7)
                  .fill()
                  .map((item, james) => (
                    <CalendarDay key={() => (james + 1) * semanaKey} number={() => daykey} isRowStart />
                  ))}
              </div>
            ))} */}
        <div className="flex" style={{ marginTop: 6 }} role="row">
          <span className="inline-block w-8 h-6" role="gridcell"></span>
          <CalendarDay number={1} isRowStart />
          <CalendarDay number={2} />
          <CalendarDay number={3} />
          <CalendarDay number={4} />
          <CalendarDay number={5} rangePosition="start" />
          <CalendarDay number={6} rangePosition="mid" isRowEnd />
        </div>
        <div className="flex" style={{ marginTop: 6 }} role="row">
          <CalendarDay number={7} rangePosition="mid" isRowStart />
          <CalendarDay number={8} rangePosition="mid" />
          <CalendarDay number={9} rangePosition="mid" />
          <CalendarDay number={10} rangePosition="mid" />
          <CalendarDay number={11} rangePosition="mid" />
          <CalendarDay number={12} rangePosition="mid" />
          <CalendarDay number={13} rangePosition="mid" isRowEnd />
        </div>
        <div className="flex" style={{ marginTop: 6 }} role="row">
          <CalendarDay number={14} rangePosition="mid" isRowStart />
          <CalendarDay number={15} rangePosition="mid" />
          <CalendarDay number={16} rangePosition="mid" />
          <CalendarDay number={17} rangePosition="mid" />
          <CalendarDay number={18} rangePosition="mid" />
          <CalendarDay number={19} rangePosition="mid" />
          <CalendarDay number={20} rangePosition="mid" isRowEnd />
        </div>
        <div className="flex" style={{ marginTop: 6 }} role="row">
          <CalendarDay number={21} rangePosition="mid" isRowStart />
          <CalendarDay number={22} rangePosition="mid" />
          <CalendarDay number={23} rangePosition="mid" />
          <CalendarDay number={24} rangePosition="mid" />
          <CalendarDay number={25} rangePosition="end" />
          <CalendarDay number={26} />
          <CalendarDay number={27} isRowEnd />
        </div>
        <div className="flex" style={{ marginTop: 6 }} role="row">
          <CalendarDay number={28} isRowStart />
          <CalendarDay number={29} />
          <CalendarDay number={30} />
          <CalendarDay number={31} />
        </div>
      </div>
    </div>
  );
}

const LabelInput = ({ label, active, name }) => {
  return (
    <label className="flex items-center space-x-2 -mx-3 px-2 py-1 cursor-pointer">
      <input type="radio" checked={active} name={name} />
      <BaseText size="value">{label}</BaseText>
    </label>
  );
};

export default CalendarPager;
