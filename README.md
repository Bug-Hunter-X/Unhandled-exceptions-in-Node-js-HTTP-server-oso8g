# Unhandled Exceptions in Node.js HTTP Server

This repository demonstrates a common yet easily overlooked error in Node.js applications: the lack of proper error handling in HTTP servers.  Without robust error handling, unexpected exceptions can lead to server crashes and disruptions, especially in production environments.

## The Problem

The `server.js` file contains a basic HTTP server that lacks any error handling.  If an unexpected error occurs during request processing, the server will crash without any indication of the issue.

## The Solution

The `serverSolution.js` file demonstrates how to improve the server's resilience by implementing error handling. By using a `try...catch` block, the server gracefully handles exceptions, logs errors, and returns a suitable response to the client.  This prevents crashes and allows for more robust and reliable operation.

## How to Run

1. Clone this repository.
2. Navigate to the repository directory in your terminal.
3. Run `node server.js` to run the buggy server.  Attempt to break the server by sending invalid requests (or let it run and observe that it does not handle errors)
4. Run `node serverSolution.js` to run the fixed server.  Observe its error handling.