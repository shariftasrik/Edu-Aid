// OurSuccess.js

import React, { useState } from 'react';
import Header from '../Screen/header';
import Sidebar from '../Screen/sidebar.jsx';
import Footer from '../Screen/Footer';
import '../css/OurSuccess.css'; 

const OurSuccess = () => {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    regNo: '',
    mobileNo: '',
    university: '',
  });
  const [search, setSearch] = useState({
    name: '',
    regNo: '',
    mobileNo: '',
    university: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    setSearch({ ...search, [name]: value });
  };

  const addStudent = () => {
    setStudents([...students, formData]);
    setFormData({ name: '', regNo: '', mobileNo: '', university: '' });
  };

  const filteredStudents = students.filter((student) =>
    Object.keys(search).every((key) =>
      student[key].toLowerCase().includes(search[key].toLowerCase())
    )
  );

  return (
    <div className="page">
      <Header />
      <Sidebar />
      <div className="content">
        <h2>Our Success</h2>
        <div className="form-section">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Reg No</label>
            <input
              type="text"
              name="regNo"
              value={formData.regNo}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Mobile No</label>
            <input
              type="text"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Admitted University</label>
            <input
              type="text"
              name="university"
              value={formData.university}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-buttons">
            <button onClick={addStudent}>Add</button>
            <button onClick={() => setFormData({ name: '', regNo: '', mobileNo: '', university: '' })}>Cancel</button>
          </div>
        </div>

        <div className="form-section">
          <h3>Search Students</h3>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={search.name}
              onChange={handleSearchChange}
            />
          </div>
          <div className="form-group">
            <label>Reg No</label>
            <input
              type="text"
              name="regNo"
              value={search.regNo}
              onChange={handleSearchChange}
            />
          </div>
          <div className="form-group">
            <label>Mobile No</label>
            <input
              type="text"
              name="mobileNo"
              value={search.mobileNo}
              onChange={handleSearchChange}
            />
          </div>
          <div className="form-group">
            <label>University</label>
            <input
              type="text"
              name="university"
              value={search.university}
              onChange={handleSearchChange}
            />
          </div>
        </div>

        <div className="table-section">
          <h3>Student List</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Reg No</th>
                <th>Mobile No</th>
                <th>University</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student, index) => (
                <tr key={index}>
                  <td>{student.name}</td>
                  <td>{student.regNo}</td>
                  <td>{student.mobileNo}</td>
                  <td>{student.university}</td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OurSuccess;
