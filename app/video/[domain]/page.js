import DemoVideoPage from "@/components/demo-video-page";

export default async function Page({ params, searchParams }) {
  const { domain } = await params;
  const query = await searchParams;
  const { userId, id } = query;
  return (
    <DemoVideoPage domain={domain} id={id} query={query} userId={userId} />
  );
}
