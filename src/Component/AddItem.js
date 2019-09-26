import React, { useState } from "react";
import { Card, TextField, Button } from "@material-ui/core";

const AddItem = props => {
  const [task, setTask] = useState("");

  const handleChange = e => {
    setTask(e.target.value);
  };

  const handleSaveClick = () => {
    props.saveTask(task);
  };

  const content = (
    <Card className="popup">
      <div className="popContainer">
        <TextField
          placeholder="Enter task"
          label="Task"
          value={task}
          onChange={handleChange}
          multiline
          variant="filled"
          rows="4"
          style={{ width: "100%", overflowY: "auto" }}
        />
        <div style={{ float: "right" }}>
          <Button
            color="primary"
            variant="contained"
            className="popupButton"
            onClick={handleSaveClick}
          >
            Save
          </Button>
          <Button
            variant="contained"
            className="popupButton"
            onClick={props.closePopup}
          >
            Cancel
          </Button>
        </div>
      </div>
    </Card>
  );
  return content;
};

export default AddItem;
