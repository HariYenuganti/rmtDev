import { createContext, useState } from 'react';
import { useSearchQuery, useSearchTextContext } from '../lib/hooks';
import { JobItem, PageDirection, SortBy } from '../lib/type';
import { RESULTS_PER_PAGE } from '../lib/constants';

type JobItemsContextType = {
  jobItems: JobItem[] | undefined;
  jobItemsSortedAndSliced: JobItem[];
  isLoading: boolean;
  currentPage: number;
  totalNumberOfResults: number;
  totalNumberOfPages: number;
  sortBy: SortBy;
  handlePageChange: (direction: PageDirection) => void;
  handleSortChange: (sortBy: SortBy) => void;
};

export const JobItemsContext = createContext<JobItemsContextType | null>(null);

export default function JobItemsContextprovider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { debouncedSearchText } = useSearchTextContext();

  const { jobItems, isLoading } = useSearchQuery(debouncedSearchText);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<SortBy>('relevant');

  const totalNumberOfResults = jobItems?.length || 0;
  const totalNumberOfPages = Math.ceil(totalNumberOfResults / RESULTS_PER_PAGE);
  const jobItemsSorted =
    jobItems?.sort((a, b) => {
      if (sortBy === 'relevant') {
        return b.relevanceScore - a.relevanceScore;
      } else if (sortBy === 'recent') {
        return a.daysAgo - b.daysAgo;
      }
      return 0;
    }) || [];
  const jobItemsSortedAndSliced =
    jobItemsSorted?.slice(
      currentPage * RESULTS_PER_PAGE - RESULTS_PER_PAGE,
      currentPage * RESULTS_PER_PAGE
    ) || [];

  const handlePageChange = (direction: PageDirection) => {
    if (direction === 'next') {
      setCurrentPage((prev) => prev + 1);
    } else if (direction === 'previous') {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleSortChange = (sortBy: SortBy) => {
    setCurrentPage(1);
    setSortBy(sortBy);
  };

  return (
    <JobItemsContext.Provider
      value={{
        jobItems,
        jobItemsSortedAndSliced,
        isLoading,
        currentPage,
        totalNumberOfResults,
        totalNumberOfPages,
        sortBy,
        handlePageChange,
        handleSortChange,
      }}
    >
      {children}
    </JobItemsContext.Provider>
  );
}
