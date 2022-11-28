// 70. create your Edit.jsx
// 73. upgrade your Edit.jsx form to have the appropriate action and method



const React = require("react");

class Edit extends React.Component {
    render() {
        return (
            <div>
                <head>
                    <title>Edit</title>
                </head>
                <h1> Edit Log Entry </h1><br />
                <nav style={{ color: "blue" }}>
                    <a href="/logs">Back to Captain's Log</a>
                </nav><br />
                <form action={`/logs/${this.props.log._id}?_method=PUT`} method="POST">
                    Title: <input type="text" name="title" defaultValue={this.props.log.title}></input><br />
                    Log Entry: <input type="textarea" name="entry" defaultValue={this.props.log.entry}></input><br />
                    Ship Is Broken: {this.props.log.shipIsBroken? <input type="checkbox" name="shipIsBroken" defaultChecked></input>: <input type="checkbox" name="shipIsBroken"></input>}<br />
                    <input type="submit" value={`Submit Changes to: ${this.props.log.title}`}></input><br />
                </form>
            </div>
        )
    }
}

module.exports = Edit