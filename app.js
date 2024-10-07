// Simulated users with role-based access
const users = [
    { username: 'admin', password: 'admin123', role: 'admin' },
    { username: 'employee', password: 'emp123', role: 'employee' },
  ];
  
  // Elements
  const loginForm = document.getElementById('login-form');
  const adminDashboard = document.getElementById('admin-dashboard');
  const employeeDashboard = document.getElementById('employee-dashboard');
  const errorMessage = document.getElementById('error-message');
  
  // Event listener for login form
  document.getElementById('login').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Check for valid user
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
      // Set role in local storage to simulate a session
      localStorage.setItem('userRole', user.role);
      displayDashboard(user.role);
    } else {
      errorMessage.textContent = 'Invalid credentials. Please try again.';
    }
  });
  
  // Display the relevant dashboard
  function displayDashboard(role) {
    loginForm.style.display = 'none';
    errorMessage.textContent = ''; // Clear error message
  
    if (role === 'admin') {
      adminDashboard.style.display = 'block';
    } else if (role === 'employee') {
      employeeDashboard.style.display = 'block';
    }
  }
  
  // Logout function
  function logout() {
    localStorage.removeItem('userRole');
    loginForm.style.display = 'block';
    adminDashboard.style.display = 'none';
    employeeDashboard.style.display = 'none';
  }
  
  // Check if user is already logged in on page load
  document.addEventListener('DOMContentLoaded', () => {
    const role = localStorage.getItem('userRole');
    if (role) {
      displayDashboard(role);
    }
  });
  