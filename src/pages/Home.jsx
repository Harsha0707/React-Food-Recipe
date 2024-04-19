import { getCountry } from "../services/apiFetch";
import AlphabetList from "../ui/AlphabetList";
import Country from "../ui/Country";
import { useLoaderData } from "react-router-dom";
import Heading from "../ui/Heading";
import RichText from "../ui/RichText";

function Home() {
  const countryLoader = useLoaderData();

  return (
    <>
      <Heading as="h1">Welcome to Food Recipe</Heading>
      <RichText
        headingSize="h2"
        heading="Delicious Recipes for Every Occasion"
        sentence="Looking for inspiration in the kitchen? You've come to the right place! Our recipe collection features a wide range of mouthwatering dishes that are easy to make and sure to impress your family and friends."
      />
      <Country countryLoader={countryLoader} />
      <RichText
        headingSize="h2"
        heading="International Flavors"
        sentence="Travel the world with your taste buds with our international recipes. Explore the flavors of Italy with authentic pasta dishes, savor the spices of India with flavorful curries, or try your hand at sushi with our Japanese-inspired recipes."
      />
      <RichText
        headingSize="h2"
        heading="Quick and Easy Recipes"
        sentence="Whether you're short on time or just want a simple meal, our quick and easy recipes are perfect for busy weeknights. From 30-minute meals to one-pot wonders, we've got you covered."
      />
      <RichText
        headingSize="h2"
        heading="Healthy and Nutritious Options"
        sentence="Eating healthy doesn't have to be boring. Our collection of nutritious recipes includes everything from salads and smoothies to hearty soups and satisfying main dishes. Discover new ways to incorporate fruits, vegetables, and whole grains into your diet."
      />
      <RichText
        headingSize="h2"
        heading="Start Exploring Today!"
        sentence="Whether you're a seasoned chef or just starting out, our recipe collection has something for everyone. Browse our recipes, try something new, and unleash your inner chef!"
      />
      <AlphabetList />
    </>
  );
}

export async function loader() {
  const country = await getCountry();
  return country;
}

export default Home;
