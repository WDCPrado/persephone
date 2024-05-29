import Navbar from "@/components/navbar";

export const revalidate = 0;
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="pb-10">
        <Navbar />
      </div>
      <div className="min-h-[80vh]">{children}</div>
    </>
  );
}
