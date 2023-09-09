'use client'
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primeflex/primeflex.css";
import { AuthService } from '../services/auth.service';
import { useState } from 'react';
import Login from './auth/login';
import { useEffect } from "react";

export default function Home() {
  const authService = new AuthService();
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    setIsLogged(authService.isLoggedIn());
  }, [])

  return (
    <div> {isLogged? <div>Logged</div>: <Login/>}</div>
  )
}
