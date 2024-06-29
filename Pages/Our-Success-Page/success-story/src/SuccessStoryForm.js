// SuccessStoryForm.js

import React, { useState, useEffect } from 'react';
import { Form, Button, Table } from 'react-bootstrap';
import axios from 'axios';
import Header from './Header'; // Import Header component

const SuccessStoryForm = () => {
    const [students, setStudents] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [form, setForm] = useState({
        name: '',
        regNo: '',
        university: ''
    });
    const [editingIndex, setEditingIndex] = useState(-1); // Track the index of the student being edited

    useEffect(() => {
        // Fetch student records from local storage on component mount
        const storedStudents = JSON.parse(localStorage.getItem('students')) || [];
        setStudents(storedStudents);
    }, []);

    useEffect(() => {
        // Update local storage whenever 'students' state changes
        localStorage.setItem('students', JSON.stringify(students));
    }, [students]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingIndex === -1) {
            // Add new student if not editing
            const newStudent = { ...form };
            setStudents([...students, newStudent]);
        } else {
            // Update student if editing
            const updatedStudents = [...students];
            updatedStudents[editingIndex] = { ...form };
            setStudents(updatedStudents);
            setEditingIndex(-1); // Reset editing index after update
        }
        // Clear form inputs after submission
        setForm({ name: '', regNo: '', university: '' });
    };

    const handleEdit = (index) => {
        // Set form state and editing index when editing a student
        const studentToEdit = students[index];
        setForm({ ...studentToEdit });
        setEditingIndex(index);
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.regNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.university.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="container">
            <Header /> {/* Include Header component here */}
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Registration Number</Form.Label>
                    <Form.Control
                        type="text"
                        name="regNo"
                        value={form.regNo}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>University</Form.Label>
                    <Form.Control
                        type="text"
                        name="university"
                        value={form.university}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    {editingIndex === -1 ? 'Add Student' : 'Update Student'}
                </Button>
                {editingIndex !== -1 && (
                    <Button variant="secondary" className="ms-2" onClick={() => setEditingIndex(-1)}>
                        Cancel
                    </Button>
                )}
            </Form>
            <h2 className="mt-4">Search Students</h2>
            <Form.Control
                type="text"
                placeholder="Search by name, reg no, or university"
                value={searchTerm}
                onChange={handleSearch}
                className="mb-3"
            />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Registration Number</th>
                        <th>University</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredStudents.map((student, index) => (
                        <tr key={index}>
                            <td>{student.name}</td>
                            <td>{student.regNo}</td>
                            <td>{student.university}</td>
                            <td>
                                <Button variant="secondary" size="sm" onClick={() => handleEdit(index)}>
                                    Edit
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            {/* <div className="arrow-top" onClick={scrollToTop}>
                <img src="./Assets/svg/arrow-up-circle.svg" alt="Arrow-Up" />
            </div> */}
        </div>
    );
};

export default SuccessStoryForm;
