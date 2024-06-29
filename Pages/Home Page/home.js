const teacherIcons = document.querySelectorAll('.avatar');

teacherIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    const teacherFormContainer = document.getElementById('teacher-form-container');
    teacherFormContainer.style.display = teacherFormContainer.style.display === 'none' ? 'block' : 'none';
  });
});
const teacherForm = document.getElementById('teacher-form');

teacherForm.addEventListener('submit', (event) => {
  event.preventDefault(); 


  console.log('Teacher information submitted:', new FormData(teacherForm));


  alert('Teacher information added successfully!');


  teacherForm.reset();

  
  document.getElementById('teacher-form-container').style.display = 'none';
});
