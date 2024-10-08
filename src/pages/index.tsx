import React from 'react';
import Main from '../sections/Main/Main';
import Header from '../components/Header/Header';
import Features from '../sections/Features/Features';
import Pro from '../sections/Pro/Pro';
import Creators from '../sections/Creators/Creators';
import Footer from '../components/Footer/Footer';
import { ThemeProvider } from '../components/ThemeContext/ThemeContext';
import Layout from '../components/Layout/Layout';

const Index = () => {
  return (
    <ThemeProvider>
      <Layout>
        <Header />
        <Main />
        <Features />
        <Pro />
        <Creators />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default Index;
