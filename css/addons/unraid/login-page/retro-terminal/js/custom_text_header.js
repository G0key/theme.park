
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>              _                           
   __ _  __ _| |_ _____      ____ _ _   _ 
  / _` |/ _` | __/ _ \\ \\ /\\ / / _` | | | |
 | (_| | (_| | ||  __/\\ V  V / (_| | |_| |
  \\__, |\\__,_|\\__\\___| \\_/\\_/ \\__,_|\\__, |
  |___/                             |___/ </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
