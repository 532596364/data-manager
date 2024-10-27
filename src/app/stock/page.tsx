'use client'
import React from 'react';
import { Button, Flex, Layout, Splitter, Typography } from 'antd';
import MyButtonClient from '@/shared/components/buttonClient';
import { stockServiceClient } from '@/shared/uitls/data';

const handleUpdate = async () => {
    await stockServiceClient.UpdateStockData();
    console.log('aaaaa');
};
const StockHome = () => (
    <Layout className='stock-list-style' >
        <MyButtonClient type="primary" onClick={() => handleUpdate()}>Update data</MyButtonClient>
    </Layout>
);

export default StockHome;
