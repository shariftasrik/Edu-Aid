import React, { useState } from 'react';
import Header from '../Screen/header';
import Sidebar from '../Screen/sidebar';
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

  const filterStudents = () => {
    return students.filter((student) =>
      Object.keys(search).every((key) =>
        student[key].toLowerCase().includes(search[key].toLowerCase())
      )
    );
  };

  const clearFilters = () => {
    setSearch({ name: '', regNo: '', mobileNo: '', university: '' });
  };

  const deleteStudent = (index) => {
    const updatedStudents = [...students];
    updatedStudents.splice(index, 1);
    setStudents(updatedStudents);
  };

  const editStudent = (index, updatedStudent) => {
    const updatedStudents = [...students];
    updatedStudents[index] = updatedStudent;
    setStudents(updatedStudents);
  };

  return (
    <div className="page">
      <Header />
      <Sidebar />
      <div className="content">
        <h2>Our Success</h2>

        <div className="filter-section">
          <h3>Filter Students</h3>
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
          <div className="form-buttons">
            <button className="btn btn-primary" onClick={filterStudents}>Filter</button>
            <button className="btn btn-secondary" onClick={clearFilters}>Clear</button>
          </div>
        </div>

        <div className="add-student-box">
          <h3>Add Student</h3>
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
            <button className="btn btn-primary" onClick={addStudent}>Add</button>
            <button className="btn btn-secondary" onClick={() => setFormData({ name: '', regNo: '', mobileNo: '', university: '' })}>Cancel</button>
          </div>
        </div>

        <div className="table-section">
          <h3>Student List</h3>
          <table className="table">
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
              {filterStudents().map((student, index) => (
                <tr key={index}>
                  <td>{student.name}</td>
                  <td>{student.regNo}</td>
                  <td>{student.mobileNo}</td>
                  <td>{student.university}</td>
                  <td>
                    <button className="btn btn-primary" onClick={() => editStudent(index, student)}>Edit</button>
                    <button className="btn btn-danger" onClick={() => deleteStudent(index)}>Delete</button>
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
