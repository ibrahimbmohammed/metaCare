import React from 'react'
import SortData, { getClassNamesFor } from '../../utils/hooks/sort'
import Loader from '../LoaderComponent';
import ErrorPage from '../Error';
import { allCharHieghts, converter } from '../../utils'

const Table = ({ charloading, charcterData: data, filCharcterData, charError }) => {

    const { items, requestSort, sortConfig } = SortData((filCharcterData?.length === 0 || filCharcterData === null) ? data : filCharcterData);
    const columns = ['name', 'gender', 'height']

    return (
        <>
            {charloading ? <Loader /> : <> {charError ? <ErrorPage /> : <div className="bg-opacity-10 w-4/6">
                <table className="table w-full flex flex-col flex-no-wrap sm:bg-black rounded-lg overflow-hidden sm:shadow-lg my-5 shadow overflow-hidden border-b border-gray-200 sm:rounded-lg table-fixed">
                    <thead className="text-black bg-yellow-400  bg-opacity-70">
                        <tr className="bg-black-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                            {data && columns?.map((heading, i) => <th key={i} className="p-3 text-left hover:font-medium cursor-pointer text-center" onClick={() => { requestSort(heading) }} scope="col">{heading}  <i className={"fas " + (getClassNamesFor(heading, sortConfig))} /></th>)}
                        </tr>
                    </thead>
                    <tbody className="flex-1 sm:flex-none bg-black-400 divide-y divide-gray-200  bg-opacity-10">
                        {items.map((character, i) => (
                            <tr key={i} className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0" >
                                <td className="p-3 text-center text-white">{character.name}</td>
                                <td className="p-3 text-center text-white">{character.gender}</td>
                                <td className="p-3 text-center text-white">{character.height}</td>
                            </tr>))}
                        <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0" >
                            <td className="p-3 text-center text-white">{items?.length}</td>
                            <td className="p-3  text-white"></td>
                            <td className="p-3 text-center text-white ">{converter(allCharHieghts(items))}</td>
                        </tr>
                    </tbody>
                </table>
            </div>}
            </>}
        </>
    )
}



export default Table;


<>

</>