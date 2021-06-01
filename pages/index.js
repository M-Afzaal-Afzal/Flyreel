import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import FeatureSection from "../components/Home/FeatureSection";
import FeatureUniversalSection from "../components/Home/FeatureUniversalSection";
import TextWithImage from "../components/Home/TextWithImage";

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
            <TextWithImage
                heading={'Underwriting'}
                p1={'Comprehensive interior and exterior data for total property understanding, more informed underwriting'}
                p2={'Industry leading self-service inspection experience that customers overwhelmingly prefer'}
                p3={'Better data, faster, with accelerated data-intake during the underwriting window'}
                imagUrl={"https://www.flyreel.co/resources/home/mobile/house-1.jpg"}
            />

            <TextWithImage
                heading={'Claims'}
                p1={'Comprehensive interior and exterior data for total property understanding, more informed underwriting'}
                p2={'Industry leading self-service inspection experience that customers overwhelmingly prefer'}
                p3={'Better data, faster, with accelerated data-intake during the underwriting window'}
                imagUrl={"https://www.flyreel.co/resources/home/mobile/house-2.jpg"}
            />

            <TextWithImage
                heading={'Risk Management'}
                p1={'Comprehensive interior and exterior data for total property understanding, more informed underwriting'}
                p2={'Industry leading self-service inspection experience that customers overwhelmingly prefer'}
                p3={'Better data, faster, with accelerated data-intake during the underwriting window'}
                imagUrl={"https://www.flyreel.co/resources/home/mobile/house-3.jpg"}
            />
        </>

    );
}
