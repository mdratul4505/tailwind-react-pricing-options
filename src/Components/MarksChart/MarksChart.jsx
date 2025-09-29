import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MarksChart = ({ marksDataPromice }) => {
    const marksPromiceres = use(marksDataPromice);
    const marksData = marksPromiceres.data

    // data processing for the chat

    const markChatData = marksData.map(data => {
        const student = {
            id: data.id,
            name: data.name,
            math: data.marks.Math,
            english: data.marks.English,
            scince: data.marks.Science,
            history: data.marks.History,

        }

        const avg = (student.math + student.english + student.scince)/3
        student.avg = avg
        return student 
    })
    console.log(markChatData , )
    return (
        <div>
            <BarChart width={500} height={500} data={markChatData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Bar dataKey={'avg'} fill='blue'></Bar>

            </BarChart>
        </div>
    );
};

export default MarksChart;