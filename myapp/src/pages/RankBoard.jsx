// src/RankBoard.js
import React from 'react';
const rankData = [
    { name: 'John', score: 500 },
    { name: 'Jane', score: 450 },
    { name: 'Mike', score: 600 },
    // Add more data as needed
  ];
const RankBoard = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Rank Board</h1>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Rank</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Score</th>
          </tr>
        </thead>
        <tbody>
          {rankData.map((item, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2">{item.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RankBoard;
