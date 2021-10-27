import * as React from 'react';
import MuiLink from '@mui/material/Link';
import {GatsbyLinkProps, Link as GatsbyLink} from 'gatsby';

interface CustomGatsbyLink extends Omit<GatsbyLinkProps<Record<string, unknown>>, 'ref'> {
}

const Link = React.forwardRef<GatsbyLink<any>, CustomGatsbyLink>(function Link(props, ref) {
    return <MuiLink color="inherit" component={GatsbyLink} ref={ref} {...props} />;
});

export default Link;
