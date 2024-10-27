// MyButtonClient.jsx（客户端组件，负责处理点击事件）
import React from 'react';
import { Button, ButtonProps } from 'antd';

const MyButtonClient = ({ onClick, children, ...rest }: ButtonProps & { onClick?: () => void; children: React.ReactNode }) => {
    const handleClick = () => {
        onClick && onClick();
    };

    return (
        <Button {...rest} onClick={handleClick}>{children}</Button>
    );
};

export default MyButtonClient;