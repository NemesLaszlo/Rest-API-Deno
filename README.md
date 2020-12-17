# Rest-API-Deno

Simple rest api implementation with Deno and PostgreSQL.

- [deno-postgres](https://deno.land/x/postgres)
- [denon](https://deno.land/x/denon)

## Run

```
denon start
```

## Endpoints

| Entity  | Type   | URL                     | Description         |
| ------- | ------ | ----------------------- | ------------------- |
| Product | GET    | api/products            | Get all products.   |
|         | GET    | api/products/:id        | Get single product. |
|         | POST   | api/products/add        | Add new Product.    |
|         | PUT    | api/products/update/:id | Update a Product.   |
|         | DELETE | api/products/delete/:id | Delete a Product.   |
