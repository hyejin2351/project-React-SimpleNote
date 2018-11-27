import React from "react";
import "./index.scss";
import Header from "../Header";
import List from "../List";
import Note from "../Note";
import {generateId} from '../../utils';

class App extends React.Component {
  state = {
    //앱의 노트 정보를 담은 array
    notes: [
      {
        id: "initial",
        title: "심플노트에 오신것을 환영합니다!",
        contents:
          "차근차근 만들면서 리액트를 익혀보세요! 헤더의 추가 버튼을 클릭하여 새로운 노트를 만드실 수 있습니다."
      }
    ],
    //리스트에서 유저가 선택하여 활성화된 노트의 id를 기록
    activeId: "initial"
  };

  //이벤트 핸들러 메서드
  //클릭 시 activeId의 값은 id로 업데이트된다.
  handleListItemClick = (id) => {
    this.setState({ activeId: id });
  };

  //편집 이벤트 핸들러
  handleEditNote = (type, e) => {
    const notes = [...this.state.notes];
    const note = notes.find(item => item.id === this.state.activeId);

    //유저가 타이핑한 값들이 note[type]에 기록됨
    note[type] = e.target.value;

    this.setState({
      notes
    });
  };

  //추가 이벤트 핸들러
  handleAddNote = () => {
    const id = generateId();
    this.setState({
      notes: [
        ...this.state.notes,
        {
          id,
          title: "제목",
          contents: "내용"
        }
      ],
      activeId: id
    });
  };

  //삭제 이벤트 핸들러
  handleDeleteNote = () => {
    const notes = this.state.notes.filter((item) => item.id !== this.state.activeId);

    this.setState({
      notes,
      activeId: notes.length === 0 ? null : notes[0].id, //item이 0개면 null, item이 있으면 첫번째 노트 인덱스 출력
    });
  }

  render() {
    const { notes, activeId } = this.state;
    /*
    //item.id 값이 activeId랑 같은 배열 출력, 그 중에서도 [0] 첫번째 값을 출력
    const filter_fn = function(item) {
      return item.id === activeId; 
    };
    const activeNote = notes.filter(filter_fn)[0];
    */

    //현재 활성화 된 객체를 찾아서 activeNote 변수에 할당***
    const activeNote = notes.filter(item => item.id === activeId)[0];

    return (
      <div className="app">
        <Header onAddNote={this.handleAddNote} onDeleteNote={this.handleDeleteNote} />
        <div className="container">
          {/* 하위 컴포넌트로 상위 컴포넌트의 props 전달 */}
          <List
            notes={notes}
            activeId={activeId}
            //하위 컴포넌트로 상위 컴포넌트의 메서드 전달
            onListItemClick={this.handleListItemClick}
          />
          {/* 노트가 한개라도 존재하면 <Note />를 렌더링함 */}
          {/* note 속성에 activeNote 전달 */}
          {
            notes.length !== 0 && <Note note={activeNote} onEditNote={this.handleEditNote} />
          }
        </div>
      </div>
    );
  }
}

export default App;
