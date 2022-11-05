import { useReducer, useState } from "react";
import { MainView } from "./MainView";
import { initialState, memoReducer } from "./reducer/memoReducer";
import { Sidebar } from "./Sidebar";

export const Contents = () => {
  const [state, dispatch] = useReducer(memoReducer, initialState);

  const [memoData, setMemoData] = useState([
    {
      id: 1,
      title: "本日のタスク",
      text: `・ベースボタンの作成\n・ボタンクリック時の挙動修正\n・画面全体UI修正`,
      registed: "2022-10-31",
    },
    {
      id: 2,
      title: "明日のタスク",
      text: `・ベースボタンの作成\n・ボタンクリック時の挙動修正\n・画面全体UI修正`,
      registed: "2022-11-01",
    },
    {
      id: 3,
      title: "来週の予定",
      text: `・ベースボタンの作成\n・ボタンクリック時の挙動修正\n・画面全体UI修正`,
      registed: "2022-11-02",
    },
  ]);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
      }}
    >
      <Sidebar
        dispatch={dispatch}
        memoData={memoData}
        setMemoData={setMemoData}
      />
      <MainView state={state} dispatch={dispatch} setMemoData={setMemoData} />
    </div>
  );
};