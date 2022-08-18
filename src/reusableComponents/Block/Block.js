import styled from 'styled-components'
const Block = styled.div`
  padding-top: ${props => props.paddingTop? props.paddingTop: ''};
  padding-bottom: ${props => props.paddingBottom? props.paddingBottom: ''};
  padding-right: ${props => props.paddingRight? props.paddingRight: ''};
  padding-left: ${props => props.paddingLeft? props.paddingLeft: ''};
  background-color: ${props=> props.backgroundColor? props.backgroundColor: 'transparent'};
  position: relative;
  @media (max-width: 992px) {
    padding-bottom: ${props => props.SMpaddingBottom? props.SMpaddingBottom: ''};
  }
  @media(max-width: 600px) {
    padding-bottom: ${props => props.SMpaddingBottom? props.SMpaddingBottom: ''};
  }
`
export default Block;