import { ClTextField } from "@enreach/core-component-library-react";

interface Props {
  style?: React.CSSProperties;
}

const ChatInput: React.FC<Props> = ({ style }) => {
  style = { ...style };
  return (
    <ClTextField placeholder="Type In A Response" style={style}></ClTextField>
  );
};
export default ChatInput;
