import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import { TransitionProvider } from '../context/TransitionContext';
import TransitionComponent from '../components/Transition';
import Inicio from '../components/Inicio/Inicio';
import Proyecto from '../components/Inicio/Inicio';


const Router = () => {
  return (
    <TransitionProvider>
      <Routes>
        
        <Route
          index
          element={
            <TransitionComponent>
              <Inicio />
            </TransitionComponent>
          }
        />
    
      </Routes>


    </TransitionProvider>
  );
};

export default Router;
