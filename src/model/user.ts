import { knex } from "services";

export const getUser = () => {
  return knex.select("*").table("user");
};

export const getStations = () => {
  return knex.select("*").table("stations");
};
