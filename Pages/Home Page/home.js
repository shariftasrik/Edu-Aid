const teacherIcons = document.querySelectorAll('.avatar');

teacherIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    const teacherFormContainer = document.getElementById('teacher-form-container');
    teacherFormContainer.style.display = teacherFormContainer.style.display === 'none' ? 'block' : 'none';
  });
});
const teacherForm = document.getElementById('teacher-form');

teacherForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Here you would handle form data (e.g., send to server)
  console.log('Teacher information submitted:', new FormData(teacherForm));

  // Show success message (optional)
  alert('Teacher information added successfully!');

  // Reset the form (optional)
  teacherForm.reset();

  // Hide the form (optional)
  document.getElementById('teacher-form-container').style.display = 'none';
});
