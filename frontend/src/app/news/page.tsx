import News from "@/modules/home-page/news/News";
import { client } from "@/sanity/client";
import { NEWS_QUERY, NEWS_PAGE_QUERY } from "@/sanity/queries";

export const revalidate = 10; // revalidate page every 10 seconds for dynamic content updates

export default async function NewsPage() {
  let newsData = null;
  let newsIntro = null;

  try {
    const [news, nIntro] = await Promise.all([
      client.fetch(NEWS_QUERY).catch(() => null),
      client.fetch(NEWS_PAGE_QUERY).catch(() => null),
    ]);

    newsData = news;
    newsIntro = nIntro;
  } catch (error) {
    console.error("Failed to fetch news from Sanity:", error);
  }

  return (
    <main>
      <News
        data={newsData || undefined}
        intro={newsIntro || undefined}
        showViewAllButton={false}
        isGridView={true}
      />
    </main>
  );
}
