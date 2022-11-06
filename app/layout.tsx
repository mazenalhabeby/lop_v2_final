import "@/styles/globals.css"
import NavBar from "./components/navbar/NavBar"
import AppContainer from "./AppContainer"

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html>
      <head></head>
      <body>
        <AppContainer>
          <NavBar />
          {children}
        </AppContainer>
      </body>
    </html>
  )
}
