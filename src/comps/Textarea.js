import React from "react";
import { FormTextarea } from "shards-react";

export default class BasicFormTextarea extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: null };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    const { value } = this.state;
    return (
      <div>
        <h4 className="mb-2">
          {(value && `🗣 Message`) || "🤔 Message"}
        </h4>
        <FormTextarea size="lg" onChange={this.handleChange} placeholder="type your message here"/>
      </div>
    );
  }
}