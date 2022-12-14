import styled from 'styled-components'
const Styled_text = styled.div`
  color: ${props => props.color? props.color: '#131419'};
  border:${props => props.border? props.border: ''};
  padding-inline: ${props => props.paddingInline? props.paddingInline: ''};
  padding-block: ${props => props.paddingBlock? props.paddingBlock: ''};
  border-radius: ${props => props.borderRadius? props.borderRadius: ''};
  font-size: ${props => props.size? props.size: '17px'};
  font-weight:${props => props.weight? props.weight: '400'};
  display:flex;
  width:${props => props.width? props.width: '100%'};
  margin-bottom: ${props => props.marginBottom? props.marginBottom: ''};
  margin-top: ${props => props.marginTop? props.marginTop: ''};
  justify-content: ${props => props.JFcontent? props.JFcontent: 'center'};
  margin-right: ${props => props.marginRight? props.marginRight: ''};
  margin-left: ${props => props.marginLeft? props.marginLeft: ''};

  @media (max-width: 992px) {
    font-size: ${props => props.SMsize? props.SMsize: ''};
    margin-bottom: ${props => props.SMmarginBottom? props.SMmarginBottom: ''};
  }

  @media(max-width: 600px) {
    font-size: ${props => props.SMsize? props.SMsize: ''};
    margin-bottom: ${props => props.SMmarginBottom? props.SMmarginBottom: ''};
  }

`
export default Styled_text;

