const teacherIcons = document.querySelectorAll('.avatar');

teacherIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    const teacherFormContainer = document.getElementById('teacher-form-container');
    teacherFormContainer.style.display = teacherFormContainer.style.display === 'none' ? 'block' : 'none';
  });
});

const teacherForm = document.getElementById('teacher-form');

teacherForm.addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent default form submission

  const formData = new FormData(teacherForm);

  // Here's an example using Fetch API for sending data to a server (replace with your backend logic)
  try {
    const response = await fetch('/api/teachers', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Error adding teacher: ${response.statusText}`);
    }

    alert('Teacher information added successfully!');
    teacherForm.reset();
    document.getElementById('teacher-form-container').style.display = 'none';
  } catch (error) {
    console.error('Error adding teacher:', error);
    alert('An error occurred. Please try again later.');
  }
});


teacherForm.addEventListener('submit', async (event) => {
    // ... existing code for preventing default submission and creating FormData ...
  
    try {
      const response = await fetch('/api/teachers', {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error(`Error adding teacher: ${response.statusText}`);
      }
  
      const teacherData = await response.json(); // Parse the response data
  
      // Get the container element for teachers (assuming it has an ID)
      const teacherContainer = document.getElementById('teacher-container');
  
      // Optionally fetch existing teacher data (if needed)
      const existingTeachers = await getTeacherData();
  
      // Clear existing teacher elements (if applicable)
      teacherContainer.innerHTML = ''; // Remove existing elements
  
      // Loop through existing and new teachers to create elements
      const allTeachers = [...existingTeachers, teacherData]; // Combine existing and new
      allTeachers.forEach(teacher => {
        const teacherElement = createTeacherElement(teacher);
        teacherContainer.appendChild(teacherElement);
      });
  
      alert('Teacher information added successfully!');
      teacherForm.reset();
      document.getElementById('teacher-form-container').style.display = 'none';
    } catch (error) {
      console.error('Error adding teacher:', error);
      alert('An error occurred. Please try again later.');
    }
  });
  