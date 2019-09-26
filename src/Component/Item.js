import React, { useState, useEffect } from "react";
import { Typography, Checkbox, Grid, Button } from "@material-ui/core";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import EditRoundedIcon from "@material-ui/icons/EditRounded";

import AddItem from "./AddItem";

const Item = props => {
  const [state, setState] = useState({
    id: props.item.id,
    task: props.item.task,
    complete: props.item.complete
  });
  const [showEditPopup, setShowEditPopup] = useState(false);

  const handleChange = () => {
    props.completeTask(state.id);
  };

  const deleteItem = () => {
    props.deleteTask(state.id);
  };

  const editItem = e => {
    setShowEditPopup(true);
  };

  const closePopup = () => {
    setShowEditPopup(false);
  };

  const saveTask = task => {
    task = task.trim();
    if (task === "") {
      alert("Task is not entered.");
    } else {
      props.saveTask(task, state.id);
    }

    closePopup();
  };

  useEffect(() => {
    setState({
      id: props.item.id,
      task: props.item.task,
      complete: props.item.complete
    });
  }, [props]);

  return (
    <div>
      {showEditPopup && (
        <AddItem
          task={state.task}
          closePopup={closePopup}
          saveTask={saveTask}
        />
      )}
      <Grid container>
        <Grid item xs={1} sm={1} md={1}>
          <Checkbox
            type="checkbox"
            onChange={handleChange}
            checked={state.complete}
            color="primary"
          />
        </Grid>
        <Grid item xs={9} sm={9} md={9}>
          <Typography
            className={state.complete && "taskComplete"}
            variant="subtitle2"
            style={{ paddingTop: "12px", paddingBottom: "0" }}
          >
            {state.task}
          </Typography>
        </Grid>
        <Grid item xs={1} sm={1} md={1}>
          <Button className="actionButton" onClick={deleteItem} title="Delete">
            <DeleteRoundedIcon />
          </Button>
        </Grid>
        <Grid item xs={1} sm={1} md={1}>
          <Button className="actionButton" onClick={editItem} title="Edit">
            <EditRoundedIcon />
          </Button>
        </Grid>
      </Grid>
      <hr />
    </div>
  );
};

export default Item;
