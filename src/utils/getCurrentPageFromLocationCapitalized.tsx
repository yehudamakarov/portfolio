import { WindowLocation } from "@reach/router"

function capitalize(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

export function getCurrentPageFromLocationCapitalized(location: WindowLocation<WindowLocation["state"]>) {
  const onHomePage = location.pathname === "/"
  const pageName = onHomePage ? "home" : /[^/]*$/.exec(location.pathname)[0]
  const pageParts = pageName.split("-").length > 0 ? pageName.split("-") : [pageName]
  return pageParts
    .map((s, i) => i === 0 ? capitalize(s) : s)
    .join(" ")
}
