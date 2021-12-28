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
    alignItems: "center",
    borderRadius: "35px",
    overflow: "hidden",
    ...outerStyle,
  };

  innerStyle = {
    display: "flex",
    flexDirection: "column-reverse",
    padding: "10px 20px",
    gap: "12px",
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
