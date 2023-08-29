// import { useState, useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { fetchSearchMovies } from 'services/api';

// const Movies = () => {
//   const [query, setQuery] = useState('');
//   const [searchParams, setSearchParams] = useSearchParams();

//   useEffect(() => {
//     const searchQuery = searchParams.get('query');
//     fetchSearchMovies(searchQuery).then(data => {
//       console.log(data);
//     });
//     console.log(searchParams);
//   }, [searchParams]);

//   const handleChange = e => {
//     setQuery(e.target.value);
//   };
//   const handleSubmitForm = e => {
//     e.preventDefault();
//     setSearchParams({ query });
//   };
//   return (
//     <>
//       <h2>Search</h2>
//       <div>
//         <form onSubmit={handleSubmitForm}>
//           <button type="submit">Search</button>
//           <input
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search..."
//             onChange={handleChange}
//           />
//         </form>
//       </div>
//     </>
//   );
// };

// export default Movies;
