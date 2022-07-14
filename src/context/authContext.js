/**
 * Context and Provider used for user authentication in NeuralSearchX client.
 */
 import React, { createContext, useState, useEffect } from 'react';
 
 export const AuthProvider = ({ children }) => {
   const [authString, setAuthString] = useState(null);
 
   const providerValue = {
    authString,
    setAuthString,
   };
   return <AuthContext.Provider value={providerValue}>{children}</AuthContext.Provider>;
 };
 
 /**
  * Authentication context, used to access and store API tokens in the browser's
  * localStorage.
  *
  * Its values are:
  *
  * `user` as an UserState object. Inside `user.token` you can find the token to
  * authenticate your requests.
  *
  * `refreshToken` callback, used to delete the current token from the localStorage
  * (if exists) and get a new one from the token's endpoint.
  *
  * @example
  * ```typescript
  * const { user, refreshToken } = useContext(AuthContext);
  * ```
  */
 export const AuthContext = createContext(null);
 
 export default AuthContext;
 