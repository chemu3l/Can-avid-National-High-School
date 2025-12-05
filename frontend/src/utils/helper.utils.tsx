const truncateText = (text: string = "", maxLength: number) => {
  return text.length > maxLength 
    ? text.substring(0, maxLength - 3) + "..."
    : text;
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const newestThree = (newsData: any[]) => {
  return newsData
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() -
        new Date(a.createdAt).getTime()
    )
    .slice(0, 3);
};

export { truncateText, formatDate, newestThree };

