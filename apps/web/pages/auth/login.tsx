import {Button} from 'primereact/button'
import {InputText} from 'primereact/inputtext'
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primeflex/primeflex.css";
import { AuthService } from '../../services/auth.service';
import { useState } from 'react';
import { CreateUserDto } from 'types';

export default function Login() {
  const [username, setUsername] = useState('username');
  const [password, setPassword] = useState('password');
  
  const authService = new AuthService();

  const onSubmit = (() => {
    setUsername('');
    setPassword('');
    return authService.login({username, password} as CreateUserDto)
        .then(() => {
        })
        .catch();
  });

  return (
    <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
      <div className="text-center mb-5">
        <div className="text-900 text-3xl font-medium mb-3">Welcome Back</div>
        <span className="text-600 font-medium line-height-3">Don't have an account?</span>
        <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</a>
      </div>

      <div>
        <label htmlFor="username" className="block text-900 font-medium mb-2">Username</label>
        <InputText id="username" name="username" type="text" value={username} placeholder="Username" className="w-full mb-3" onChange={(event) => {
          setUsername(event.target.value);
        }}/>

        <label htmlFor="password" className="block text-900 font-medium mb-2">Password</label>
        <InputText id="password" name="password" type="password" value={password} placeholder="Password" className="w-full mb-3" onChange={(event) => {
          setPassword(event.target.value);
        }}/>

        <Button label="Sign In" icon="pi pi-user" className="w-full" onClick={() => onSubmit()}/>
      </div>
    </div>
  )
}
