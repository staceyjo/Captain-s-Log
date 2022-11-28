// 43. create Index.jsx
// 45. add link to create new log entry

const React = require('react');

class Index extends React.Component {
    render() {
        const { logs } = this.props
        return (
            <div>
                <head>
                    <title>Index</title>
                </head>
                <h1>Captain's Log Index</h1>
                <nav style={{ color: "blue" }}>
                    <a href="/logs/new">Create New Log</a>
                </nav>
                <ul>
                    {
                        logs.map((log, i) => {
                            return (
                                <li key={i}>
                                    Log title: {" "}
                                    <a href={`/logs/${log._id}`}>{log.title}</a>
                                    <br />
                                    {/* <a href={`/logs/${log._id}/edit`}>Edit This Log</a> */}
                                    {/* <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value="DELETE"></input>
                                    </form> */}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

module.exports = Index