import styled from "styled-components";
const ButtonStyled = styled.button`
  color: ${(props) => (props.color ? props.color : "#131419")};
  border: ${(props) => (props.border ? props.border : "")};
  padding-inline: ${(props) =>
    props.paddingInline ? props.paddingInline : "2px"};
  padding-block: ${(props) =>
    props.paddingBlock ? props.paddingBlock : "2px"};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "2px"};
  font-size: ${(props) => (props.size ? props.size : "14px")};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "transparent"};
  font-weight: ${(props) => (props.weight ? props.weight : "")};
  width: ${(props) => (props.width ? props.width : "")};
  height: ${(props) => (props.height ? props.height : "")};

  @media (max-width: 992px) {
    font-size: ${(props) => (props.SMsize ? props.SMsize : "12.5px")};
    padding-inline: ${(props) =>
      props.SMpaddingInline ? props.SMpaddingInline : "12px"};
    padding-block: ${(props) =>
      props.SMpaddingBlock ? props.SMpaddingBlock : "4.5px"};
  }
  @media (max-width: 600px) {
    font-size: ${(props) => (props.SMsize ? props.SMsize : "12.5px")};
    padding-inline: ${(props) =>
      props.SMpaddingInline ? props.SMpaddingInline : "15px"};
    padding-block: ${(props) =>
      props.SMpaddingBlock ? props.SMpaddingBlock : "3.9px"};
  }
`;
export default ButtonStyled;
