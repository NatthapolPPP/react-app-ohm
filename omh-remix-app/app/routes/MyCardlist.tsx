import { useState } from "react";

let nextId = 0;

export default function CardLists (){
    const [name,setName] = useState('');
    const [branch,setBranch]= useState('');
    const [year,setYear]= useState('');
    const [desc,setDese]= useState('');
    const [cards,setCards]= useState([]);

    function handleClickAdd(n:String,br:String,y:String,d:String){
            console.log("Card List:",cards);

        setCards([
            ...cards, 
            {
                id:nextId++,
                name: n,
                branch: br,
                year: y,
                desc: d
            }
        ]);

    }
    function handleViewCard(card) {
        alert(`Name: ${card.name}\nสาขา: ${card.branch}\nชั้นปี: ${card.year}\nDescription: ${card.desc}`);
    }

    return (
        <div>
            <h1>MyCard</h1>
            <label>name :</label>
            <input 
                name="cName"  className="border-2"
                onChange={(e) => setName(e.target.value)}
            /><br />
             <label>สาขา :</label>
            <input 
                name="cName" className="border-2"
                onChange={(e) => setBranch(e.target.value)}
            /><br />
            <label>ชั้นปี :</label>
            <input 
                name="cName" className="border-2"
                onChange={(e) => setYear(e.target.value)}
            /><br />
            <label>Description :</label>
            <textarea name="cName" rows={4} cols={50} className="border-2" onChange={(e) => setDese(e.target.value)}/>
            <hr />
            <button 
                onClick={() => handleClickAdd(name,branch,year,desc)}
                className="border bg-green-300 h-18 w-20"
            >
                Add Card
            </button>
            <hr />
            <h1>My Card Lists:</h1>
            {cards.length === 0 ? (
                <p>No cards available</p>
            ) : (
                <table className="border-collapse border border-gray-200 w-full">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 p-2">id</th>
                            <th className="border border-gray-300 p-2">ชื่อ - สกุล</th>
                            <th className="border border-gray-300 p-2">สาขา</th>
                            <th className="border border-gray-300 p-2">ชั้นปี</th>
                            <th className="border border-gray-300 p-2">รายละเอียด</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cards.map(card => (
                            <tr key={card.id}>
                                <td className="border border-gray-300 p-2">{card.id+1}</td>
                                <td className="border border-gray-300 p-2">{card.name}</td>
                                <td className="border border-gray-300 p-2">{card.branch}</td>
                                <td className="border border-gray-300 p-2">{card.year}</td>
                                <td className="border border-gray-300 p-2">
                                    <button onClick={() => handleViewCard(card)} className="border bg-green-300 px-2 py-1"> View 
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}