import React from 'react';
import Header from '../Screen/header';
import Footer from '../Screen/Footer';
import Sidebar from '../Screen/sidebar';
import '../css/CoursePage.css';

const Course = () => {
  const courses = [
    { title: 'Course Title 1', description: 'Course description goes here.', price: '$100', image: '' },
    { title: 'Course Title 2', description: 'Course description goes here.', price: '$120', image: 'course2.jpg' },
    { title: 'Course Title 3', description: 'Course description goes here.', price: '$120', image: 'course2.jpg' },
    { title: 'Course Title 4', description: 'Course description goes here.', price: '$120', image: 'course2.jpg' },
    // Add more courses as needed
  ];

  return (
    <div className="page">
      <Header />
      <Sidebar />
      <div className="content container">
        {/* Engineering Courses */}
        <section className="section">
          <h2>Engineering</h2>
          <div className="row">
            {courses.map((course, index) => (
              <div className="col-md-4 col-lg-3 mb-2" key={index}>
                <div className="card h-200">
                  <img src={course.image} className="card-img-top" alt={course.title} />
                  <div className="card-body">
                    <h5 className="card-title">{course.title}</h5>
                    <p className="card-text">{course.description}</p>
                  </div>
                  <div className="card-footer d-flex justify-content-between align-items-center">
                    <span className="price">{course.price}</span>
                    <button className="btn btn-primary add-to-cart">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Repeat sections for other courses as needed */}
        {/* Varsity Courses */}
        <section className="section">
          <h2>Varsity</h2>
          <div className="row">
            {courses.map((course, index) => (
              <div className="col-md-6 col-lg-4 mb-2" key={index}>
                <div className="card h-100">
                  <img src={course.image} className="card-img-top" alt={course.title} />
                  <div className="card-body">
                    <h5 className="card-title">{course.title}</h5>
                    <p className="card-text">{course.description}</p>
                  </div>
                  <div className="card-footer d-flex justify-content-between align-items-center">
                    <span className="price">{course.price}</span>
                    <button className="btn btn-primary add-to-cart">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Medical Courses */}
        <section className="section">
          <h2>Medical</h2>
          <div className="row">
            {courses.map((course, index) => (
              <div className="col-md-6 col-lg-4 mb-2" key={index}>
                <div className="card h-100">
                  <img src={course.image} className="card-img-top" alt={course.title} />
                  <div className="card-body">
                    <h5 className="card-title">{course.title}</h5>
                    <p className="card-text">{course.description}</p>
                  </div>
                  <div className="card-footer d-flex justify-content-between align-items-center">
                    <span className="price">{course.price}</span>
                    <button className="btn btn-primary add-to-cart">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* HSC Courses */}
        <section className="section">
          <h2>HSC</h2>
          <div className="row">
            {courses.map((course, index) => (
              <div className="col-md-6 col-lg-4 mb-2" key={index}>
                <div className="card h-100">
                  <img src={course.image} className="card-img-top" alt={course.title} />
                  <div className="card-body">
                    <h5 className="card-title">{course.title}</h5>
                    <p className="card-text">{course.description}</p>
                  </div>
                  <div className="card-footer d-flex justify-content-between align-items-center">
                    <span className="price">{course.price}</span>
                    <button className="btn btn-primary add-to-cart">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SSC Courses */}
        <section className="section">
          <h2>SSC</h2>
          <div className="row">
            {courses.map((course, index) => (
              <div className="col-md-6 col-lg-4 mb-2" key={index}>
                <div className="card h-100">
                  <img src={course.image} className="card-img-top" alt={course.title} />
                  <div className="card-body">
                    <h5 className="card-title">{course.title}</h5>
                    <p className="card-text">{course.description}</p>
                  </div>
                  <div className="card-footer d-flex justify-content-between align-items-center">
                    <span className="price">{course.price}</span>
                    <button className="btn btn-primary add-to-cart">Add to Cart</button>
                  </div>
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
