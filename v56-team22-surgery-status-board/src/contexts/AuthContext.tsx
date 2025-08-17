import React from 'react';
import { useEffect, useState } from 'react';
import users from '../components/SignIn/users.json';
import { AuthError } from '@/lib/authUtils';
import { AuthContext, type User, INVALID_EMAIL_MSG, INVALID_PASSWORD_MSG } from './auth-context-types';
import { v4 as uuidv4 } from 'uuid';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const signIn = (email: string, inputPassword: string) => {
    const storedUser = users.find((credential) => credential.email === email);

    if (!storedUser) {
      return Promise.reject(new AuthError(INVALID_EMAIL_MSG));
    }

    if (storedUser.password !== inputPassword) {
      return Promise.reject(new AuthError(INVALID_PASSWORD_MSG));
    }
    //eslint-disable-next-line
    const { password: _, ...userProps } = storedUser as User & {
      password: string;
    };
    setUser(userProps);
    return Promise.resolve(userProps);
  };

  const signInAsGuest = () =>
    setUser({
      id: uuidv4(),
      role: 'guest',
    });

  const signOut = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, signIn, signInAsGuest, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};