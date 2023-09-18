import { data } from "autoprefixer";
import axios from "axios";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from "react";


const Phones = () => {
    const [phones, setPhones] = useState([])
    useEffect(() => {
        axios.get("https://openapi.programming-hero.com/api/phones?search=iphone")
            .then(response => {
                const phoneData = response.data.data;
                const phoneWithFakeData = phoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split("_")[1])
                    }
                    return obj;
                });
                setPhones(phoneWithFakeData);
                // console.log(phoneWithFakeData);
            });
    }, []);

    return (
        <div>
            <h2 className="text-5xl">Phone {phones.length}</h2>
            <BarChart width={1200} height={400} data={phones}>
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis dataKey={name}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default Phones;