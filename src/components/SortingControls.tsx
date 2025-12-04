import { SortBy } from '../lib/type';

type SortingControlsProps = {
  onClick: (sortBy: SortBy) => void;
  sortBy: SortBy;
};

export default function SortingControls({
  onClick,
  sortBy,
}: SortingControlsProps) {
  return (
    <section className="sorting">
      <i className="fa-solid fa-arrow-down-short-wide"></i>

      <SortingButton
        onClick={onClick}
        sortBy="relevant"
        isActive={sortBy === 'relevant'}
      />
      <SortingButton
        onClick={onClick}
        sortBy="recent"
        isActive={sortBy === 'recent'}
      />
    </section>
  );
}

function SortingButton({
  onClick,
  sortBy,
  isActive,
}: SortingControlsProps & { isActive: boolean }) {
  return (
    <button
      onClick={() => onClick(sortBy)}
      className={`sorting__button sorting__button--${sortBy} ${
        isActive ? 'sorting__button--active' : ''
      }`}
    >
      {sortBy}
    </button>
  );
}
