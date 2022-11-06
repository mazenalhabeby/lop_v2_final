"use client"
import {store} from "@/app/store"
import {ThemeProvider} from "next-themes"
import React, {ReactNode} from "react"
import {Provider} from "react-redux"

export default function AppContainer({children}: {children: ReactNode}) {
  return (
    <ThemeProvider
      enableSystem={true}
      attribute="class"
      disableTransitionOnChange
      enableColorScheme={false}>
      <Provider store={store}>{children}</Provider>
    </ThemeProvider>
  )
}
