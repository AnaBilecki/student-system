import { useEffect, useState } from "react";
import './styles.css';

function Display() {

    const [students, setStudents] = useState<any[]>([])

    useEffect(() => {
        fetch("http://localhost:8080/student")
            .then(res => res.json())
            .then((result) => {
                setStudents(result);
            }
            )
    }, [])

    return (
        <div className="display-container">
            <h1>Students</h1>
            <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Country</th>
                    </tr>
                </thead>
            {students.map(student => (
                <tbody  key={student.id}>
                    <tr>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.country}</td>
                    </tr>
                </tbody>
            ))}
            </table>
        </div>
    );
}

export default Display;