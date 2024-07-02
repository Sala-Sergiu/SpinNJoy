import ProductHero from "../../app/components/ProductHero";
import ProductValues from "../../app/components/ProductValues";
import ProductCategories from "../../app/components/ProductCategories";
import ProductHowItWorks from "../../app/components/ProductHowItWorks";
import ProductCTA from "../../app/components/ProductCTA";
import ProductSmokingHero from "../../app/components/ProductSmokingHero";
import AppFooter from "../../app/components/AppFooter";

export default function HomePage() {
  return (
    <div style={{ overflow: "hidden" }}>
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter />
    </div>
  );
}
