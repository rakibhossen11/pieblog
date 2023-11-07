import React from 'react';
import Hero from './container/Hero';
import Articles from './container/Articles';
import CTA from './container/CTA';

const HomePage = () => {
    return (
        <div>
            <Hero />
            <Articles />
            <CTA />
        </div>
    );
};

export default HomePage;