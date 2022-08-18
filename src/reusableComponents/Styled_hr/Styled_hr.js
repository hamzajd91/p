import styled from 'styled-components'
const Styled_hr = styled.hr`
  color: ${props => props.color? props.color: '#131419'};
  opacity:${props => props.opacity? props.opacity: '0.25'};
  border:${props => props.border? props.border: ''};
  padding-inline: ${props => props.paddingInline? props.paddingInline: ''};
  padding-block: ${props => props.paddingBlock? props.paddingBlock: ''};
  border-radius: ${props => props.borderRadius? props.borderRadius: ''};
 display:flex;
  width:${props => props.width? props.width: '100%'};
  margin-bottom: ${props => props.marginBottom? props.marginBottom: ''};
  margin-top: ${props => props.marginTop? props.marginTop: ''};
  justify-content: ${props => props.JFcontent? props.JFcontent: 'center'};
  margin-right: ${props => props.marginRight? props.marginRight: ''};
  margin-left: ${props => props.marginLeft? props.marginLeft: ''};

  @media (max-width: 992px) {
    width:${props => props.Mwidth? props.Mwidth: '100%'};
    margin-bottom: ${props => props.SMmarginBottom? props.SMmarginBottom: ''};
  }

  @media(max-width: 600px) {
    width:${props => props.SMwidth? props.SMwidth: '100%'};
    margin-bottom: ${props => props.SMmarginBottom? props.SMmarginBottom: ''};
  }

`
export default Styled_hr;

