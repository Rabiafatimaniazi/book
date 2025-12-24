import React from 'react';
import Layout from '@theme/Layout';
import Signup from '@site/src/components/auth/Signup';

export default function SignupPage() {
  const handleSignupSuccess = (userData) => {
    // Handle successful signup
    console.log('Signup successful', userData);
    // Redirect to dashboard or welcome page
    window.location.href = '/dashboard';
  };

  return (
    <Layout title="Sign Up" description="Create a new account">
      <Signup onSignupSuccess={handleSignupSuccess} />
    </Layout>
  );
}