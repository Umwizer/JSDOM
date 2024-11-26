
// Ensure the DOM is fully loaded before accessing document.domain
document.addEventListener("DOMContentLoaded", function () {
    console.log(document.domain);  // Logs the domain name once the DOM is loaded
});
 // Logs the domain name of the current document
console.log(document.location); // Logs the full location (URL and path)
console.log(document.URL); // Logs the full URL
console.log(document.title); // Logs the document's title

// document.title = 123;

console.log(document.doctype); // Logs the document's DOCTYPE (e.g., <!DOCTYPE html>)
console.log(document.characterSet); // Logs the character encoding (e.g., UTF-8)
console.log(document.head); // Logs the <head> element
console.log(document.all); // Logs all elements in the document as an HTMLCollection

console.log(document.all[10]); // Logs the element at index 10 (if it exists)

// Change the text content of the element at index 10
if (document.all[10]) {
    document.all[10].textContent = 'hello';
}

