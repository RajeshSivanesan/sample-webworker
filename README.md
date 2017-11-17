# sample-webworker
Sample web worker and steps to debug a worker

Install live-server globally
Run this command: live-server --ignore=node_modules/,.idea/ ./

which will not watch for changes in the file

Every 20 seconds, a file will be read and updated to a certain value.
Every 20 seconds, worker thread will trigger a AJAX api
and get the file contents.

Just a snapshot and trial project of how a web worker works.

Users/developers can work on how it applies to their business needs

