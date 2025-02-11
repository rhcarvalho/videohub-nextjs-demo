import DemoVideoPage from "@/components/demo-video-page";

export default async function Page({ params, searchParams }) {
  const { domain, id } = await params;
  const query = await searchParams;
  const { userId } = query;
  return (
    <DemoVideoPage domain={domain} id={id} query={query} userId={userId} />
  );
}
