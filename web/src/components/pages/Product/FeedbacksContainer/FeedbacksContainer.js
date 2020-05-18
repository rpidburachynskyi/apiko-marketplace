import React, { useState, useEffect } from 'react';

import "./FeedbacksContainer.scss";
import InputFeedback from './InputFeedback';
import Form from '../../../layouts/Form';
import FeedbackCard from '../../../layouts/FeedbackCard/FeedbackCard';
import { useQuery } from '@apollo/react-hooks';
import { PRODUCT_FEEDBACKS_QUERY } from '../../../../apollo/queries/products-queries';
import Pagination from '../../../layouts/Pagination/Pagination';
import ModalDialog from '../../../layouts/ModalDialog/ModalDialog';
import ModalLoading from '../../../layouts/ModalLoading/ModalLoading';
import { FEEDBACK_ADDED } from '../../../../apollo/subscriptions/products-subscription';
import useLocationQuery from 'react-use-location-query';
import { clamp } from 'lodash';

const FeedbacksContainer = ({ productId }) => {

    const { query: { feedbacksPage, feedbacksLimit }, setQuery } = useLocationQuery({ feedbacksPage: 1, feedbacksLimit: 10 });

    const { data, error, loading, subscribeToMore } = useQuery(PRODUCT_FEEDBACKS_QUERY, {
        variables: { productId, page: feedbacksPage, limit: feedbacksLimit }
    });

    useEffect(() => {
        return subscribeToMore({
            document: FEEDBACK_ADDED,
            variables: {
                productId,
                page: 1,
                limit: feedbacksLimit
            },
            updateQuery: (prev, { subscriptionData: { data: { feedbackAdded } } }) => {
                return {
                    ...prev,
                    product: {
                        ...prev.product,
                        feedbacks: [
                            { ...feedbackAdded, _new: true },
                            ...prev.product.feedbacks.slice(0, 9),
                        ]
                    }
                }
            }
        });
    }, [productId]);


    return (
        <div className="product-page-product-feedbacks">
            <InputFeedback
                productId={productId} />

            <Form className="product-page-product-feedbacks-items">
                {
                    data?.product?.feedbacks?.map(f => <FeedbackCard key={f.id} {...f} />)
                }
                {data?.product?.feedbacks?.length === 0 &&
                    <h3 className="product-page-product-feedbacks-items-no-feedbacks">No feedbacks, be first.</h3>}
                {loading && <ModalLoading />}
            </Form>
            {data?.product?.feedbacks?.length !== 0 && <Pagination
                page={feedbacksPage}
                pages={clamp(Math.ceil(data?.product?.feedbacksCount / feedbacksLimit), 0, 999)}
                onChangePage={feedbacksPage => setQuery({ feedbacksPage })}
            />}
        </div>
    )
};

export default FeedbacksContainer;