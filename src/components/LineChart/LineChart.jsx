import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';
const LineChart = () => {
    const studentMarks = [
        { id: 1, name: 'John', math_mark: 60, science_mark: 55, english_mark: 70 },
        { id: 2, name: 'Alice', math_mark: 52, science_mark: 65, english_mark: 58 },
        { id: 3, name: 'Bob', math_mark: 70, science_mark: 10, english_mark: 30 },
        { id: 4, name: 'Emma', math_mark: 45, science_mark: 28, english_mark: 55 },
        { id: 5, name: 'Michael', math_mark: 20, science_mark: 72, english_mark: 67 },
        { id: 6, name: 'Olivia', math_mark: 58, science_mark: 60, english_mark: 55 },
        { id: 7, name: 'Sophia', math_mark: 75, science_mark: 76, english_mark: 78 },
        { id: 8, name: 'William', math_mark: 48, science_mark: 46, english_mark: 50 },
        { id: 9, name: 'Ella', math_mark: 65, science_mark: 58, english_mark: 69 },
        { id: 10, name: 'James', math_mark: 20, science_mark: 60, english_mark: 54 },
    ];
    return (
        <div>
            <LChart width={800} height={400} data={studentMarks}>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                <Line dataKey={"math_mark"} stroke='green'></Line>
                <Line dataKey={"science_mark"} stroke='red'></Line>
                <Line dataKey={"english_mark"} stroke='white'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;