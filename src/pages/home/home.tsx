import { HomeSlider } from "./home-slider/home-slider";
import { HomeDestination } from "./home-destination";
import { HomeServices } from "./home-services/home-services";
import { HomeProducts } from "./home-products";
import { HomeFood } from "./home-food";
import { HomeNewsletter } from "./home-newsletter";
import { BookingCalendarForm } from "src/widgets/booking-calendar-form";
import { Box } from "@chakra-ui/react";

export const Home = () => {
  return (
    <>
      <HomeSlider />
      <Box pos={"relative"}>
        <BookingCalendarForm />
        <HomeServices />
        <HomeDestination />
        <HomeProducts />
        <HomeFood />
        <HomeNewsletter />
      </Box>
    </>
  );
};
