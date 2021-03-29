import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { search_repository } from '../redux/actions/repositoryAction';
import { RootState } from '../redux/store';

const RepositoryList: React.FC = () => {
  const [search, setsearch] = useState('');
  const dispatch = useDispatch();

  const { data, loading } = useSelector((state: RootState) => state.repository);

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setsearch(event.target.value);
  };

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(search_repository(search));
  };
  return (
    <>
      <form onSubmit={onSubmitForm}>
        <input value={search} onChange={onSearchChange} />
        <button type='submit'>Submit</button>
        {loading && <p>Loading data....</p>}
        {data &&
          data.length > 0 &&
          data.map((d: any, index: number) => {
            return <p key={index}>{d} </p>;
          })}
      </form>
    </>
  );
};

export default RepositoryList;
