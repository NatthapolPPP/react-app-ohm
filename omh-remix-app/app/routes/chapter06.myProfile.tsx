import { useState, useEffect } from "react";

export default function MyProfile() {
    const [data , setData] = useState({});
    const [loading , setloading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const myProf = await fetch('http://localhost:3000/api/getProfile');
            if(myProf.ok){
                const result = await myProf.json();
                setData(result);
                setloading(false);
            }else{
                alert('Error:Call getProfile api.');
            }
        }
        fetchData();
    },[]);

    if(loading)return <p className='m-4 p-4'>loading......</p>;

    return(
        <div className='m-4 p-4'>
            <h1>โปรไฟล์ของฉัน</h1>
            {/*JSON.stringify(data, null ,2)*/}
            ชื่อ: {data.fname} <br />
            นามสกุล:{data.lname} <br />
            อีเมล:{data.email} <br />
            สาขาวิชา: {data.major} <br />
        </div>
    );
}