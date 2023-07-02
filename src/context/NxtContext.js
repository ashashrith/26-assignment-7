import React from 'react'

const NxtContext = React.createContext({
  isDarkTheme: false,
  toggleDarkTheme: () => {},
  failedViewReload: () => {},
})

export default NxtContext
