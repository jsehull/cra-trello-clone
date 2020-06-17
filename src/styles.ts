import styled from 'styled-components'

export const AppContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  background-color: #3179ba;
`
export const ColumnContainer = styled.div`
  margin-right: 20px;
  padding: 8px 8px;
  flex-grow: 0;
  width: 300px;
  min-height: 40px;
  background-color: #ebecf0;
  border-radius: 3px;
`

export const ColumnTitle = styled.div`
  padding: 6px 16px 12px;
  font-weight: bold;
`

export const CardContainer = styled.div`
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  max-width: 300px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: #091e4240 0px 1px 0px 0px;
  cursor: pointer;
`
interface AddItemButtonProps {
  dark?: boolean
}

export const AddItemButton = styled.button<AddItemButtonProps>`
  padding: 10px 12px;
  width: 100%;
  max-width: 300px;
  background-color: #ffffff3d;
  border-radius: 3px;
  border: none;
  text-align: left;
  color: ${props => (props.dark ? "#000" : "#fff")};
  transition: background 85ms ease-in;
  cursor: pointer;
  &:hover {
    background-color: #ffffff52;
  }
`

export const NewItemFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 300px;
`

export const NewItemButton = styled.button`
  padding: 6px 12px;
  background-color: #5aac44;
  border-radius: 3px;
  border: none;
  box-shadow: none;
  color: #fff;
  text-align: center;
`

export const NewItemInput = styled.input`
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  width: 100%;
  border-radius: 3px;
  border: none;
  box-shadow: #091e4240 0px 1px 0px 0px;
`
