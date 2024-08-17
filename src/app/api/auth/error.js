"use client"



export default function AuthError({ error }) {
  return (
    <div>
      <h1>Authentication Error</h1>
      <p>{error}</p>
      <p>There was an error with your authentication request.</p>
    </div>
  );
}

AuthError.getInitialProps = ({ query }) => {
  return {
    error: query.error || "Unknown error",
  };
};
