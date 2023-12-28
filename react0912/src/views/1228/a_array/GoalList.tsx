import React from 'react'

interface Goal {
  id: number;
  title: string;
  explanation: string;
  active: boolean;
}

interface GoalProps {
  goals: Goal[]
  // 삭제 버튼 클릭 시 onRemove 함수로 해당 버튼이 있는 배열의 id가 전달
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
}

export default function GoalList({ goals, onRemove, onToggle }: GoalProps) {
  return (
    <>
      {/* title - explanation */}
      {goals.map(goal => ( // -> initialGoals.map vs goals.map
        <div>
          <span 
            key={goal.id}
            style={{
              cursor: 'pointer',
              // active가 true면 글자색을 green으로
              // false면 글자색을 black으로
              color: goal.active ? 'green' : 'black'
            }}
            onClick={() => onToggle(goal.id)}
          >
            {goal.title} - {goal.explanation}
          </span>
          <button onClick={() => onRemove(goal.id)}>삭제</button>
        </div>
      ))}
    </>
  )
}

// 맵, 필터, 삼항연산자 꼭 복습
