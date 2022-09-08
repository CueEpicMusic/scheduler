import React from "react";
import classNames from "classnames";

import "components/InterviewerListItem.scss";

export default function InterviewerListItem(props) {
  let buttonClass = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected === true
  });

  const selected = () => {
    if (props.selected === true) {
      return (props.name)
    }
  }

  return (
    <li className={buttonClass} onClick={() => props.setInterviewer(props.id)}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {selected()}
    </li>
  );
}
