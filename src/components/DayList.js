import React from "react";

import DayListItem from "components/DayListItem";

export default function DayList(props) {
  const days = props.days;
  const daylist = days.map((day) => {
    return (
      <DayListItem
        key={day.id}
        {...day}
        selected={day.name === props.value}
        setDay={props.onChange}
      />
    );
  });
  return <>{daylist}</>;
}
