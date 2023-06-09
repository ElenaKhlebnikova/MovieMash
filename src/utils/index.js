// not required xD
// This is just another way to export multiple files from the the parent folder

// now when you want to import getClassNameFromGenre you can do:
// import { getClassNameFromGenre } from '../utils' instead of like this
// import getClassNameFromGenre from '../utils/get-class-name-from-genre'

// the new way also allows you to easily import multiple utils with the same import.

export { default as formatDate } from './format-date';
export { default as getClassNameFromGenre } from './get-class-name-from-genre';
