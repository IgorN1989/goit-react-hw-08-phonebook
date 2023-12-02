import { createSelector } from '@reduxjs/toolkit';
import { matchSorter } from 'match-sorter';

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return matchSorter(contacts, filter, { keys: ['name', 'number'] });
  }
);
