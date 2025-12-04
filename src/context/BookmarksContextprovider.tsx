import { createContext, useState } from 'react';

export const BookmarksContext = createContext(null);

export default function BookmarksContextprovider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [bookmarkedIds, setBookmarkedIds] = useState<number[]>([]);

  const handleToggleBookmark = (jobItemId: number) => {
    if (bookmarkedIds.includes(jobItemId)) {
      setBookmarkedIds((prev) => prev.filter((id) => id !== jobItemId));
    } else {
      setBookmarkedIds((prev) => [...prev, jobItemId]);
    }
  };

  return (
    <BookmarksContext.Provider value={{ bookmarkedIds, handleToggleBookmark }}>
      {children}
    </BookmarksContext.Provider>
  );
}
