import Header from "@/components/sections/Header";
import NewsLetter from "@/components/sections/NewsLetter";
import Products from "@/components/sections/Products";
import Promotion from "@/components/sections/Promotion";
import Unique from "@/components/sections/Unique";

export default function Home() {
  return (
    <main>
      <Header />
      <Promotion />
      <Products />
      <Unique />
      <NewsLetter />
    </main>
  );
}
