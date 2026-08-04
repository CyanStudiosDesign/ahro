import React from "react";

interface BlogCard {
  image: string;
  title: string;
  excerpt: string;
  authorName: string;
  authorAvatar: string;
  date: string;
}

const cards: BlogCard[] = [
  {
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=400&fit=crop",
    title: 'Interview with Economist and UX Designer, Maya Louvière',
    excerpt:
      "Maya Louvière is an Economist and UX Designer from Wellington, New Zealand. She has worked with Spotify, Nike, Chews, Makr, and Square. Mia de Silva sat down wit...",
    authorName: "Demi Wilkinson",
    authorAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
    date: "16 Jan 2024",
  },
  {
    image: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?w=600&h=400&fit=crop",
    title: 'Improve Your UI Design Skills: Develop an "Eye" for Design',
    excerpt:
      'The design industry is constantly evolving, but good design is timeless. Learn how to quickly develop an "eye" for UI design and improve your design skills in no time at...',
    authorName: "Candice Wu",
    authorAvatar: "https://randomuser.me/api/portraits/women/68.jpg",
    date: "15 Jan 2024",
  },
];

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "32px",
    maxWidth: "1120px",
    margin: "0 auto",
    fontFamily:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  } as React.CSSProperties,
  card: {
    display: "flex",
    flexDirection: "column" as const,
    cursor: "pointer",
  },
  imageWrap: {
    width: "100%",
    aspectRatio: "16 / 10",
    borderRadius: "16px",
    overflow: "hidden",
    marginBottom: "20px",
  } as React.CSSProperties,
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover" as const,
    display: "block",
  },
  titleRow: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "8px",
  },
  title: {
    fontSize: "24px",
    fontWeight: 600,
    lineHeight: 1.35,
    color: "#181D27",
    margin: 0,
  },
  arrow: {
    fontSize: "20px",
    color: "#181D27",
    flexShrink: 0,
    marginTop: "6px",
  },
  excerpt: {
    fontSize: "16px",
    lineHeight: 1.6,
    color: "#535862",
    marginTop: "12px",
    marginBottom: "20px",
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical" as const,
    overflow: "hidden",
  },
  authorRow: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginTop: "auto",
  },
  avatar: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    objectFit: "cover" as const,
  },
  authorText: {
    fontSize: "14px",
    color: "#414651",
  },
  authorName: {
    fontWeight: 600,
    color: "#181D27",
  },
};

export default function BlogCardGrid() {
  return (
    <div style={styles.grid}>
      {cards.map((card, i) => (
        <article key={i} style={styles.card}>
          <div style={styles.imageWrap}>
            <img src={card.image} alt={card.title} style={styles.image} />
          </div>
          <div style={styles.titleRow}>
            <h3 style={styles.title}>{card.title}</h3>
            <span style={styles.arrow}>↗</span>
          </div>
          <p style={styles.excerpt}>{card.excerpt}</p>
          <div style={styles.authorRow}>
            <img
              src={card.authorAvatar}
              alt={card.authorName}
              style={styles.avatar}
            />
            <span style={styles.authorText}>
              <span style={styles.authorName}>{card.authorName}</span>
              {" • " + card.date}
            </span>
          </div>
        </article>
      ))}
    </div>
  );
}