import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { PostsList } from '../PostsList/PostsLIst';
import { useGetPostsByCategory } from '@/hooks/useGetPostsByCategory';
import styles from './Pagination.module.scss'
import { IPost } from '@/types/posts.types';

interface IPaginationEvent extends React.MouseEvent {
    selected: number
}

export function PaginatedItems({ itemsPerPage, data }: {itemsPerPage: number, data: IPost[]}) {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const dataLength = data?.length
  const currentItems = data?.slice(itemOffset, endOffset);
  const pageCount = dataLength ? Math.ceil(dataLength / itemsPerPage) : 1

  useEffect(() => {
    console.log(currentItems);
  })

  const handlePageClick = (event: IPaginationEvent) => {
    const newOffset = dataLength ? (event.selected * itemsPerPage) % dataLength : 1
    setItemOffset(newOffset);
  };
  if (currentItems) 
  return (
    <>
      <PostsList currentItems={currentItems}/>
      <ReactPaginate
        className={styles.pagintaion}
        previousClassName={styles.previous}
        nextClassName={styles.next}
        disabledClassName={styles.disabled}
        activeLinkClassName={styles.active}
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
