import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Item from "./Item.js";
import AddItem from "./AddItem";

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
      maxId: 0,
      showPopup: false
    };
  }
  handleClick = e => {
    this.setState({
      showPopup: true
    });
  };

  closePopup = () => {
    this.setState({
      showPopup: false
    });
  };

  saveTask = task => {
    task = task.trim();
    if (task !== "") {
      this.setState(prevState => {
        let newList = prevState.list;
        newList.push({
          id: prevState.maxId + 1,
          task: task,
          complete: false
        });
        newList = this.sortList(newList);
        return {
          list: newList,
          maxId: prevState.maxId + 1,
          showPopup: false
        };
      });
    } else {
      alert("Task is not entered.");
      this.setState({
        showPopup: false
      });
    }
  };

  sortList(list) {
    return list.sort((a, b) => {
      return a.complete - b.complete;
    });
  }

  deleteTask = id => {
    this.setState(prevState => {
      let newList = prevState.list;
      newList = newList.filter(item => Number(item.id) !== Number(id));

      return {
        list: newList
      };
    });
  };

  completeTask = id => {
    this.setState(prevState => {
      let newList = prevState.list.map(item => {
        return {
          id: item.id,
          task: item.task,
          complete:
            Number(item.id) === Number(id) ? !item.complete : item.complete
        };
      });
      newList = this.sortList(newList);
      return {
        list: newList
      };
    });
  };

  render() {
    const listItems = this.state.list.map(item => (
      <div>
        <Item
          item={item}
          deleteTask={this.deleteTask}
          completeTask={this.completeTask}
        />
      </div>
    ));
    return (
      <div className="listMainContainer">
        <div
          className={
            this.state.showPopup ? "listContainer disable" : "listContainer"
          }
        >
          {listItems.length > 0 ? (
            listItems
          ) : (
            <Typography variant="h6">There are no tasks.</Typography>
          )}
        </div>

        <Grid container>
          <Grid item md={10} sm={6} xs={3}></Grid>
          <Grid item md={2} sm={6} xs={9}>
            {this.state.showPopup && (
              <AddItem closePopup={this.closePopup} saveTask={this.saveTask} />
            )}
            <Fab
              color="primary"
              aria-label="add"
              className="AddIcon"
              title="Add task"
              onClick={this.handleClick}
            >
              <AddIcon />
            </Fab>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default TodoList;
