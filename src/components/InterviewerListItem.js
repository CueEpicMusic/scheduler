import React from "react";
import classNames from "classnames";

import "components/InterviewerListItem.scss";

export default function InterviewerListItem(props) {
  let interviewerListItemClass = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected === true
  });

  const selected = () => {
    if (props.selected === true) {
      return (props.name)
    }
  }

  return (
    <li className={interviewerListItemClass} onClick={props.setInterviewer}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {selected()}
    </li>
  );
}
