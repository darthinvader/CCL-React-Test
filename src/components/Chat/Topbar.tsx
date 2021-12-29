import { ClIconButton } from "@enreach/core-component-library-react";
import { MdEmail } from "react-icons/md";
interface Props {
  style?: React.CSSProperties;
  textStyle?: React.CSSProperties;
  convStyle?: React.CSSProperties;
  hoursStyle?: React.CSSProperties;
  iconStyle?: React.CSSProperties;
}

const Topbar: React.FC<Props> = ({
  style,
  textStyle,
  convStyle,
  hoursStyle,
  iconStyle,
}) => {
  style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    boxShadow: "0px 0px 6px 0px",
    height: "72px",
    gap: "20px",
    ...style,
  };
  textStyle = {
    width: "55%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    ...textStyle,
  };
  iconStyle = {
    width: 40,
    height: 40,
  };
  return (
    <div style={style}>
      <ClIconButton iconName="navigation--arrow--left" />
      <div style={textStyle}>
        <p>Name/E-mail/Conversation #</p>
        <p>3 Hours</p>
      </div>
      <MdEmail style={iconStyle}></MdEmail>
    </div>
  );
};

export default Topbar;
