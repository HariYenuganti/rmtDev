import { createContext, useCallback, useMemo, useState } from 'react';
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

export default function JobItemsContextProvider({
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

  const jobItemsSorted = useMemo(
    () =>
      [...(jobItems || [])].sort((a, b) => {
        if (sortBy === 'relevant') {
          return b.relevanceScore - a.relevanceScore;
        } else {
          return a.daysAgo - b.daysAgo;
        }
      }),
    [sortBy, jobItems]
  );

  const jobItemsSortedAndSliced = useMemo(
    () =>
      jobItemsSorted?.slice(
        currentPage * RESULTS_PER_PAGE - RESULTS_PER_PAGE,
        currentPage * RESULTS_PER_PAGE
      ),
    [jobItemsSorted, currentPage]
  );

  const handlePageChange = useCallback((direction: PageDirection) => {
    if (direction === 'next') {
      setCurrentPage((prev) => prev + 1);
    } else if (direction === 'previous') {
      setCurrentPage((prev) => prev - 1);
    }
  }, []);

  const handleSortChange = useCallback((sortBy: SortBy) => {
    setCurrentPage(1);
    setSortBy(sortBy);
  }, []);

  const contextValue = useMemo(
    () => ({
      jobItems,
      jobItemsSortedAndSliced,
      isLoading,
      currentPage,
      totalNumberOfResults,
      totalNumberOfPages,
      sortBy,
      handlePageChange,
      handleSortChange,
    }),
    [
      jobItems,
      jobItemsSortedAndSliced,
      isLoading,
      currentPage,
      totalNumberOfResults,
      totalNumberOfPages,
      sortBy,
      handlePageChange,
      handleSortChange,
    ]
  );

  return (
    <JobItemsContext.Provider value={contextValue}>
      {children}
    </JobItemsContext.Provider>
  );
}
