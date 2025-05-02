// 聲明這是客戶端組件，這樣才能使用 React 的狀態管理等功能
'use client';

// 導入必要的模組
// next/image：用於優化圖片加載的組件
// react 的 useState：用於管理組件的狀態
// TaskList：自定義的任務列表組件
import Image from "next/image";
import { useState } from "react";
import TaskList from "@/components/TaskList";

// 定義並導出首頁組件
export default function Home() {
  // 使用 useState 創建兩個狀態變量：
  // tasks：儲存所有任務的陣列，初始值為空陣列 []
  // setTasks：用於更新 tasks 的函數
  const [tasks, setTasks] = useState([]);
  
  // newTask：儲存輸入框中的新任務文字，初始值為空字串 ''
  // setNewTask：用於更新 newTask 的函數
  const [newTask, setNewTask] = useState('');

  // 定義添加任務的函數
  const addTask = () => {
    // 調試用：印出添加任務前的任務列表
    console.log("Before:", tasks);
    // 調試用：印出當前要添加的新任務
    console.log("Now:", newTask);
    
    // 創建新的任務陣列：
    // ...tasks：展開運算符，複製原有的所有任務
    // newTask：將新任務加入陣列末尾
    const updatedTasks = [...tasks, newTask];
    
    // 使用 setTasks 更新任務列表
    setTasks(updatedTasks);
    
    // 調試用：印出更新後的任務列表
    console.log("After:", updatedTasks);
    
    // 清空輸入框（將 newTask 設為空字串）
    setNewTask('');
  }

  // 返回要渲染的 JSX
  return (
    // main 容器，設置內邊距為 4 單位
    <main className="p-4">
      {/* 標題：使用大號字體和粗體 */}
      <h1 className="text-2xl font-bold">Task Board</h1>

      {/* 輸入區域容器：使用 flex 布局，設置間距和底部邊距 */}
      <div className="flex gap-2 mb-4">
        {/* 輸入框：
            - 有邊框和內邊距
            - flex-1 使其占用剩餘空間
            - value 綁定到 newTask 狀態
            - onChange 事件更新 newTask 狀態 */}
        <input
          className="border p-2 flex-1"
          placeholder="Enter a task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        
        {/* 添加按鈕：
            - 藍色背景
            - 白色文字
            - 左右內邊距為 4 單位
            - 點擊時觸發 addTask 函數 */}
        <button
          className="bg-blue-500 text-white px-4"
          onClick={addTask}        
        >
          Add
        </button>
      </div>

      {/* 渲染任務列表組件，將 tasks 陣列作為屬性傳遞 */}
      <TaskList tasks={tasks}/>

    </main>
  );
}
