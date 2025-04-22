import React, { useState } from 'react'

export default function Data() {

    const [input, setInput] = useState('');
    const [inputage, setInputAge] = useState('');
    const [designation, setdesignation] = useState('');
    const [salary, setsalary] = useState('');
    

    return (
       <>
       <div className="container">
        <div className="row">
            <h2>Employee Data Entry - Add and View Employee Information</h2>
        <input type="text" placeholder='Enter Your Name' value={input} onChange={(e) => { setInput(e.target.value) }} />

<input type="text" placeholder='Enter Your Age' value={inputage} onChange={(e) => { setInputAge(e.target.value) }} />
<input type="text" placeholder='Enter Your Designation' value={designation} onChange={(e) => { setdesignation(e.target.value) }} />
<input type="text" placeholder='Enter Your Salary' value={salary} onChange={(e) => { setsalary(e.target.value) }} />


<table>
    <caption>Displaying Employee Data</caption>
    <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Designation</th>
        <th>Salary</th>
    </tr>
    <tr>
        <td>{input}</td>
        <td>{inputage}</td>
        <td>{designation}</td>
        <td>{salary}</td>
    </tr>
</table>
        </div>
       </div>
       </>
    )
}
