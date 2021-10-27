import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from '../components/ProTip';
import Link from '../components/Link';
import Copyright from '../components/Copyright';
import {Button} from "@mui/material";
import {DarkModeContext, DarkModeContextType} from "../../plugins/gatsby-plugin-top-layout/TopLayout";

export default function About() {
    const handler = (value: DarkModeContextType) => {
        value.setDarkModeEnabled(!value.darkModeEnabled)
    }
    return (
        <Container maxWidth="sm">
            <Box sx={{my: 4}}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Gatsby v5 example
                </Typography>
                <DarkModeContext.Consumer>{(value => <Button onClick={() => handler(value)}>dark
                    mode</Button>)}</DarkModeContext.Consumer>

                <Link to="/">Go to the main page</Link>
                <ProTip/>
                <Copyright/>
            </Box>
        </Container>
    );
}
