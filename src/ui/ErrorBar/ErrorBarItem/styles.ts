import styled from 'styled-components'

export const ErrorBarItemStyled = styled.div`
  padding: 10px;
  font-size: 16px;
  display: flex;
  border-bottom: 1px solid #ddd;
`
export const ErrorBarItemMessageStyled = styled.div`
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`
export const ErrorBarItemButtonStyled = styled.button`
  border-radius: 50%;
  width: 1.4rem;
  height: 1.4rem;
  line-height: 1rem;
  text-align: center;
  padding: 0;
  border: 1px solid grey;
  cursor: pointer;
`
