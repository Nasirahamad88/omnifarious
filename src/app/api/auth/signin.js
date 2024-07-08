import {signIn} from 'next-auth/react'
import { useState } from 'react';


const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = async (e) => {
    e.preventDefault();

    const response = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (!response.error) {
      window.location.href = "/";
    } else {
      console.error("Failed to sign in");
    }
  };

  return (
    <div className="container">
      <h1>Signin</h1>
      <form onSubmit={handleSignin}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Signin</button>
      </form>
    </div>
  );
};

export default Signin;
