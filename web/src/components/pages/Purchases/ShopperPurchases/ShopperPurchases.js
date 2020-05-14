import React, { useState } from 'react';

import "./ShopperPurchases.scss";
import { useQuery } from '@apollo/react-hooks';
import { SHOPPER_PURCHASES_QUERY } from '../../../../apollo/queries/purchases-queries';
import ShopperPurchasesItem from './ShopperPurchasesItem/ShopperPurchasesItem';
import Pagination from '../../../layouts/Pagination/Pagination';

const SHOPPER_PURACHSES_LIMIT_PAGE = 10;

const ShopperPurchases = () => {

    const [page, setPage] = useState(1);
    const { data, loading } = useQuery(SHOPPER_PURCHASES_QUERY, {
        variables: {
            page, limit: SHOPPER_PURACHSES_LIMIT_PAGE
        }
    });

    return (
        <div className="purchases-page-shopper-purchases">
            <div className="purchases-page-shopper-purchases-container">
                {
                    data?.shopperPurchases?.map(p => <ShopperPurchasesItem {...p} />)
                }
            </div>
            <Pagination page={page} pages={Math.ceil(data?.shopperPurchasesCount / SHOPPER_PURACHSES_LIMIT_PAGE)} onChangePage={setPage} />
        </div>
    )
};

export default ShopperPurchases;