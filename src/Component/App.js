import React from "react";
import "../Styles/style.css";
import { Grid, Card, Typography } from "@material-ui/core";

import TodoList from "./TodoList.js";

function App() {
  return (
    <Grid container alignItems="center" justify="center" className="margin20">
      <Grid item xs={12} sm={12} md={12} lg={5}>
        <Card className="mainCard">
          <Typography variant="h5" className="heading">
            My ToDo List
          </Typography>
          <hr className="headHr" />

          <TodoList />
        </Card>
      </Grid>
    </Grid>
  );
}

export default App;
