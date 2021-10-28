import {DarkModeContext, DarkModeContextType} from "../../../../../../plugins/gatsby-plugin-top-layout/TopLayout";
import {IconButton} from "@mui/material";
import {Brightness4} from "@mui/icons-material"
import * as React from "react";

export default function DarkModeButton() {
    const handler = (value: DarkModeContextType) => {
        value.setDarkModeEnabled(!value.darkModeEnabled)
    }
    return (
        <DarkModeContext.Consumer>
            {(value => (
                <IconButton onClick={() => handler(value)}>
                    <Brightness4 sx={{color: 'text.primary'}}/>
                </IconButton>
            ))}
        </DarkModeContext.Consumer>
    )
}



