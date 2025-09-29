import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const studentsData = [
  {
    id: 1,
    name: "Alice",
    Math: 85,
    English: 78,
    Science: 92,
    History: 74,
    Computer: 88
  },
  {
    id: 2,
    name: "Bob",
    Math: 76,
    English: 82,
    Science: 69,
    History: 80,
    Computer: 72
  },
  {
    id: 3,
    name: "Charlie",
    Math: 90,
    English: 85,
    Science: 95,
    History: 88,
    Computer: 93
  },
  {
    id: 4,
    name: "Diana",
    Math: 68,
    English: 74,
    Science: 70,
    History: 72,
    Computer: 65
  },
  {
    id: 5,
    name: "Ethan",
    Math: 88,
    English: 79,
    Science: 85,
    History: 91,
    Computer: 87
  },
  {
    id: 6,
    name: "Fiona",
    Math: 72,
    English: 68,
    Science: 74,
    History: 77,
    Computer: 70
  },
  {
    id: 7,
    name: "George",
    Math: 95,
    English: 90,
    Science: 96,
    History: 89,
    Computer: 94
  },
  {
    id: 8,
    name: "Hannah",
    Math: 80,
    English: 83,
    Science: 78,
    History: 85,
    Computer: 82
  },
  {
    id: 9,
    name: "Ian",
    Math: 67,
    English: 72,
    Science: 65,
    History: 70,
    Computer: 68
  },
  {
    id: 10,
    name: "Jasmine",
    Math: 89,
    English: 86,
    Science: 92,
    History: 90,
    Computer: 88
  }
];



const ResultChat = () => {
    return (
        <div>
            <LineChart width={1000} height={500} data={studentsData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey="Math"></Line>
                <Line dataKey="History" stroke='green'></Line>
            </LineChart>
            
        </div>
    );
};

export default ResultChat;