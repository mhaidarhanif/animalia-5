# Animalia 5

## API Specification

- Production: `https://animalia-5.haidar.dev`
- Local: `http://localhost:3000`

| Endpoint       | HTTP     | Description         |
| -------------- | -------- | ------------------- |
| `/animals`     | `GET`    | Get all animals     |
| `/animals/:id` | `GET`    | Get animal by id    |
| `/animals`     | `POST`   | Add new animal      |
| `/animals`     | `DELETE` | Delete all animals  |
| `/animals/:id` | `DELETE` | Delete animal by id |
| `/animals/:id` | `PATCH`  | Update animal by id |

## Getting Started

To install dependencies:

```sh
bun install
```

To run:

```sh
bun run dev
```

open http://localhost:3000
