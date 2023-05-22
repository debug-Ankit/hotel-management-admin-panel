/**
 * @name Hotel Room Booking System
 * @author Ankit
 * @description Hotel Room Booking and Management System Software ~ Developed By Ankit
 * @copyright ©2023 ― Ankit. All rights reserved.
 * @version v0.0.1
 *
 */

import { Layout, Spin } from 'antd';
import React from 'react';

const { Content } = Layout;

function PageLoader() {
  return (
    <Content className='page-loader'>
      <Spin
        size='large'
        tip='Loading...'
      />
    </Content>
  );
}

export default PageLoader;
