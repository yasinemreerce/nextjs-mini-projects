import Card from "@/components/Card";

export const metadata = {
  title: "Personal Card",
  description: "Kullanıcının kişisel kartı",
  keywords: ["Kişisel Kart", "Web Geliştirici", "Programcı"]
};


export default function Home() {
  return (
    <>
      <div>
        <Card />
      </div>
    </>
  );
}
