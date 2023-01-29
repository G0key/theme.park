
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>                __                              __      
   ____ _____ _/ /____ _      ______ ___  __   / /_____ 
  / __ `/ __ `/ __/ _ \\ | /| / / __ `/ / / /  / __/ __ \\
 / /_/ / /_/ / /_/  __/ |/ |/ / /_/ / /_/ /  / /_/ /_/ /
 \\__, /\\__,_/\\__/\\___/|__/|__/\\__,_/\\__, /   \\__/\\____/ 
/____/                             /____/               
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
