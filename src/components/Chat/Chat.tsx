import { ClScrollWrapper } from "@enreach/core-component-library-react";

interface Props {
  scrollerStyle?: React.CSSProperties;
  innerStyle?: React.CSSProperties;
  outerStyle?: React.CSSProperties;
  children: React.ReactNode;
  topBar?: React.ReactNode;
  input?: React.ReactNode;
}

const Chat: React.FC<Props> = ({
  scrollerStyle,
  innerStyle,
  outerStyle,
  children,
  topBar,
  input,
}) => {
  outerStyle = {
    height: "700px",
    width: "350px",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    borderRadius: "35px",
    overflow: "hidden",
    ...outerStyle,
  };

  scrollerStyle = {
    overflowX: "hidden",
    ...scrollerStyle,
  };
  innerStyle = {
    position: "relative",
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
    <div style={outerStyle}>
      {topBar}
      <ClScrollWrapper style={scrollerStyle}>
        <div style={innerStyle}>{children}</div>
      </ClScrollWrapper>
      {input}
    </div>
  );
};

export default Chat;
