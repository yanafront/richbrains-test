import React from "react";

class ScienceIcon extends React.Component {
    displayName: "ScienceIcon";

    render() {
        return (
            <div>
                <svg
                    width="20"
                    height="16"
                    viewBox="0 0 20 16"
                    fill="none"
                >
                    <path
                        d="M4.27734 8.13889V12.5C4.27734 14.1 6.77734 15.5 9.77734 15.5C12.7773 15.5 15.2773 14.2 15.2773 12.5V8.13889M17.2773 6.91667V11C17.2773 11.8 17.9773 12.5 18.7773 12.5M18.7773 6L9.77734 11.5L0.777344 6L9.77734 0.5L18.7773 6Z"
                        stroke={this.props.color}
                    />
                </svg>
            </div>
        );
    }
}

export default ScienceIcon;