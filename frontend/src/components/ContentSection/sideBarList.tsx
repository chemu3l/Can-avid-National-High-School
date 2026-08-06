import styles from "@/assets/styles/ContentSection.module.css";
import type { ContentItem } from "@/types/contentItem.interface";
import NewsCard from "@/components/ContentSection/newsCard";

interface Props {
  title: string;
  items: ContentItem[];
  onSelect: (item: ContentItem) => void;
  onSeeMore: () => void;
  hasMore: boolean;
}

export default function SidebarList({
  title,
  items,
  onSelect,
  onSeeMore,
  hasMore,
}: Props) {
  return (
    <aside className={styles.sidebar}>
      <h3>{title}</h3>

      <div className={styles.sidebarList}>
        {items.map((item) => (
          <NewsCard key={item.id} item={item} onClick={onSelect} />
        ))}

        {hasMore && (
          <button className={styles.moreBtn} onClick={onSeeMore}>
            See More
          </button>
        )}
      </div>

    </aside>
  );
}
