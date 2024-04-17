// CourseManagement.test.js

// Import necessary modules
const axios = require('axios');

// Scenario: Create a Course
test('Given the teacher is logged in and on their dashboard, when they navigate to the course creation page and submit a new course with the required information, then the course is created and visible in their course list', async () => {
  // 1. Mock user authentication
  const teacher = { username: 'teacher@example.com', password: 'password' };
  const loginResponse = await axios.post('/api/login', teacher);
  expect(loginResponse.status).toBe(200);

  // 2. Navigate to the course creation page and submit a new course
  const newCourse = { courseName: 'Mathematics', description: 'Basic math concepts' };
  const createCourseResponse = await axios.post('/api/courses', newCourse);
  expect(createCourseResponse.status).toBe(201);

  // 3. Verify that the course is created and visible in the teacher's course list
  const dashboardCoursesResponse = await axios.get('/api/dashboard/courses');
  expect(dashboardCoursesResponse.status).toBe(200);
  const dashboardCourses = dashboardCoursesResponse.data;
  expect(dashboardCourses).toContainEqual(expect.objectContaining(newCourse));
});
