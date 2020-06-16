import React from 'react';
import {AppContainer} from './styles'
import {Column} from './Column'
import {Card} from './Card'

const App = () => {
  return (
    <AppContainer>
      <Column text="To Do">
        <Card text="state??" />
      </Column>
      <Column text="In Progress">
        <Card text="adding more components" />
      </Column>
      <Column text="Done">
        <Card text="Started new App" />
      </Column>
    </AppContainer>
  )
}

export default App;
