import React, {PropTypes} from 'react'

const App = ({children}) =>
  <div>
    {children}
  </div>

App.propTypes = typeof __DEV__ && {
  children: PropTypes.object.isRequired
}

export default App
