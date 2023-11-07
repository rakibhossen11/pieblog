import React from 'react';
import Hero from './container/Hero';
import Articles from './container/Articles';
import CTA from './container/CTA';
import MainLayout from '../../components/MainLayout';

const HomePage = () => {
    return (
        <MainLayout>
            <Hero />
            <Articles />
            <CTA />
        </MainLayout>
    );
};

export default HomePage;