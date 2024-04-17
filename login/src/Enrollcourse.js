// CourseManagement.test.js

// Scenario: Enroll in a Course
test('Given the student is logged in and on the course catalog page, when they select a course and enroll, then the course is added to their dashboard', async () => {
    // 1. Mock user authentication
    const student = { username: 'student@example.com', password: 'password' };
    const loginResponse = await axios.post('/api/login', student);
    expect(loginResponse.status).toBe(200);
  
    // 2. Retrieve a course from the catalog
    const catalogCoursesResponse = await axios.get('/api/catalog/courses');
    expect(catalogCoursesResponse.status).toBe(200);
    const selectedCourse = catalogCoursesResponse.data[0]; // Assuming the first course is selected
    expect(selectedCourse).toBeDefined();
  
    // 3. Enroll in the selected course
    const enrollCourseResponse = await axios.post(`/api/courses/${selectedCourse.id}/enroll`);
    expect(enrollCourseResponse.status).toBe(200);
  
    // 4. Verify that the enrolled course is added to the student's dashboard
    const dashboardCoursesResponse = await axios.get('/api/dashboard/courses');
    expect(dashboardCoursesResponse.status).toBe(200);
    const dashboardCourses = dashboardCoursesResponse.data;
    expect(dashboardCourses).toContainEqual(expect.objectContaining(selectedCourse));
  });
  