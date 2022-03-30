import { useState } from 'react';
import './styles.css';

function Form() {

    const [name, setName] = useState('');
    const [country, setCountry] = useState('');

    const handleClick = (e: any) => {
        e.preventDefault()
        const student = { name, country }
        fetch("http://localhost:8080/student", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(student)

        }).then(() => {
            window.location.reload()
        })
    }

    return (
        <div className="container">
            <div className="form-container">
                <h1>Add student</h1>
                <form>
                    <div className="form-group">
                        <label className="label">Student Name</label>
                        <input type="text" className="form-control" placeholder="Enter student name"
                            value={name}
                            onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Student Country</label>
                        <input type="text" className="form-control" placeholder="Enter student country"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)} />
                    </div>
                    <div className="submit-button">
                        <button type="submit" className="btn btn-outline-primary" onClick={handleClick}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;