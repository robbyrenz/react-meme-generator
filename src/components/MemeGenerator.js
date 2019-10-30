import React from "react"

class MemeGenerator extends React.Component {
    constructor() {
        super()
        this.state = {
            topText: "Hi",
            bottomText: "What is up?"
        }
    }

    render() {
        return (
            <div>
                <h2>{this.state.topText}</h2>
                <h3>{this.state.bottomText}</h3>
            </div>
        )
    }
}

export default MemeGenerator
