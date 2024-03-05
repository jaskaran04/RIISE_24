import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import Speakers from "../components/Speakers";
import Footer from "../components/Footer";

const Computationalgastronomy = () => {
    const footerRef = useRef();
    const speakerData = [
        {
          title: "Manu Bajaj",
          body: "Founder and MD NuTaste Group",
          image: "/manu.png",
          alt: "jaswinderchadha",
        },
        
        // Add more keynote speakers as needed
      ];
     
    const scrollToFooter = () => {
        footerRef.current.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div>
            <Navbar scrollToFooter={scrollToFooter} />
            <PageHeader
                title="Computational Gastronomy"
                subtitle="Build for India"
                description="Research Innovation and Incubation Showcase Events (RIISE), 
                the annual flagship event of IIIT Delhi, brings together the brightest minds from academia, 
                industry, and government under a roof, building a platform that transcends boundaries, 
                transforming academic brilliance into tangible impact."
                image="/Computationalgastronomy.png"
            />
             <Speakers speakerData={speakerData} heading="SPEAKERS" />
            <Footer footerRef={footerRef} />
        </div>
    );
};

export default Computationalgastronomy;
