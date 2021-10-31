import * as React from "react"
import MuiLink from "@mui/material/Link"
import { GatsbyLinkProps, Link as GatsbyLink } from "gatsby"

interface CustomGatsbyLink extends Omit<GatsbyLinkProps<Record<string, unknown>>, "ref"> {
  white?: boolean
}

const Link = React.forwardRef<GatsbyLink<any>, CustomGatsbyLink>(function Link(props, ref) {
  return <MuiLink sx={{ color: props.white ? "common.white" : "text.primary" }}
                  underline={'hover'}
                  component={GatsbyLink}
                  ref={ref} {...props} />
})

// const Link = function Link(props){
//     return <MuiLink sx={{color: 'text.primary'}}  {...props} />;
// };

export default Link
