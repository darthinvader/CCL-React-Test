import { ClTextField } from "@enreach/core-component-library-react";

interface Props {
  style?: React.CSSProperties;
}

const ChatInput: React.FC<Props> = ({ style }) => {
  style = {
    justifySelf: "flex-end",
    maxHeight: "50px",
    flex: "1 1 auto",
    marginBottom: "40px",
    ...style,
  };
  return (
    <ClTextField
      type="text"
      placeholder="Type In A Response"
      style={style}
    ></ClTextField>
  );
};
export default ChatInput;
