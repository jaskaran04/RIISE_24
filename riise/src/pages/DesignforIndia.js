import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import Speakers from "../components/Speakers";
import Footer from "../components/Footer";
import "./HealthcarePage.css";

const DesignforIndia = () => {
    const footerRef = useRef();
      const keynoteData = [
        {
          title: "Prof. Pradeep Yammiyavar",
          body: "Design Group, Dept of MMAE, IIT Dharwad",
          image: "/image 41.png",
          alt: "jaswinderchadha",
        },
      ];
    

    const scrollToFooter = () => {
        footerRef.current.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div>
            <Navbar scrollToFooter={scrollToFooter} />
            <PageHeader
                title="Design For India"
                subtitle="Build for India"
                description="Research Innovation and Incubation Showcase Events (RIISE), the annual flagship event of IIIT Delhi, brings together the brightest minds from academia, industry, and government under a roof, building a platform that transcends boundaries, transforming academic brilliance into tangible impact so as to create Human Centered solutions for India's unique challenges"
                image="/designforIndia.png"
            />
            <Speakers speakerData={keynoteData} heading="SPEAKER"/>

            <Footer footerRef={footerRef} />
        </div>
    );
};

export default DesignforIndia;
