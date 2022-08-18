import styled from 'styled-components'
const Block = styled.div`
  padding-top: ${props => props.paddingTop? props.paddingTop: ''};
  padding-bottom: ${props => props.paddingBottom? props.paddingBottom: ''};
  padding-right: ${props => props.paddingRight? props.paddingRight: ''};
  padding-left: ${props => props.paddingLeft? props.paddingLeft: ''};
  width: ${props => props.width? props.width: ''};
  height: ${props => props.height? props.height: ''};
  background-color: ${props=> props.backgroundColor? props.backgroundColor: 'white'};
  background-image: url(${props=> props.setimage? props.setimage: 'none'});
  background-repeat: ${props => props.backgroundRepeat? props.backgroundRepeat: ''};
  background-size: ${props => props.backgroundSize? props.backgroundSize: ''};
  position: ${props => props.position? props.position: ''};
  background-position: ${props => props.backgroundPosition? props.backgroundPosition: ''};

  position: relative;
  @media (max-width: 992px) {
    padding-bottom: ${props => props.SMpaddingBottom? props.SMpaddingBottom: ''};
  }
  @media(max-width: 600px) {
    padding-bottom: ${props => props.SMpaddingBottom? props.SMpaddingBottom: ''};
  }
`
export default Block;