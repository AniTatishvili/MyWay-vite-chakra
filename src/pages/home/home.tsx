import { HomeSlider } from "./home-slider/home-slider";
import { HomeDestination } from "./home-destination";
import { HomeServices } from "./home-services/home-services";
import { HomeProducts } from "./home-products";
import { HomeFood } from "./home-food";
import { HomeNewsletter } from "./home-newsletter";

export const Home = () => {
  return (
    <>
      <HomeSlider />
      <HomeServices />
      <HomeDestination />
      <HomeProducts />
      <HomeFood />
      <HomeNewsletter />
    </>
  );
};
