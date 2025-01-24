import * as S from "./TestStyle";
import PostCardUI from "../../components/PostCardUl/PostCardUl";
import PlusIcon from "../../assets/icons/PlusIcon.svg";
import { Link } from "react-router-dom";
//

function Test3({ messages }) {
  return (
    <S.GridBoxes>
      <S.CreateBox>
        <Link to="message">
          <S.Plus src={PlusIcon} />
        </Link>
      </S.CreateBox>
      {messages.map((message) => {
        return <PostCardUI key={message.id} data={message} />;
      })}
    </S.GridBoxes>
  );
}

export default Test3;
