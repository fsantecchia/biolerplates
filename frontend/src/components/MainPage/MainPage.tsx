import { ArticleList } from "./ArticleList/ArticleList";
import { Filters } from "./Filters/Filters";

export const MainPage = () => {
  return (
    <div>
      <h1>Articles</h1>
      <Filters />
      <ArticleList />
    </div>
  );
}
