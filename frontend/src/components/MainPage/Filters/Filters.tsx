import { useForm } from "react-hook-form";

import { useTypedDispatch } from '../../../state/hooks';
import { fetchArticlesAsync } from '../../../state/articles/articlesSlice';
import { SearchInput } from './styled';

type FormData = {
  query: string;
};

export const Filters = () => {
  const dispatch = useTypedDispatch();
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    // Send default query if the input field is empty
    const query = data.query || 'world';
    dispatch(fetchArticlesAsync({ query, page: 1 }));
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SearchInput {...register('query')} />
        <button type="submit"> Search </button>
      </form>
    </div>
  );
}
