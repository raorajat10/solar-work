import CommercialPhoto from "@/components/commercialphoto";
import Customer from "@/components/customer";
import Gif from "@/components/gif";
import Reviews from "@/components/reviews";
import SolarFeatures from "@/components/SolarFeatures";
import SolarProjectEnquiry from "@/components/SolarProjectEnquiry";
import SolarStats from "@/components/SolarStats";

export default function CommercialOfferingsPage() {
  return (
    <>
      <CommercialPhoto />
      <Reviews />
      {/* <Gif /> */}
      <SolarProjectEnquiry />
      <SolarFeatures />
      <SolarStats />
      <Customer />
    </>
  );
}
