import Body from "@/components/body";
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
}
