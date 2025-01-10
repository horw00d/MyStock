"use client";

import { useGetProductsQuery } from '@/state/api'
import Header from '../(components)/Header';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { } from '@mui/x-data-grid/hooks/features/rows/gridRowsUtils';

const columns: GridColDef[] = [
    {field: "productId", headerName: "ID", width: 90},
    {field: "name", headerName: "Product Name", width: 200 },
    {field: "price", headerName: "Price", width: 110, type: "number", valueGetter: (value, row) => `$${row.price}` },
    {field: "rating", headerName: "Rating", width: 110, type: "number", valueGetter: (value, row) => row.rating ? row.rating : "N/A" },
    {field: "stockQuantity", headerName: "Stock Quantity", width: 150, type: "number" }
]

const Inventory = () => {
    const { data: products, isError, isLoading } = useGetProductsQuery();
    
    if(isLoading) { 
        return <div className="py-4">Loading...</div>;
    }

    if(isError || !products){
        return(
            <div className="text-center text-red-500 py-4">
                Failed to fetch products
            </div>
        )
    }

  return (
    <div className="flex flex-col">
        <Header name="Inventory" />
        <DataGrid
            className="bg-white shadown rounded-lg border border-gray-200 mt-5 !text-gray-700"
            rows={products}
            columns={columns}
            getRowId={(row) => row.productId}
            checkboxSelection
        />
    </div>
  )
}

export default Inventory