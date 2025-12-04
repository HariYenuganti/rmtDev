import { BookmarkFilledIcon } from '@radix-ui/react-icons';
import { useContext } from 'react';
import { BookmarksContext } from '../context/BookmarksContextprovider';

type BookmarkIconProps = {
  jobItemId: number;
};

export default function BookmarkIcon({ jobItemId }: BookmarkIconProps) {
  const { bookmarkedIds, handleToggleBookmark } = useContext(BookmarksContext);

  return (
    <button
      onClick={(e) => {
        handleToggleBookmark(jobItemId);
        e.stopPropagation();
        e.preventDefault();
      }}
      className="bookmark-btn"
    >
      <BookmarkFilledIcon
        className={`${bookmarkedIds.includes(jobItemId) ? 'filled' : ''}`}
      />
    </button>
  );
}
