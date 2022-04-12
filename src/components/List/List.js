import React, { useEffect, useState } from "react";
import "./index.css";
import { Btn } from "../Btn/Btn";

export const List = ({ newtask }) => {
  const [tasks, setTasks] = useState([
    {
      task: "Gym",
      checked: false,
    },
    {
      task: "Study",
      checked: false,
    },
    {
      task: "Job",
      checked: false,
    },
  ]);

  useEffect(() => {
    setTasks((previousState) => {    
      //console.log('task ' + newtask + ' has been created!');
      if (newtask != null) {
        // for double same values
        if (previousState.includes(newtask)) {
          return previousState;
        }
        return [...previousState, {task: newtask, checked: false}];
      } else {
        return previousState;
      }
    })
  }, [newtask]);

  // Event + parameter: https://stackoverflow.com/a/42597619
  const newclickhandler = (index) => {
    setTasks(tasks.map((eachTask, i) => {
      if (i === index) {
        return {...eachTask,checked:!eachTask.checked}
      }
      return eachTask;
    }));
  };

  function newclose(e, indexToClose) {
    //console.log("task " + indexToClose + " has been deleted");
    setTasks(tasks.filter((eachTask, eachIndex) => eachIndex !== indexToClose));
    e.stopPropagation();
  }
  const fakeEvent = {
    // For testing. -> https://github.com/enzymejs/enzyme/issues/323#issuecomment-209971872
    stopPropagation: () => false
  }

  return (
    <ul id="list">
      {tasks.map((eachTask, index) => (
        <li
          className={eachTask.checked ? "checked" : ""}
          onClick={() => newclickhandler(index)}
          key={`${eachTask.task}-${index}`}
          test-enzyme='list-tasks'
        >
          {eachTask.task}
          <Btn
            onClick={(e = fakeEvent) => newclose(e, index)}
            className="xButton"
            input_text={"\u00D7"}
            enzyme_test={"xBtn"}
          />
        </li>
      ))}
    </ul>
  );
};
