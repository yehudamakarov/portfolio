import { WindowLocation } from "@reach/router"

export const capitalize = (word: string) => word.charAt(0).toUpperCase() + word.slice(1)

export const getAfterLastSlash = pathname => /[^/]*$/.exec(pathname)[0]

export const getCurrentPageFromLocationCapitalized = (location: WindowLocation<WindowLocation["state"]>) => {
  const onHomePage = location.pathname === "/"
  const pageName = onHomePage ? "home" : getAfterLastSlash(location.pathname)
  const pageParts = pageName.split("-").length > 0 ? pageName.split("-") : [pageName]
  return pageParts
    .map((s, i) => i === 0 ? capitalize(s) : s)
    .join(" ")
}
