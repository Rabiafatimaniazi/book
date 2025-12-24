import React from 'react';
import Layout from '@theme/Layout';
import Login from '@site/src/components/auth/Login';

export default function LoginPage() {
  const handleLoginSuccess = (user) => {
    // Handle successful login
    console.log('Login successful', user);
    // Redirect to dashboard or previous page
    window.location.href = '/dashboard';
  };

  return (
    <Layout title="Login" description="Login to your account">
      <Login onLoginSuccess={handleLoginSuccess} />
    </Layout>
  );
}