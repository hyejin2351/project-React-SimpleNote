import React from "react";
import "./index.scss";

class ListItem extends React.Component {
  render() {
    //상위 컴포넌트 List의 props 전달
    const { active, title, contents, onClick } = this.props;
    return (
      //active props에 id 값이 할당되면 "list-item을 active 시킴", 그렇지 않으면 그냥 "list-item"
      //this.props.active는 활성화 상태 여부를 담고 있다.
      <div
        className={active ? "list-item active" : "list-item"}
        //onClick 클릭 시 onClick() 메서드 호출
        onClick={onClick}
      >
        <div className="title">{title ? title : "제목"}</div>
        <div className="list-item-contents">
          {contents ? contents : "내용"}
        </div>
      </div>
    );
  }
}

export default ListItem;
