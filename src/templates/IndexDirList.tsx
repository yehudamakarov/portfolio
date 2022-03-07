// todo give full path and current level
import * as React from "react"
import { useEffect, useRef, useState } from "react"
import { WindowLocation } from "@reach/router"
import { FoldersImmediatelyUnderQuery } from "../../gatsby-graphql"
import { animated, config, useTrail } from "react-spring"
import { IndexDirListEl } from "./IndexDirListEl"
import { IndexDirListHeader } from "./IndexDirListHeader"
import Xarrow from "react-xarrows"
import { useTheme } from "@mui/material"

export function IndexDirList(props: {
  location: WindowLocation<WindowLocation["state"]>,
  subFolders: FoldersImmediatelyUnderQuery["indexes"]["nodes"]
}) {
  const theme = useTheme()
  const [width, setWidth] = useState(800)
  const trail = useTrail(1 + props.subFolders.length, {
    from: { opacity: 0, transform: "translate3d(5%,0,0)" },
    to: { opacity: 1, transform: "translate3d(0%,0,0)" },
    config: config.stiff
  })

  const ref = useRef(null)

  useEffect(() => {
    setWidth(ref.current.offsetWidth)
  })

  return (
    <>
      {trail.map((value, index) => (
        index !== 0 ? (
          <>
            <animated.div key={index} style={value}>
              <IndexDirListEl arrowId={"listEl" + String(index)} dirName={props.subFolders[index - 1].path} />
              <Xarrow
                start={"listHeader"}
                end={"listEl" + String(index)}
                lineColor={theme.palette.grey.A200}
                strokeWidth={3}
                showHead={false}
                startAnchor={{
                  position: "bottom",
                  offset: { x: -((width / 2) - parseInt(theme.spacing(2).slice(0, 2))) }
                }}
                endAnchor={"left"}
                path={"grid"}
              />
            </animated.div>
          </>
        ) : (
          <animated.div ref={ref} id={"listHeader"} key={index} style={value}>
            <IndexDirListHeader dirName={props.location.pathname} />
          </animated.div>
        )))
      }
    </>
  )
}
