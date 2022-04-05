// todo give full path and current level
import * as React from "react"
import { useState } from "react"
import { WindowLocation } from "@reach/router"
import { FoldersImmediatelyUnderQuery } from "../../gatsby-graphql"
import { IndexDirListEl } from "./IndexDirListEl"
import { IndexDirListHeader } from "./IndexDirListHeader"
import Xarrow from "react-xarrows"
import { Box, useTheme } from "@mui/material"
import useMeasure from "react-use-measure"
import { animated, config, useTransition } from "react-spring"

export function IndexDirList(props: {
  location: WindowLocation<WindowLocation["state"]>,
  subFolders: FoldersImmediatelyUnderQuery["indexes"]["nodes"]
}) {
  const theme = useTheme()
  const [ref, bounds] = useMeasure({ debounce: 200 })
  const [items, setItems] = useState([{ id: "listHeader", path: "" }].concat(props.subFolders))
  const [moreItems, setMoreItems] = useState([])
  // const items = [{ id: "listHeader", path: "" }].concat(props.subFolders)
  console.log("items: ", items)

  const transition = useTransition(items, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.stiff,
    trail: 200,
    onRest: () => {
      setMoreItems(props.subFolders)
    }
  })

  const lineTransition = useTransition(moreItems, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.stiff,
    trail: 150
  })


  return (
    <>
      {transition((style, item) => item.id === "listHeader"
        ? (
          <animated.div style={style}>
            <Box ref={ref} id={"listHeader"}>
              <IndexDirListHeader dirName={props.location.pathname} />
            </Box>
          </animated.div>
        )
        : (
          <animated.div style={style}>
            <Box key={item.id} sx={{ pl: 5 }}>
              <IndexDirListEl arrowId={item.id} dirName={item.path} />
            </Box>
          </animated.div>
        ))}
      {lineTransition((style, item) => (
        <animated.div style={style}>
          <Xarrow
            start={"listHeader"}
            end={item.id}
            lineColor={theme.palette.primary.main}
            strokeWidth={2}
            showHead={false}
            startAnchor={{
              position: "bottom",
              offset: { x: -((bounds.width / 2) - parseInt(theme.spacing(2).slice(0, 2))) }
            }}
            endAnchor={"left"}
            curveness={1}
          />
        </animated.div>
      ))}
    </>
  )
}
