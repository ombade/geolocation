import React, { createContext, useContext, useState } from 'react';
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [uid, setUid] = useState('');

  const login = () => {
    setAuth(true);
  };

  const logout = () => {
    setAuth(false);
    setUid('');
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout, uid, setUid }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
