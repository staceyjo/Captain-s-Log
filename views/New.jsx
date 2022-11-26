// 19. Create the New view, it should contain a form with the following:
// form with action="/logs" and method="POST"
// input type text for a title
// input type textarea for an entry
// input type checkbox for shipIsBroken
// input type submit


const React = require('react')

class New extends React.Component {
    render() {
        return (
            <div>
                <h1> Create New Log Entry </h1><br />
                <nav style={{ color: "blue" }}>
                    <a href="/logs">Back to Captain's Log</a>
                </nav><br />
                <form action="/logs" method="POST">
                    Title: <input type="text" name="title"></input><br />
                    Log Entry: <input type="textarea" name="entry"></input><br />
                    Ship Is Broken: <input type="checkbox" name="shipIsBroken"></input><br />
                    <input type="submit" value="Submit"></input><br />
                </form>
            </div>
        );
    }
}
module.exports = New;