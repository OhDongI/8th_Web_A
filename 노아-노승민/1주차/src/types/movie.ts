export type Movie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
};

export type MovieResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};
