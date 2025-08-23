
# Joke API

![Issues](https://img.shields.io/github/issues/nishuR31/jokeAPI?color=yellow&style=social)
![Deploy](https://img.shields.io/badge/Paused-black?logo=vercel&style=flat-square)
![Made With](https://img.shields.io/badge/Express.js-black?style=social&logo=express)
![Repo Size](https://img.shields.io/github/repo-size/nishuR31/jokeAPI?color=black&label=Repo%20Size&style=social&logo=github&logoColor=black)


A lightweight and fun REST API to manage and fetch jokes. Built with **Express.js** and deployed on **Vercel**.

<br>
<hr>
<br>

### 🌐 Live API

- click below to go to the website
  
[![https://nishu-jokeapi.vercel.app](https://img.shields.io/badge/Joke%20Api-black?style=social&logo=vercel)](https://nishu-jokeapi.vercel.app)

<br>
<hr>
<br>

## 📁 Endpoints & Routes

| Method | Route                                           | Description                                       |
| ------ | ----------------------------------------------- | --------------------------------------------------|
| GET    | `/`                                             | Server start                                      |
| GET    | `/api/v1/`                                      | Base starting route                               |
| GET    | `/api/v1/joke-api/joke?tags=tag1[&tags=tag2]`   | Get random joke by tags                           |
| GET    | `/api/v1/joke-api/jokes?tags=tag1[&tags=tag2]`  | Get all jokes by tags                             |
| GET    | `/api/v1/joke-api/tags`                         | Get all tags needed to find jokes                 |
| GET    | `/api/v1/api/v1/joke-api/id/:id`                | Get a joke by its ID                              |
| POST   | `/api/v1/joke-api/joke`                         | Submit a new joke                                 |
| PUT    | `/api/v1/joke-api/:id/edit`                     | Edit a joke by ID                                 |
| DELETE | `/api/v1/joke-api/:id/delete`                   | Delete a joke by ID                               |
| GET    | `/api/v1/joke-api/jokes?page=X&limit=X`         | Get all jokes by tags (paginated) with number in X|
| GET    | `/api/v1/help`                                  | Get all route info in ui help                     |

<br>
<hr>
<br>

## 🧾 POST Body Format

```json
{
  "joke": "Why did the chicken cross the road?",
  "tags": ["animal", "classic"],
  "rating": 4.5
}
```

<br>
<hr>
<br>

## 📃 Pagination Support

You can paginate results using `page` and `limit` query params.

**Example:**

```
GET /joke-api/jokes?page=X&limit=X 
```
- where X is number\
  

This will return the second page with X number of jokes per page.

<br>
<hr>
<br>

## ⚙️ .env Setup (for local development)

Create a `.env` file in the root directory:

```env
PORT=port like 3000
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<databaseName>
```

<br>
<hr>
<br>

## 🏁 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/nishuR31/jokeAPI.git
cd jokeAPI
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Locally

```bash
npm run dev
```

<br>
<hr>
<br>

## 🚀 Deploying on Vercel

Make sure `index.js` is the server entry point and your `vercel.json` is set like this:

```json
{
  "version": 2,
  "builds": [
    { "src": "index.js", "use": "@vercel/node" }
  ],
  "routes": [
    { "src": "/api/(.*)", "dest": "index.js" }
  ]
}
```

Use [serverless-http](https://www.npmjs.com/package/serverless-http) if needed:

```bash
npm install serverless-http
```

<br>
<hr>
<br>

## 📂 Project Structure

```
jokeAPI/
├── index.js           # Express API logic (exported app)
├── src                # src for all controllers and etc
├── ipublic            # for current favicon.ico
├── vercel.json        # Vercel deployment config
├── package.json
├── .env               # Local environment variables
```

<br>
<hr>
<br>

## 🤝 Contributing

Pull requests are welcome! For major changes, open an issue first to discuss what you’d like to change.

<br>
<hr>
<br>

## 📜 License

This project is licensed under the [LICENSE](LICENSE)

---

Made by [@nishuR31](https://github.com/nishuR31) ❤️


