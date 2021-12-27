import { ClScrollWrapper } from "@enreach/core-component-library-react";

interface Props {
  scrollerStyle?: React.CSSProperties;
  innerStyle?: React.CSSProperties;
  children: React.ReactNode;
}

const Chat: React.FC<Props> = ({ scrollerStyle, innerStyle, children }) => {
  scrollerStyle = {
    height: "700px",
    width: "350px",
    backgroundColor: "white",
    overflowX: "hidden",
    display: "flex",
    ...scrollerStyle,
  };
  innerStyle = {
    display: "flex",
    height: "700px",
    width: "350px",
    flexDirection: "column-reverse",
    justifyContent: "flex-end",
    alignItems: "start",
    padding: "10px 20px",
    gap: "16px",
    ...innerStyle,
  };

  return (
    <ClScrollWrapper style={scrollerStyle}>
      <div style={innerStyle}>{children}</div>
    </ClScrollWrapper>
  );
};

export default Chat;
