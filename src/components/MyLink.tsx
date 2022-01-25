import * as React from "react"
import MuiLink from "@mui/material/Link"
import { GatsbyLinkProps, Link as GatsbyLink } from "gatsby"
import { SxProps } from "@mui/system"
import { Theme } from "@mui/material"

interface CustomGatsbyLink extends Omit<GatsbyLinkProps<Record<string, unknown>>, "ref"> {
  sx?: SxProps<Theme>
  underline?: "none" | "hover" | "always";
  external?: boolean
}

// MyLink uses a Material UI Link to render a Gatsby Link if necessary.
// If external === false then the Gatsby Link component will be used.
export const MyLink = React.forwardRef<GatsbyLink<any>, CustomGatsbyLink>(
  (props, ref) => {
    const { sx, underline, external, to, ...rest } = props
    return <MuiLink
      sx={{ ...sx }}
      underline={underline ? underline : "hover"}
      component={external ? undefined : GatsbyLink}
      ref={ref}
      href={external ? to : undefined}
      to={external ? undefined : to}
      {...rest}
    />
  })
