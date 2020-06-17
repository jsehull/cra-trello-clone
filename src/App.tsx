import React from 'react';
import {AppContainer} from './styles'
import {Column} from './Column'
import {Card} from './Card'
import {AddNewItem} from './AddNewItem'

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
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={console.log} />
    </AppContainer>
  )
}

export default App;
