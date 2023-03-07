import React from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectContactsPerPage,
} from 'redux/contacts/selectors';
import { setNewOffset } from 'redux/contacts/slice';
import css from './Pagination.module.css';

// Example items, to simulate fetching from another resources.
// const items = [...Array(45).keys()];

// function Items({ currentItems }) {
//   return (
//     <>
//       {currentItems &&
//         currentItems.map(item => (
//           <div>
//             <h3>Item #{item}</h3>
//           </div>
//         ))}
//     </>
//   );
// }

export const Pagination = () => {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const dispatch = useDispatch();
  //   const [contactOffset, setContactsOffset] = useState(0);
  const contacts = useSelector(selectContacts);
  const contactsPerPage = useSelector(selectContactsPerPage);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  //   const endOffset = contactOffset + contactsPerPage;
  //   const currentContacts = contacts.slice(contactOffset, endOffset);

  const pageCount = Math.ceil(contacts?.length / contactsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = event => {
    const newOffset = (event.selected * contactsPerPage) % contacts?.length;
    dispatch(setNewOffset(newOffset));
  };

  return (
    <>
      {/* <Items currentItems={currentContacts} /> */}
      <ReactPaginate
        pageCount={pageCount}
        pageRangeDisplayed={5}
        nextLabel=">"
        previousLabel="<"
        breakLabel="..."
        onPageChange={handlePageClick}
        renderOnZeroPageCount={null}
        containerClassName={css.pagination}
      />
    </>
  );
};

// Add a <div id="container"> to your HTML to see the componend rendered.
// ReactDOM.render(
//   <PaginatedItems itemsPerPage={4} />,
//   document.getElementById('container')
// );
