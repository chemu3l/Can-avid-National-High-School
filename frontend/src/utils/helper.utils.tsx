import type { ContentItem } from "@/types/contentItem.interface";

const parseDate = (date: string): number => {
  const [month, day, year] = date.split("/").map(Number);
  return new Date(year, month - 1, day).getTime();
};

const truncateText = (text: string = "", maxLength: number) => {
  return text.length > maxLength
    ? text.substring(0, maxLength - 3) + "..."
    : text;
};

const formatDate = (date: string): string => {
  const [month, day, year] = date.split("/").map(Number);

  const parsedDate = new Date(year, month - 1, day);

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(parsedDate);
};

const getNewestItems = <T extends { date: string }>(
  items: T[],
  count = 3,
): T[] => {
  return [...items]
    .sort((a, b) => {
      const [monthA, dayA, yearA] = a.date.split("/").map(Number);
      const [monthB, dayB, yearB] = b.date.split("/").map(Number);

      return (
        new Date(yearB, monthB - 1, dayB).getTime() -
        new Date(yearA, monthA - 1, dayA).getTime()
      );
    })
    .slice(0, count);
};

export { truncateText, formatDate, getNewestItems };
