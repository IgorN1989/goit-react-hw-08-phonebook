// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Toaster } from 'react-hot-toast';

// import { fetchContacts } from 'redux/operations';
// import { selectContacts, selectIsLoading, selectError } from 'redux/selectors';

// import { Layout, MainHeader, SectionHeader } from './Layout/Layout.styled';
// import { ContactForm } from './ContactForm/ContactForm';
// import { Filter } from './Filter/Filter';
// import { ContactList } from './ContactList/ContactList';
// import { Loader } from './Loader/Loader';
// import { ContactListMessage } from './ContactList/ContactList.styled';
import { NavLink, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Contacts from './pages/Contacts';

export const App = () => {
  return (
    <>
      <nav>
        <NavLink to="/">home</NavLink>
        <NavLink to="/register">register</NavLink>
        <NavLink to="/login">login</NavLink>
        <NavLink to="/contacts">contacts</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<div>AppBar</div>}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
        <Route path="*" element={<div>NotFoundPage</div>} />
      </Routes>
    </>
  );
};
// export const App = () => {
//   const dispatch = useDispatch();
//   const items = useSelector(selectContacts);
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <Layout>
//       <MainHeader>Phonebook</MainHeader>
//       <ContactForm />

//       <SectionHeader>Contacts</SectionHeader>
//       {isLoading && <Loader />}

//       {error ? (
//         <ContactListMessage>
//           {error}! Please reload this page!
//         </ContactListMessage>
//       ) : (
//         <div>
//           <Filter />
//           <ContactList />
//           {items.length === 0 && (
//             <ContactListMessage>Contacts list is empty</ContactListMessage>
//           )}
//         </div>
//       )}

//       <Toaster position="top-right" />
//     </Layout>
//   );
// };
