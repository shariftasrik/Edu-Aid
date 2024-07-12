import React from 'react';
import Header from '../Screen/header.jsx';
import Sidebar from '../Screen/sidebar.jsx';
import Footer from '../Screen/Footer.jsx';
import '../css/CoursePage.css';

// Engineering
import EnggImg1 from '../Assets/Images/Carousel/Ad_Phy.png';
import EnggImg2 from '../Assets/Images/Carousel/Ad_HM.png';
import EnggImg3 from '../Assets/Images/Carousel/Ad_Chem.png';

// Varsity
import VarImg1 from '../Assets/Images/Carousel/Ad_Phy.png';
import VarImg2 from '../Assets/Images/Carousel/Ad_HM.png';
import VarImg3 from '../Assets/Images/Carousel/Ad_Chem.png';
import VarImg4 from '../Assets/Images/Carousel/H_ICT.png';

// Medical
import MedImg1 from '../Assets/Images/Books/Biology-1st.png';
import MedImg2 from '../Assets/Images/Books/Biology-2nd.webp';
import MedImg3 from '../Assets/Images/Books/Chem-1st.jpg';

// HSC
import HSCImg1 from '../Assets/Images/Carousel/H_HM_1.png';
import HSCImg2 from '../Assets/Images/Carousel/H_HM_2.png';
import HSCImg3 from '../Assets/Images/Carousel/H_Phy_1.png';
import HSCImg4 from '../Assets/Images/Carousel/H_Phy_2.png';
import HSCImg5 from '../Assets/Images/Carousel/H_Ch_1.png';
import HSCImg6 from '../Assets/Images/Carousel/H_Ch_2.png';
import HSCImg7 from '../Assets/Images/Books/Biology-1st.png';
import HSCImg8 from '../Assets/Images/Books/Biology-2nd.webp';
import HSCImg9 from '../Assets/Images/Carousel/H_ICT.png';

// SSC
import SSCImg1 from '../Assets/Images/Carousel/S_HM.png';
import SSCImg2 from '../Assets/Images/Carousel/S_HM.png';
import SSCImg3 from '../Assets/Images/Carousel/S_Phy.png';
import SSCImg4 from '../Assets/Images/Carousel/S_Ch.png';
import SSCImg5 from '../Assets/Images/Books/Biology.jpg';
import SSCImg6 from '../Assets/Images/Carousel/S_ICT.png';



const Course = () => {
  // const { addToCart } = useCart();
  const courses = {
    engineering: [
      { title: 'Engineering Physics', description: 'Course description goes here.', price: '$100', image: EnggImg1 },
      { title: 'Engineering Higher Math', description: 'Course description goes here.', price: '$120', image: EnggImg2 },
      { title: 'Engineering Chemistry', description: 'Course description goes here.', price: '$120', image: EnggImg3 },
      // Add more engineering courses as needed
    ],
    varsity: [
      { title: 'Varsity Physics', description: 'Course description goes here.', price: '$150', image: VarImg1 },
      { title: 'Varsity Higher Math', description: 'Course description goes here.', price: '$130', image: VarImg2 },
      { title: 'Varsity Chemistry', description: 'Course description goes here.', price: '$130', image: VarImg3 },
      { title: 'Varsity ICT', description: 'Course description goes here.', price: '$130', image: VarImg4 },
      // Add more varsity courses as needed
    ],
    medical: [
      { title: 'Medical Botany', description: 'Course description goes here.', price: '$200', image: MedImg1 },
      { title: 'Medical Zoology', description: 'Course description goes here.', price: '$180', image: MedImg2 },
      { title: 'Medical Chemistry', description: 'Course description goes here.', price: '$130', image: MedImg3 },
      // Add more medical courses as needed
    ],
    hsc: [
      { title: 'HSC Higher Math 1st', description: 'Course description goes here.', price: '$80', image: HSCImg1 },
      { title: 'HSC Higher Math 2nd', description: 'Course description goes here.', price: '$90', image: HSCImg2 },
      { title: 'HSC Physics 1at', description: 'Course description goes here.', price: '$90', image: HSCImg3 },
      { title: 'HSC Physics 2nd', description: 'Course description goes here.', price: '$130', image: HSCImg4 },
      { title: 'HSC Chemistry 1st', description: 'Course description goes here.', price: '$130', image: HSCImg5 },
      { title: 'HSC Chemistry 2nd', description: 'Course description goes here.', price: '$80', image: HSCImg6 },
      { title: 'HSC Biology 1st', description: 'Course description goes here.', price: '$90', image: HSCImg7 },
      { title: 'HSC Biology 2nd', description: 'Course description goes here.', price: '$90', image: HSCImg8 },
      { title: 'HSC ICT', description: 'Course description goes here.', price: '$130', image: HSCImg9 },
     
      // Add more HSC courses as needed
    ],
    ssc: [
      { title: 'SSC Math', description: 'Course description goes here.', price: '$70', image: SSCImg1 },
      { title: 'SSC Higher Math', description: 'Course description goes here.', price: '$60', image: SSCImg2 },
      { title: 'SSC Physics', description: 'Course description goes here.', price: '$130', image: SSCImg3 },
      { title: 'SSC Chemistry', description: 'Course description goes here.', price: '$130', image: SSCImg4},
      { title: 'SSC Biology', description: 'Course description goes here.', price: '$130', image: SSCImg5},
      { title: 'SSC ICT', description: 'Course description goes here.', price: '$130', image: SSCImg6},
      // Add more SSC courses as needed
    ],
  };

  return (
    <div className="page">
      <Header />
      <Sidebar />
      <div className="content container">
        {/* Engineering Courses */}
        <section className="section">
          <h2>Engineering</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
            {courses.engineering.map((course, index) => (
              <div className="col" key={index}>
                <div className="card-1 h-100">
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

        {/* Varsity Courses */}
        <section className="section">
          <h2>Varsity</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
            {courses.varsity.map((course, index) => (
              <div className="col" key={index}>
                <div className="card-1 h-100">
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
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
            {courses.medical.map((course, index) => (
              <div className="col" key={index}>
                <div className="card-1 h-100">
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
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
            {courses.hsc.map((course, index) => (
              <div className="col" key={index}>
                <div className="card-1 h-100">
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
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
            {courses.ssc.map((course, index) => (
              <div className="col" key={index}>
                <div className="card-1 h-100">
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
