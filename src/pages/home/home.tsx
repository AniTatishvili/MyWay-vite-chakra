import React from "react";
import { HomeSlider } from "./home-slider/home-slider";
import { HomeDestination } from "./home-destination";
import { HomeServices } from "./home-services/home-services";
import { HomeCapsule } from "./home-capsule";
import { HomeFood } from "./home-food";
import { HomeQuestions } from "./home-newsletter";

export const Home = () => {
  return (
    <>
      <HomeSlider />
      <HomeServices />
      <HomeDestination />
      <HomeCapsule />
      <HomeFood />
      <HomeQuestions />
    </>
  );
};
