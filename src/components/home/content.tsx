import React from 'react'

interface ContentProps {
  count: number;
  handleAddCount: (count:number) => void;
}

export default function Content({count, handleAddCount}:ContentProps) {

  return (
    <div className="card">
        <button onClick={() => handleAddCount(count)}>
          count is {' '}
          {count}
        </button>
        <p>
        Edit <code>src/App.tsx</code> and save to test HMR
        </p>
  </div>
  )
}
