import styles from "@/assets/styles/ContentSection.module.css";
import type { ContentItem } from "@/types/contentItem.interface";

interface Props {
  item: ContentItem;
  onClick?: (item: ContentItem) => void;
}

export default function NewsCard({
  item,
  onClick,
}: Props) {
  return (
    <div
      className={styles.newsCard}
      onClick={() => onClick?.(item)}
    >
      <img
        src={item.image}
        alt={item.title}
        className={styles.newsImage}
      />

      <div className={styles.newsContent}>
        <h4>{item.title}</h4>

        <span>{item.date}</span>
      </div>
    </div>
  );
}