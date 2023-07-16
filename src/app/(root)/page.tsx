import Header from "@/components/Sections/Header";
import NewsLetter from "@/components/Sections/NewsLetter";
import Products from "@/components/Sections/Products";
import Promotion from "@/components/Sections/Promotion";
import Unique from "@/components/Sections/Unique";

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
