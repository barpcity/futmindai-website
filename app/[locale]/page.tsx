import JsonLd from "@/components/seo/JsonLd";
import HomeContent from "@/components/HomeContent";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-white overflow-x-hidden">
      <JsonLd />
      <HomeContent />
    </main>
  );
}
