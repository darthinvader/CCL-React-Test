interface Props {
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const ChatBubble: React.FC<Props> = ({ style, children }) => {
  style = {
    height: "auto",
    width: "auto",
    backgroundColor: "var(--color-primary-900)",
    borderRadius: "25px",
    padding: "8px 20px",
    alignSelf: "start",
    color: "white",
    fontSize: "20px",
    maxWidth: "300px",
    ...style,
  };
  return <div style={style}>{children}</div>;
};

export default ChatBubble;
