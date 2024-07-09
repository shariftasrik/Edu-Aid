import React from 'react';
import Header from '../Screen/header';
import Footer from '../Screen/Footer';
import Sidebar from '../Screen/sidebar';
import '../css/CoursePage.css';

const Course = () => {
  const courses = [
    { title: 'Course Title 1', description: 'Course description goes here.', price: '$100', image: ''},
    { title: 'Course Title 2', description: 'Course description goes here.', price: '$120', image: 'course2.jpg' },
    { title: 'Course Title 3', description: 'Course description goes here.', price: '$120', image: 'course2.jpg' },
    { title: 'Course Title 4', description: 'Course description goes here.', price: '$120', image: 'course2.jpg' },
    // Add more courses as needed
  ];

  return (
    <div className="page">
      <Header />
      <Sidebar />
      <div className="content">
        {/* Engineering Courses */}
        <section className="section">
          <h2>Engineering</h2>
          <div className="card-container">
            {courses.map((course, index) => (
              <div className="card" key={index}>
                <img src={course.image} alt={course.title} className="course-image" />
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <div className="card-footer">
                  <span className="price">{course.price}</span>
                  <button className="add-to-cart">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Varsity Courses */}
        <section className="section">
          <h2>Varsity</h2>
          <div className="card-container">
            {courses.map((course, index) => (
              <div className="card" key={index}>
                <img src={course.image} alt={course.title} className="course-image" />
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <div className="card-footer">
                  <span className="price">{course.price}</span>
                  <button className="add-to-cart">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Varsity Courses */}
        <section className="section">
          <h2>Medical</h2>
          <div className="card-container">
            {courses.map((course, index) => (
              <div className="card" key={index}>
                <img src={course.image} alt={course.title} className="course-image" />
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <div className="card-footer">
                  <span className="price">{course.price}</span>
                  <button className="add-to-cart">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* HSC Courses */}
        <section className="section">
          <h2>HSC</h2>
          <div className="card-container">
            {courses.map((course, index) => (
              <div className="card" key={index}>
                <img src={course.image} alt={course.title} className="course-image" />
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <div className="card-footer">
                  <span className="price">{course.price}</span>
                  <button className="add-to-cart">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SSC Courses */}
        <section className="section">
          <h2>SSC</h2>
          <div className="card-container">
            {courses.map((course, index) => (
              <div className="card" key={index}>
                <img src={course.image} alt={course.title} className="course-image" />
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <div className="card-footer">
                  <span className="price">{course.price}</span>
                  <button className="add-to-cart">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Course;
