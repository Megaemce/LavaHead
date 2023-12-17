import React from 'react';
import CustomersTable from '@/app/ui/customers/table';
import { fetchUserPages } from '@/app/lib/data';
import Pagination from '@/app/ui/invoices/pagination';
import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';

interface ISearchParams {
  query?: string;
  page?: string;
}

interface IInvoicesParams {
  searchParams?: ISearchParams;
}

const Customers = async ({ searchParams }: IInvoicesParams) => {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchUserPages(query);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Customers</h1>
      </div>
      <Search placeholder="Search customers..." />

      {/* <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Customers</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search customers..." />
      </div> */}

      <CustomersTable query={query} currentPage={currentPage} />
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
};

export default Customers;
