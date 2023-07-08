import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiBaseURL = process.env.REACT_APP_API_BASE_URL;
const apiVersion = process.env.REACT_APP_API_VERSION;

export const apiSlice = createApi({
    reducerPath: 'apiSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: `${apiBaseURL}/api/${apiVersion}`,
    }),
    tagTypes: ['Post'],
    endpoints: (builder) => ({
        addMerchant: builder.mutation({
            query: ({ restaurantName,
                contactName,
                pincode,
                location,
                website,
                phoneNumber,
                averageDailyTransactions }) => ({
                    url: `register`,
                    method: 'POST',
                    body: {
                        restaurantName,
                        contactName,
                        pincode,
                        location,
                        website,
                        phoneNumber,
                        averageDailyTransactions
                    },
                }),
        }),
    })
})

export const { useAddMerchantMutation } = apiSlice