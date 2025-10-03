import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// layout
import Layout from './Components/Layout';

// main pages
import Home from "./MainPages/Home";
import About from "./MainPages/About";
import Service from './MainPages/Service';
import Contact from './MainPages/Contact';
import FAQ from './MainPages/FAQ';
import Feedback from './MainPages/Feedback';

// authentication 
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import ForgetPassword from './Authentication/ForgetPassword';

// methods
import Class from "./Methods/Class";
import Function from './Methods/Function';

// Hooks 
import State from "./HOOKS/State";
import Effect from './HOOKS/Effect';
import FetchApi_effect from './HOOKS/FetchApi_effect';
import LifeCycleMethod from './HOOKS/lifeCycleMethod';
import Lifecycle_Method_Timer from './HOOKS/lifecycle_method_timer';
import Props from "./HOOKS/Props";
import PropsDrilling from "./HOOKS/PropsDrilling";
import Context from "./HOOKS/Context";
import { ThemeProvider } from './HOOKS/Theme';
import { ThemeComponent } from './HOOKS/ThemeComponent';

const App = () => {
  return (
    <ThemeProvider>
      <ThemeComponent />
      <BrowserRouter>
        <Routes>
          {/* // main pages */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<Service />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/faq" element={<FAQ />} />
          </Route>

          {/* // authentication */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forget-password" element={<ForgetPassword />} />

          {/* // methods */}
          <Route path="/class" element={<Class />} />
          <Route path="/function" element={<Function />} />

          {/* // hooks */}
          <Route path="/effect" element={<Effect />} />
          <Route path="/fetch_api" element={<FetchApi_effect />} />
          <Route path="/block" element={<State />} />
          <Route path="/lifecycle" element={<LifeCycleMethod />} />
          <Route path="/lifecycle_timer" element={<Lifecycle_Method_Timer />} />
          <Route path="/props" element={<Props />} />
          <Route path="/props-drill" element={<PropsDrilling />} />
          <Route path="/context" element={<Context />} />
        
        
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
  );
};

export default App;
