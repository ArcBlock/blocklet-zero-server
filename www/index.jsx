import "./style.css";

export default class extends React.Component {
  static async getInitialProps() {
    var json = await fetch("/api").then(resp => resp.json());
    return { time: json.time };
  }

  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <p>This is the index page, written in React.</p>
        <p>
          Current server time is: {this.props.time}. This comes from our <i>api.js</i>{" "}
          endpoint.
        </p>
        <br />
        <a href="/about">Go to /about</a>
      </div>
    );
  }
}

