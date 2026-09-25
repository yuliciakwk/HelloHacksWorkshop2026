# Backend

Start the Express server:

```sh
cd backend
npm install
npm run dev
```

Open http://localhost:5001/api/type/fire in your browser to try the GET endpoint.

`GET /api/type/:idOrName` accepts a type name (such as `fire`) or ID (such as `10`)
and returns only `half_damage_to` and `double_damage_from` from
[PokéAPI's type endpoint](https://pokeapi.co/docs/v2#types), each as an array of type names.
Names are converted to lowercase before requesting PokéAPI.

Unknown types return 404. Upstream failures or a 10-second timeout return 502.
Run with Node.js 18 or newer for built-in `fetch` support.

Edit the route in `server.js` to return your own data. Use `npm start` to run without automatic restarts.
