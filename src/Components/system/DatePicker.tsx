import { CalendarIcon } from "@chakra-ui/icons";
import { forwardRef, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import './date-picker-style.css';


// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const DatePickerBrisa = () => {
  const inputChangedHandler = (event: any) => {
    const updated = event.target.value;
  }
  const [startDate, setStartDate] = useState(new Date());
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <InputGroup>
      <Input value={value} onChange={(event) => inputChangedHandler(event)} placeholder="dd/mm/yyyy - dd/mm/yyyy" minW="130px" fontSize="14px" onClick={onClick} ref={ref} />
      <InputRightElement pointerEvents="none" color="gray.300" fontSize="1.2em" children={<CalendarIcon />} />
    </InputGroup>
  ));
  return (
    <div>
      <DatePicker dateFormat="dd/MM/yyyy" placeholderText="dd/mm/yyyy - dd/mm/yyyy" selected={startDate} onChange={(date: any) => setStartDate(date)} customInput={<ExampleCustomInput />} />
    </div>
  );
};

export default DatePickerBrisa
