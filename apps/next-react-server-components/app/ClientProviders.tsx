"use client"

import setupLocatorUI from "@amirrezadev1378/runtime"

if (process.env.NODE_ENV === "development") {
  setupLocatorUI()
}

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
