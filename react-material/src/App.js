import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';
import NavBar from './NavBar';
import Posts from './Posts';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <AppBar color="primary" position="static">
        <ToolBar>
          <TypoGraphy variant="title" color="inherit">My Header</TypoGraphy>
          <NavBar />
        </ToolBar>
      </AppBar>

      <Posts />
      <Contact />
    </div>
  );
}

export default App;
