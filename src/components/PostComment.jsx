import React, { Component } from "react";
import * as api from "../apiReq";

export default class PostComment extends Component {
  state = {
    thoughts: "",
    transport: 1,
    pubsNearGround: 1,
    valueForMoneyInGround: 1,
    commentSubmit: false,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const id = this.props.id;
    const {
      thoughts,
      transport,
      pubsNearGround,
      valueForMoneyInGround,
    } = this.state;

    const body = { thoughts, transport, pubsNearGround, valueForMoneyInGround };
    api.postComment(body, id).then((comment) => {
      this.props.addComment(comment);
    });
  };

  handleChange = (event) => {
    const { value } = event.target;
    const name = event.target.name;
    if (name === "thoughts") {
      this.setState({ [name]: value });
    } else {
      this.setState({ [name]: Number(value) });
    }
  };

  render() {
    return (
      <form className="add-comment-form" onSubmit={this.handleSubmit}>
        <p>Add comment:</p>
        <label> Value for money in stadium</label>
        <select
          value={this.state.valueForMoneyInGround}
          id="valueForMoneyInGround"
          name="valueForMoneyInGround"
          onChange={this.handleChange}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
        <label>Transport: </label>
        <select
          onChange={this.handleChange}
          value={this.state.transport}
          id="transport"
          name="transport"
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
        <label> Pubs near to ground</label>
        <select
          value={this.state.pubsNearGround}
          id="pubsNearGround"
          name="pubsNearGround"
          onChange={this.handleChange}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>

        <textarea
          rows="4"
          cols="40"
          type="text"
          name="thoughts"
          id="thoughts"
          value={this.state.thoughts}
          onChange={this.handleChange}
          placeholder="comment..."
        ></textarea>
        <button className="submit-button" type="submit">
          Submit comment
        </button>
      </form>
    );
  }
}
