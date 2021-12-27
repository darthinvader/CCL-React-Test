import { ClScrollWrapper } from "@enreach/core-component-library-react";

interface Props {
  style?: { [key: string]: any };
  children: React.ReactNode;
}

const Chat: React.FC<Props> = ({ style, children }) => {
  return (
    <ClScrollWrapper maxHeight={20} style={style}>
      {children}
    </ClScrollWrapper>
  );
};

export default Chat;
