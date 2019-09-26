import React, { useState } from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";

import Item from "./Item.js";
import AddItem from "./AddItem";

const TodoList = () => {
  const [list, setList] = useState([]);
  const [maxId, setMaxId] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = e => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const saveTask = (task, id) => {
    if (id) {
      let newList = list.map(item => {
        return {
          id: item.id,
          task: Number(item.id) === Number(id) ? task : item.task,
          complete: item.complete
        };
      });
      newList = sortList(newList);
      setList(newList);
    } else {
      task = task.trim();

      if (task !== "") {
        let newList = list;
        newList.push({
          id: maxId + 1,
          task: task,
          complete: false
        });
        newList = sortList(newList);

        setList(newList);
        setMaxId(maxId + 1);
        setShowPopup(false);
      } else {
        alert("Task is not entered.");
        setShowPopup(false);
      }
    }
  };

  const sortList = list => {
    return list.sort((a, b) => {
      return a.complete - b.complete;
    });
  };

  const deleteTask = id => {
    let newList = list;
    newList = newList.filter(item => Number(item.id) !== Number(id));
    setList(newList);
  };

  const completeTask = id => {
    let newList = list.map(item => {
      return {
        id: item.id,
        task: item.task,
        complete:
          Number(item.id) === Number(id) ? !item.complete : item.complete
      };
    });
    newList = sortList(newList);

    setList(newList);
  };

  const listItems = list.map((item, key) => (
    <div key={key}>
      <Item
        item={item}
        deleteTask={deleteTask}
        completeTask={completeTask}
        saveTask={saveTask}
      />
    </div>
  ));

  const content = (
    <div className="listMainContainer">
      <div className={showPopup ? "listContainer disable" : "listContainer"}>
        {listItems.length > 0 ? (
          listItems
        ) : (
          <Typography variant="h6">There are no tasks.</Typography>
        )}
      </div>

      {showPopup && (
        <AddItem task="" closePopup={closePopup} saveTask={saveTask} />
      )}
      <Fab
        color="primary"
        aria-label="add"
        className="AddIcon"
        title="Add task"
        onClick={handleClick}
        style={{ position: "fixed", top: "85%", left: "65%" }}
      >
        <AddIcon />
      </Fab>
    </div>
  );

  return content;
};
export default TodoList;
