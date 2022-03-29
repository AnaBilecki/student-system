import './styles.css';

function Form() {
    return (
        <div className="container">
            <div className="form-container">
                <h1>Add student</h1>
                <form>
                    <div className="form-group">
                        <label>Student Name</label>
                        <input type="text" className="form-control" placeholder="Enter student name" />
                    </div>
                    <div className="form-group">
                        <label>Student Country</label>
                        <input type="text" className="form-control" placeholder="Enter student country" />
                    </div>
                    <div className="submit-button">
                        <button type="submit" className="btn btn-outline-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;