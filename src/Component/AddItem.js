import React from "react";
import { Card, TextField, Button } from "@material-ui/core";

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ""
    };
  }

  handleChange = e => {
    this.setState({
      task: e.target.value
    });
  };

  handleSaveClick = () => {
    this.props.saveTask(this.state.task);
  };

  render() {
    return (
      <Card className="popup">
        <div className="popContainer">
          <TextField
            placeholder="Enter task"
            label="Task"
            value={this.state.task}
            onChange={this.handleChange}
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
              onClick={this.handleSaveClick}
            >
              Save
            </Button>
            <Button
              variant="contained"
              className="popupButton"
              onClick={this.props.closePopup}
            >
              Cancel
            </Button>
          </div>
        </div>
      </Card>
    );
  }
}

export default AddItem;
