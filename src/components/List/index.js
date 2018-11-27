import React from "react";
import "./index.scss";
import ListItem from "../ListItem";

class List extends React.Component {
  render() {
    //상위 컴포넌트의 props를 전달받음
    const { notes, activeId, onListItemClick } = this.props;
    return (
      <div className="list">
        {/* 배열.map((요소, 인덱스, 배열) => { return 요소, 인덱스, 배열 }); */}
        {notes.map((item) => {
          const { id, title, contents } = item;
          //요소를 return 영역에 출력
          return (
            <ListItem
              //반복문을 돌 때에는 key가 필수
              key={id}
              id={id}
              active={id === activeId}
              title={title}
              contents={contents}
              //ListItem 클릭 시 onListItemClick() 메서드 전달
              onClick={() => onListItemClick(id)}
            />
          );
        })}
      </div>
    );
  }
}

export default List;
