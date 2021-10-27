import * as React from "react";
import {Helmet} from 'react-helmet';
import {MuiHelmetConcern} from "./MuiHelmetConcern";

export default function MyTopHelmet() {
    return (
        <Helmet>
            <MuiHelmetConcern/>
        </Helmet>
    );
}
