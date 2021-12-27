import { ClTextField } from "@enreach/core-component-library-react";

interface Props {
  style?: React.CSSProperties;
}

const ChatInput: React.FC<Props> = ({ style }) => {
  return <ClTextField style={style}></ClTextField>;
};
export default ChatInput;
