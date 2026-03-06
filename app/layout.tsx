export const metadata = {
  title: "PVV Next Generation Event",
  description: "PVV AG Kundenveranstaltung",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
