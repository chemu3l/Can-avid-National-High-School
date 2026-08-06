import styles from "@/assets/styles/ContentSection.module.css";
import type { ContentItem } from "@/types/contentItem.interface";
import { forwardRef } from "react";
import { formatDate } from "@/utils/helper.utils";

interface Props {
  article: ContentItem;
  onOpen: () => void;
}

export const FeaturedArticle = forwardRef<HTMLDivElement, Props>(
  ({ article, onOpen }, ref) => {
    const MAX_LENGTH = 180;

    const isLong = article.description.length > MAX_LENGTH;

    const shortDescription = isLong
      ? article.description.substring(0, MAX_LENGTH).trim()
      : article.description;

    return (
      <>
        <div
          ref={ref}
          className={styles.featured}
          onClick={onOpen}
        >
          <h2>{article.title}</h2>

          <img
            src={article.image}
            alt={article.title}
            className={styles.featuredImage}
          />

          <p className={styles.date}>{formatDate(article.date)}</p>

          <p className={styles.description}>
            {shortDescription}

            {isLong && (
              <>
                ...{" "}
                <span
                  className={styles.seeMore}
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpen();
                  }}
                >
                  SEE MORE
                </span>
              </>
            )}
          </p>
        </div>
      </>
    );
  }
);