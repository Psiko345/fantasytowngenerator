import React, { Component } from "react";
import ThemeContext from "./Context/ThemeContext";
import AppTheme from "./Colours";
import NationSelect from "./NationSelectors/SingleNationSelector";

class Main extends Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return (
            <ThemeContext.Consumer>
                {
                    ([theme]) => {
                        const currentTheme = AppTheme[theme];
                        return (
                            <main style={{
                                padding: "1rem",
                                backgroundColor: `${currentTheme.backgroundColor}`,
                                color: `${currentTheme.textColor}`,

                            }}>
                                <NationSelect />
                            </main>
                        )

                    }
                }
            </ThemeContext.Consumer>
        );
    }

}
export default Main;
