// ResetPasswordPage.js

import React, { useState } from 'react';

const ResetPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate email, password, and confirmPassword
    if (!email || !password || !confirmPassword) {
      setErrorMessage('All fields are required.');
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage('Password and Confirm Password do not match.');
      return;
    }
    // Send reset password request to the server (not implemented here)
    // This is where you would make an API request to your backend to reset the password
    // For demonstration purposes, we'll just show a success message
    setSuccessMessage('Password reset request sent successfully.');
  };

  return (
    <div class="container mx-auto px-4">
  <h2 class="text-2xl font-semibold mb-4">Reset Password</h2>
  {errorMessage && <p class="text-red-500">{errorMessage}</p>}
  {successMessage && <p class="text-green-500">{successMessage}</p>}
  <form onSubmit={handleSubmit} class="max-w-md">
    <div class="mb-4">
      <label class="block mb-2" for="email">Email:</label>
      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
    </div>
    <div class="mb-4">
      <label class="block mb-2" for="password">New Password:</label>
      <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
    </div>
    <div class="mb-4">
      <label class="block mb-2" for="confirmPassword">Confirm Password:</label>
      <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
    </div>
    <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Reset Password</button>
  </form>
</div>

  );
};

export default ResetPasswordPage;
