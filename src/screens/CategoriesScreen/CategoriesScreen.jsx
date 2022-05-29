import React from 'react';
import AppLayout from '../../layouts/AppLayout/AppLayout';
import {Text} from 'react-native';

const CategoriesScreen = ({navigation, route}) => {
  return (
    <AppLayout currentRoute={route.name} navigation={navigation}>
      <Text>Categories</Text>
    </AppLayout>
  );
};

export default CategoriesScreen;