import React, { Component } from "react";
import AddTodo from "./Components/AddTodo";
import ListTask from "./Components/ListTask";
import "./App.css";
import { Card, CardContent, FormGroup, Grid } from "@mui/material";

export default class App extends Component {
  state = {
    todos: [],
    newTodo: "",
  };

  //remove a todo
  handleRemove = (id) => {
    this.setState({ todos: this.state.todos.filter((el) => el.id !== id) });
  };

  //mark a todo
  handleDone = (id) => {
    this.setState({
      todos: this.state.todos.map((el) =>
        el.id === id ? { ...el, isDone: !el.isDone } : el
      ),
    });
  };

  //change a todo
  handleChange = (e) => {
    this.setState({ newTodo: e.target.value });
  };

  //add todo
  add = (newAction) => {
    this.setState({ todos: [...this.state.todos, newAction] });
    this.setState({ newTodo: "" });
  };
  render() {
    return (
      <div className="App">
        <Grid container spacing={3}>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <div className="card__todo">
              <Card sx={{  minWidth: 275}}>
                <CardContent>
                  <FormGroup>
                    <AddTodo
                      newAction={this.state.newTodo}
                      change={this.handleChange}
                      add={this.add}
                    />
                    <ListTask
                      list={this.state.todos}
                      delete={this.handleRemove}
                      done={this.handleDone}
                    />
                  </FormGroup>
                </CardContent>
              </Card>
            </div>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </div>
    );
  }
}
