import { useState } from "react";

import './Addstudent.css';

function AddStudent() {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [studentId, setStudentId] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    const student = {
      studentId,
      firstName,
      lastName,
      address,
      email,
      password,
    };
    if (student)
      fetch("http://localhost:8080/student/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student),
      }).then(() => {
        console.log("New Student added");
      });
    console.log("Faculty object is empty");
  };

  return (
    <div className="container">
    <div className="blur-background">
      <div className="bordered-box">
        <h1>Add Student</h1>
        <form>
          <div className="form-group">
            <label>Firstname</label>
            <input
              type="text"
              className="form-control"
              id="firstname"
              placeholder="Please enter student firstname."
              required
              value={firstName}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Lastname</label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              placeholder="Please enter student lastname."
              required
              value={lastName}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Student Id</label>
            <input
              type="text"
              className="form-control"
              id="studentid"
              placeholder="Please enter student ID."
              required
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="Please enter student address."
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="user@gmail.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="**********"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn-primary" onClick={handleClick}>
            SAVE
          </button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default AddStudent;