module.exports = function slugify (str) {
  return str.toString().toLowerCase().trim()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/&/g, '-and-')         // Replace & with 'and'
    .replace(/[^\w-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')        // Replace multiple - with single -
}
