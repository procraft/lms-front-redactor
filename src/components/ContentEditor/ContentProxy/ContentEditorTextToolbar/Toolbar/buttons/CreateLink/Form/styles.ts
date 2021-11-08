import styled from 'styled-components'

export const LinkFormLinkWrapperStyled = styled.div`
  display: flex;
  align-items: center;
`

export const LinkFormLinksListStyled = styled.div`
  margin-top: 15px;
  overflow-y: auto;
  max-height: 150px;

  > div {
    margin: 10px 0;
    cursor: pointer;
  }
`

export const LinkFormStyled = styled.div`
  /**
  MUI Grid margins compability
  */
  padding: 4px;
`
