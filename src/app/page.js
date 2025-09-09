import CardFeed from "@/components/CardFeed";
import Header from "../components/Header";
import SearchBar from "@/components/SearchBar";
import ActionButtons from "@/components/ActionButtons";
import BottomNav from "@/components/BottomNav";

export default function Home() {
  return (
    <div className="bg-white min-h-screen flex items-center flex-col">
        <Header />
        <SearchBar />
        <ActionButtons />
        <CardFeed />
        <BottomNav />
        
    </div>
  );
}
