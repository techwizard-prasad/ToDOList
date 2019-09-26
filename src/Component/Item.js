import React, { useState, useEffect } from "react";
import { Typography, Checkbox, Grid, Button } from "@material-ui/core";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";

const Item = props => {
  const [state, setState] = useState({
    id: props.item.id,
    task: props.item.task,
    complete: props.item.complete
  });

  const handleChange = () => {
    props.completeTask(state.id);
  };

  const deleteItem = () => {
    props.deleteTask(state.id);
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
      <Grid container alignItems="left" justify="left">
        <Grid item xs={1} sm={1} md={1}>
          <Checkbox
            type="checkbox"
            onChange={handleChange}
            checked={state.complete}
            color="primary"
          />
        </Grid>
        <Grid item xs={10} sm={10} md={10}>
          <Typography
            className={state.complete && "taskComplete"}
            variant="subtitle2"
            style={{ paddingTop: "12px", paddingBottom: "0" }}
          >
            {state.task}
          </Typography>
        </Grid>
        <Grid item xs={1} sm={1} md={1}>
          <Button className="deleteButton" onClick={deleteItem} title="Delete">
            <DeleteRoundedIcon style={{ marginTop: "10px" }} />
          </Button>
        </Grid>
      </Grid>
      <hr />
    </div>
  );
};

export default Item;
