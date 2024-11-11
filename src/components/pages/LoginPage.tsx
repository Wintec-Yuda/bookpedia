'use client';

<<<<<<< HEAD:src/components/pages/LoginPage.tsx
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signIn } from "next-auth/react";
=======
// import { useState } from "react";
>>>>>>> 60a45b0a1ed68bb2765b5f617c8960b5ce617424:src/app/(auth)/login/page.tsx

// export default function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("/api/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       if (!response.ok) {
//         throw new Error("Login failed");
//       }

//       const data = await response.json();
//       console.log("Login successful:", data);

//       // Redirect or handle successful login
//     } catch (err) {
//       setError("Login failed. Please check your credentials.");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-6">
//       <div>
//         <label
//           htmlFor="email"
//           className="block text-sm font-medium text-gray-700"
//         >
//           Email
//         </label>
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-gray-500"
//           required
//         />
//       </div>
//       <div>
//         <label
//           htmlFor="password"
//           className="block text-sm font-medium text-gray-700"
//         >
//           Password
//         </label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-gray-500"
//           required
//         />
//       </div>
//       {error && <p className="text-sm text-red-500">{error}</p>}
//       <button
//         type="submit"
//         className="w-full py-2 px-4 bg-gray-900 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring"
//       >
//         Sign In
//       </button>
//       <p>
//         Don't have an account?{" "}
//         <a href="/register" className="text-blue-500 hover:underline">
//           Sign Up
//         </a>
//       </p>
//     </form>
//   );
// }

// pages/login.js
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
<<<<<<< HEAD:src/components/pages/LoginPage.tsx
  const [error, setError] = useState("");
=======
>>>>>>> 60a45b0a1ed68bb2765b5f617c8960b5ce617424:src/app/(auth)/login/page.tsx
  const router = useRouter();

  const handleLogin = async (e : React.FormEvent) => {
    e.preventDefault();
<<<<<<< HEAD:src/components/pages/LoginPage.tsx

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
  
      if (result?.ok) {
        router.push("/");
      } else {
        setError("Login failed. Please check your credentials.");
      }
    } catch (err) {
      setError("Login failed. Please check your credentials.");
=======
  
  const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
  
    if (result && result.ok) {
      router.push("/");
    } else {
      alert("Login failed");
>>>>>>> 60a45b0a1ed68bb2765b5f617c8960b5ce617424:src/app/(auth)/login/page.tsx
    }
  };

  return (
<<<<<<< HEAD:src/components/pages/LoginPage.tsx
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-gray-500"
          required
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-gray-500"
          required
        />
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
      <button
        type="submit"
        className="w-full py-2 px-4 bg-gray-900 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring"
      >
        Sign In
      </button>
      <p>
        Don't have an account?{" "}
        <Link href="/auth/register" className="text-blue-500 hover:underline">
          Sign Up
        </Link>
      </p>
=======
    <form onSubmit={handleLogin}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
>>>>>>> 60a45b0a1ed68bb2765b5f617c8960b5ce617424:src/app/(auth)/login/page.tsx
    </form>
  );
}
