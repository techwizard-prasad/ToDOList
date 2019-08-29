import React from "react";
import { Typography, Checkbox, Grid, Button } from "@material-ui/core";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.item.id,
      task: this.props.item.task,
      complete: this.props.item.complete
    };
  }
  handleChange = () => {
    this.props.completeTask(this.state.id);
  };

  deleteItem = () => {
    this.props.deleteTask(this.state.id);
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      id: nextProps.item.id,
      task: nextProps.item.task,
      complete: nextProps.item.complete
    });
  }
  render() {
    return (
      <div>
        <Grid container alignItems="left" justify="left">
          <Grid item xs={1} sm={1} md={1}>
            <Checkbox
              type="checkbox"
              onChange={this.handleChange}
              checked={this.state.complete}
              color="primary"
            />
          </Grid>
          <Grid item xs={10} sm={10} md={10}>
            <Typography
              className={this.state.complete && "taskComplete"}
              variant="subtitle2"
              style={{ paddingTop: "12px", paddingBottom: "0" }}
            >
              {this.state.task}
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1} md={1}>
            <Button
              className="deleteButton"
              onClick={this.deleteItem}
              title="Delete"
            >
              <DeleteRoundedIcon style={{ marginTop: "10px" }} />
            </Button>
          </Grid>
        </Grid>
        <hr />
      </div>
    );
  }
}

export default Item;
