# Tweets

Project to manage Your tweets

## Acknowledgements

GoIT team ❤️: https://goit.global/ua/

## API Reference

#### Get all items

```http
  GET /api/users
```

| Parameter | Type | Description |
| :-------- | :--- | :---------- |

Get all users

#### Get item

```http
  GET /api/users/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

Get specific user by ID

```http
  PUT /api/users/${id}
```

| Parameter | Type     | Description                            |
| :-------- | :------- | :------------------------------------- |
| `id`      | `string` | **Required**. Id of item to change     |
| `method`  | `string` | **Required**. "PUT"                    |
| `body`    | `object` | **Required**. Object entries to change |

## Authors

- [@PaHomeAtHome](https://github.com/PaHomeAtHome)

## Color Reference

| Color       | Hex                                                              |
| ----------- | ---------------------------------------------------------------- |
| Alert       | ![#ffa92b](https://via.placeholder.com/10/ffa92b?text=+) #ffa92b |
| Purple 1    | ![#ebd8ff](https://via.placeholder.com/10/ebd8ff?text=+) #ebd8ff |
| Purple 2    | ![#897ddb](https://via.placeholder.com/10/897ddb?text=+) #897ddb |
| Purple 3    | ![#331aa0](https://via.placeholder.com/10/331aa0?text=+) #331aa0 |
| Green       | ![#2bc276](https://via.placeholder.com/10/2bc276?text=+) #2bc276 |
| Green Hover | ![#5cd3a8](https://via.placeholder.com/10/5cd3a8?text=+) #5cd3a8 |
| Text color  | ![#373737](https://via.placeholder.com/10/373737?text=+) #373737 |

## Demo

https://pahomeathome.github.io/tweets/

## Deployment

To deploy this project run

```bash
  npm run deploy
```

## Feedback

If you have any feedback, please reach out to us at TestTask@NotNow.com

## Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-project
```

![Logo](https://getlogovector.com/wp-content/uploads/2020/10/readme-logo-vector.png)

## Roadmap

- Additional browser support

- Add more integrations

## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Support

For support, email Support@IsAppreciated.com or join our Slack channel.

## Tech Stack

**Client:** HTML, CSS, JS, React

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## Usage/Examples

```javascript
import Component from "my-project";

function App() {
  return <Component />;
}
```

## Used By

This project is used by the following companies:

- AtHome
- GoIT ❤️
