import * as React from "react"
import MuiLink from "@mui/material/Link"
import { GatsbyLinkProps, Link as GatsbyLink } from "gatsby"

interface CustomGatsbyLink extends Omit<GatsbyLinkProps<Record<string, unknown>>, "ref"> {
  white?: boolean
  underline?: "none" | "hover" | "always";
  external?: boolean
}

const Link = React.forwardRef<GatsbyLink<any>, CustomGatsbyLink>(function Link(props, ref) {
  const { white, underline, external, to, ...rest } = props
  return <MuiLink
    sx={{ [props.white ? "color" : ""]: "common.white" }}
    underline={underline ? underline : "hover"}
    component={external ? undefined : GatsbyLink}
    ref={ref}
    href={external ? to : undefined}
    to={external ? undefined : to}
    {...rest}
  />
})

export default Link
