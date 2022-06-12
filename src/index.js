import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//auth
import {Provider}  from 'react-redux';
import store from './auth/store';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
    
  </React.StrictMode>
);
/*<React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/*" element={<App/>}/>
    <App />
    </Routes>
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
  */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals