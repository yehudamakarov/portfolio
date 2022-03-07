import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Theme,
  Typography
} from "@mui/material"
import * as React from "react"
import { MyLink } from "../components/MyLink"
import { SxProps } from "@mui/system"

const typographySelectionForBody = "body1" as const

const isExternalLink = (href: string) => {
  return href.startsWith("/static") || (href[0] !== "/" && href[0] !== "#")
}

const isNotAnchorOrImageLink = className => {
  return !(className === "anchor before" || className === "gatsby-resp-image-link")
}

const getTypography = (header: "h1" | "h2" | "h3" | "h4" | "h5" | "h6") => (p) => {
  const { id, ...rest } = p
  rest.children.unshift(<span key={id} className={"anchor-offset"} id={id} />)
  return <Typography sx={{ mt: header === "h1" ? 0 : 2 }} variant={header} {...rest} />
}

// noinspection JSPotentiallyInvalidConstructorUsage
const getLinks = (p) => {
  const { href, className, ...rest } = p
  const isExternal = isExternalLink(href)
  return isNotAnchorOrImageLink(className) ?
    <MyLink external={isExternal} to={href} {...rest} /> : <a {...p} />
}

const getParagraphs = (p) => <Typography sx={{ my: 2 }} variant={typographySelectionForBody} {...p} />

const getTables = (p) => <TableContainer component={Paper} sx={{ my: 2 }}><Table {...p} /></TableContainer>

const getTableHeads = (p) => <TableHead {...p} />

const getTableHeaderCells = (p) => <TableCell {...p} sx={(theme) => ({
  ...(theme.typography.subtitle1),
  bgcolor: theme.palette.mode === "light" ? "grey.300" : "grey.800"
})} />

const getTableBodys = (p) => <TableBody {...p} />

const getTableRows = (p) => <TableRow {...p} />

const getTableCells = (p) => <TableCell {...p} />

const getFootnoteRefs = (p) => {
  const { id, ...rest } = p
  if (!(id as string)?.startsWith("fnref")) {
    return <sup {...p} />
  }
  rest.children.unshift(<span key={id} className={"anchor-offset"} id={id} />)
  return <sup style={{ position: "relative" }} {...rest} />
}

const getFootnoteLinks = (p) => {
  const { id, ...rest } = p
  if (!(id as string)?.startsWith("fn")) {
    return <li {...p} />
  }
  rest.children.unshift(<span key={id} className={"anchor-offset"} id={id} />)
  return <li style={{ position: "relative" }} {...rest} />
}

export const moreMarkdownStyling = (adjustLinkLogoForSmallerScreen: boolean): SxProps<Theme> => ({
    "& .anchor-offset": {
      top: -80, // Offset for the anchor.
      position: "absolute"
    },
    "& h1, & h2, & h3, & h4, & h5, & h6": {
      "& .anchor": {
        // To prevent the link to get the focus.
        display: "none",
        top: adjustLinkLogoForSmallerScreen ? "-5px" : 0
      },
      "& a:not(.anchor):hover": {
        color: "currentColor",
        borderBottom: "1px solid currentColor",
        textDecoration: "none"
      },
      "&:hover .anchor": {
        display: "inline-block",
        padding: adjustLinkLogoForSmallerScreen ? "0 2px" : "0 4px",
        color: "text.secondary",
        "&:hover": {
          color: "text.primary"
        },
        "& svg": {
          width: adjustLinkLogoForSmallerScreen ? "0.5em" : "0.7em",
          height: adjustLinkLogoForSmallerScreen ? "0.5em" : "0.7em",
          fill: "currentColor"
        }
      }
    },
    "& blockquote": {
      bgcolor: (theme) => theme.palette.mode === "light" ? "grey.300" : "grey.800",
      borderLeft: 8,
      borderColor: (theme) => theme.palette.mode === "light" ? "grey.800" : "grey.900",
      pr: 3,
      pl: 2,
      ml: 4,
      py: 1,
      marginInline: 2
    },
    "& ol, & li": (theme) => ({
      ...(theme.typography[typographySelectionForBody])
    }),
    "& .footnotes": (theme) => ({
      ...(theme.typography[typographySelectionForBody])
    })
  }
)

export const customMarkdownComponents = {
  a: getLinks,
  p: getParagraphs,
  table: getTables,
  thead: getTableHeads,
  th: getTableHeaderCells,
  tbody: getTableBodys,
  tr: getTableRows,
  td: getTableCells,
  h1: getTypography("h1"),
  h2: getTypography("h2"),
  h3: getTypography("h3"),
  h4: getTypography("h4"),
  h5: getTypography("h5"),
  h6: getTypography("h6"),
  sup: getFootnoteRefs,
  li: getFootnoteLinks
}
