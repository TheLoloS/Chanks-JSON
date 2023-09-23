City Search API
===============

This API provides a search functionality for city names based on a provided query.

Getting Started
---------------

Prerequisites
-------------

Make sure you have the following installed on your system:

- Node.js
- npm (Node Package Manager)

Installing
----------

1. Clone the repository to your local machine:

\`\`\`
git clone https://github.com/your-username/city-search-api.git
\`\`\`

2. Install the required dependencies:

\`\`\`
cd city-search-api
npm install
\`\`\`

Running the API
---------------

To start the API, run the following command:

\`\`\`
npm start
\`\`\`

The API will now be accessible at \`http://localhost:3000\`.

Usage
-----

Searching for Cities
---------------------

Send a POST request to \`/api/search\` with a JSON payload containing the \`query\` parameter.

Example:

\`\`\`json
{
  "query": "example city"
}
\`\`\`

Response
--------

The API will respond with a JSON array containing the matching cities.

Example:

\`\`\`json
[
  {
    "id": 1,
    "postalcode": "12345",
    "city": "Example City",
    "voivodeship": "Example Voivodeship",
    "county": "Example County",
    "community": "Example Community",
    "latitude": 12.345678,
    "longitude": 23.456789
  },
  // Additional matching cities...
]
\`\`\`

Contributing
------------

If you'd like to contribute to this project, please open an issue or create a pull request.

License
-------

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

