import React from "react";


class HornedBeasts extends React.Component {
    render() {
        return (
            <>
            <h2>{this.props.title}</h2>
            <img src={ alt={this.props.title} this.props.imgUrl}  title={this.props.title} />
            <p>{this.props.description}</p>
            </>
        )
    }
}

export default HornedBeasts;