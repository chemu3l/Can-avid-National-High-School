import { useMemo, useState, useEffect } from "react";

import styles from "@/assets/styles/ContentSection.module.css";
import type { ContentItem } from "@/types/contentItem.interface";
import { FeaturedArticle } from "@/components/ContentSection/featuredArticle";
import SidebarList from "@/components/ContentSection/sideBarList";
import ContentModal from "@/components/ContentSection/contentModal";

const ITEMS_PER_LOAD = 5;

interface Props {
  title: string;
  items: ContentItem[];
  onSeeMore?: () => void;
}

export default function ContentSection({ title, items }: Props) {
  const [visibleCount, setVisibleCount] = useState(4);
  const [openResponsive, setOpenResponsive] = useState(false);

  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => {
      const [monthA, dayA, yearA] = a.date.split("/").map(Number);
      const [monthB, dayB, yearB] = b.date.split("/").map(Number);

      const dateA = new Date(yearA, monthA - 1, dayA).getTime();
      const dateB = new Date(yearB, monthB - 1, dayB).getTime();

      return dateB - dateA;
    });
  }, [items]);
  const [selected, setSelected] = useState<ContentItem>(sortedItems[0]);

  useEffect(() => {
    if (sortedItems.length > 0 && !selected) {
      setSelected(sortedItems[0]);
    }
  }, [sortedItems, selected]);

  // Remove the selected item from the sidebar
  const sidebarItems = useMemo(() => {
    return sortedItems.filter((item) => item.id !== selected?.id);
  }, [sortedItems, selected]);

  const visibleItems = sidebarItems.slice(0, visibleCount);

  const handleSeeMore = () => {
    setVisibleCount((prev) =>
      Math.min(prev + ITEMS_PER_LOAD, sidebarItems.length),
    );
  };

  return (
    <section className={styles.container}>
      <FeaturedArticle
        article={selected}
        onOpen={() => setOpenResponsive(true)}
      />
      <ContentModal
        item={selected}
        openResponsive={openResponsive}
        setOpenResponsive={setOpenResponsive}
      />
      <SidebarList
        title={title}
        items={visibleItems}
        onSelect={setSelected}
        onSeeMore={handleSeeMore}
        hasMore={visibleCount < sidebarItems.length}
      />
    </section>
  );
}
