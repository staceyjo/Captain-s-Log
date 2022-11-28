// 50. cd views, touch Show.jsx and add HTML:
// 50b. require React
// 51. show the title
// 52. show the entry
// 53. show whether the ship is broken or not
// 54. add a link back to the index page
// 55. if you had added time stamps to your model, display the date the entry was created

const React = require('react');

class Show extends React.Component {
    render() {
        const { title, entry, shipIsBroken, createdAt} = this.props.log
        return (
            <div>
                <head>
                    <title>{`${title}`}</title>
                </head>
                <nav style={{ color: "blue" }}>
                    <a href="/logs">Back to Captain's Log</a>
                </nav><br />
                <h1>Log Title: {`${title}`}</h1>
                <h2>Log Entry:</h2>
                <h3>{entry}</h3>
                <h2>Is Ship Broken?</h2>
                <h3>{`${shipIsBroken}`}</h3>
                <h2>Entry Created:</h2>
                <h3>{`${createdAt}`}</h3>
                {/* <h2>Entry Updated:</h2>
                <h3>{`${updatedAt}`}</h3> */}
            </div>
        )
    }
}

module.exports = Show