import React from "react";
import Card from "./Card";

function Categories() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Top Row of Cards */}
      <div className="flex justify-center flex-wrap gap-4 py-8 px-4">
        <Card
          title="ARTIFICIAL INTELLIGENCE"
          description="15 Questions in 15 minutes of AI!"
          imageUrl="https://media.istockphoto.com/id/1452604857/photo/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.jpg?s=612x612&w=0&k=20&c=GkAOxzduJbUKpS2-LX_l6jSKtyhdKlnPMo2ito4xpR4="
          linkTo="/ai-quiz"
        />
        <Card
          title="CYBER SECURITY"
          description="15 Questions in 15 minutes of CYBER!"
          imageUrl="https://www.shutterstock.com/image-photo/business-person-explore-core-cyber-600nw-2510584693.jpg"
          linkTo="/cyber-quiz"
        />
        <Card
          title="WEB DEVELOPMENT"
          description="15 Questions in 15 minutes of WEB!"
          imageUrl="https://miro.medium.com/v2/resize:fit:1400/1*fHrAZJ1_L0Ff9dvVexL5_A.png"
          linkTo="/web-quiz"
        />
        <Card
          title="DATA SCIENCE"
          description="15 Questions in 15 minutes of DS!"
          imageUrl="https://cdn.prod.website-files.com/63ccf2f0ea97be12ead278ed/644a18b637053fa3709c5ba2_what-is-data-science.jpg"
          linkTo="/ds-quiz"
        />
      </div>

      {/* Second Row of Cards */}
      <div className="flex justify-center flex-wrap gap-4 py-8 px-4">
        <Card
          title="DATA STRUCTURE(C++)"
          description="15 Questions in 15 minutes of DSA!"
          imageUrl="https://repository-images.githubusercontent.com/403817624/3d10f761-1027-4d0a-9906-48361e466d87"
          linkTo="/dsa-quiz"
        />
        <Card
          title="UI/UX"
          description="15 Questions in 15 minutes of UI/UX!"
          imageUrl="https://www.solutelabs.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F0mnqm898%2Fproduction%2Fc00bce58c817ec3a16945711111641d37320ae67-2240x1260.png&w=3840&q=75"
          linkTo="/ui-quiz"
        />
        <Card
          title="MOBILE APP DEVELOPMENT"
          description="15 Questions in 15 minutes of MAD!"
          imageUrl="https://api.reliasoftware.com/uploads/the_complete_guide_to_mobile_app_development_2021_ded2abd1b1.png"
          linkTo="/mad-quiz"
        />
        <Card
          title="MERN(Full Stack)"
          description="15 Questions in 15 minutes of MERN!"
          imageUrl="https://images.prismic.io/loco-blogs/79328284-f97b-489f-924c-eb3b17e34b56_image2.png?auto=compress%2Cformat&rect=0%2C0%2C1999%2C1124&w=1920&h=1080&ar=1.91%3A1"
          linkTo="/mern-quiz"
        />
      </div>
    </div>
  );
}

export default Categories;
