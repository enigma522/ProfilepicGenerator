'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

function Form() {
  const [search, setSearch] = useState('');
  const [style, setstyle] = useState('lorelei');
  const router = useRouter();

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/generate/${encodeURIComponent(search)}`);
  };

  return (
    <form className='mt-7 flex flex-row' onSubmit={handleSubmit}>
      <input
        type="text"
        value={search}
        onChange={handleSearchChange}
        placeholder='Get you Picture'
        className='search_input'
        required
      />
      <button type="submit" className='text-center rounded-md border border-gray-200 px-5 shadow-lg'>Submit</button>
    </form>
  );
}

export default Form;
