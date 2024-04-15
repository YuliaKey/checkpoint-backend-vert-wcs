import { DataSource } from "typeorm";

const dataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite",
  entities: ["src/entities/*.ts"],
  synchronize: true,
  logging: ["error", "query"],
});

export default dataSource;
