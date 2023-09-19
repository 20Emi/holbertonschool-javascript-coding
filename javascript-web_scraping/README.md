<h1 align = "center">Javascript-web_scraping</h1>

<h2>Project objectives</h2>

<li>How to manipulate JSON data</li>
<li>How to use request and fetch API</li>
<li>How to read and write a file using fs module</li>

<h2> module 'fs'</h2>
<p>Is a built-in tool that allows Node.js applications to read, write and manage files and directories on the file system of the computer on which it is running.</p>

<h4>Example</h4>
<li>Read the contents of a file.</li>
<li>Write data to a file.</li>
<li>Create a new directory.</li>
<li>Delete a file or directory.</li>
<li>List files in a directory.</li>

<h4>Example for write</h4>
<pre>
  const fs = require('fs');
const file = process.argv[2];
const contenuto = process.argv[3];

fs.writeFile(file, contenuto, 'utf-8', (error) => {
  if (error) {
    console.error(error);
  }
});
</pre>
<h2>Request</h2>
<p> is used in the context of web programming and development to refer to a request for data or resources that is made to a web server.
  Requests are used to obtain information from a server or to send data to the server.</p>
  
