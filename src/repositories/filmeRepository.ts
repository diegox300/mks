import { AppDataSource } from "../data-source";
import { Filmes } from "../entities/Filmes";

export const filmeRepository = AppDataSource.getRepository(Filmes)