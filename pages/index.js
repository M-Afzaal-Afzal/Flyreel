import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import FeatureSection from "../components/Home/FeatureSection";
import FeatureUniversalSection from "../components/Home/FeatureUniversalSection";

export default function Index() {
    return (
        <>
            <HeroSection/>
            <FeatureSection/>
            <FeatureUniversalSection
                bgColor={'rgba(10,5,43,0.79)'}
                color={'white'}
                bottomText={'As users scan their property using their smartphone camera, our proprietary computer vision technology does the heavy lifting, automatically documenting critical property information like hazards, risks, features, materials and more.'}
                iconUrl={'https://www.flyreel.co/resources/home/icon-feature-2.png'}
                preHeadingText={'FR.02  /  Insurance specific computer vision'}
                heading={'AI provides the data you need and the experience and protection your customers deserve.'}
            />
            <FeatureUniversalSection
                bgColor={'white'}
                color={'rgba(10,5,43,0.79)'}
                bottomText={'With our modern API, underwriting and claims data captured from AI-assisted self-service inspections and claims filings can integrate directly into your preferred platform.'}
                iconUrl={'https://www.flyreel.co/resources/home/icon-feature-3.png'}
                preHeadingText={'FR.03 / DATA INTEGRATION'}
                heading={'Data is integrated into your preferred platform.'}
            />
        </>

    );
}
