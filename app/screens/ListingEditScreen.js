import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import CategoryPickerItem from '../components/CategoryPickerItem';
import Screen from '../components/Screen';
import {
  AppForm,
  AppFormField as FormField,
  AppFormPicker as Picker,
  SubmitButton,
} from '../components/forms';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  category: Yup.object().required().nullable().label('Category'),
  description: Yup.string().label('Description'),
});

const categories = [
  {
    label: 'Clothing',
    value: 1,
    backgroundColor: '#2bcbba',
    icon: 'shoe-heel',
  },
  {
    label: 'Furniture',
    value: 2,
    backgroundColor: '#fc5c65',
    icon: 'floor-lamp',
  },
  {
    label: 'Cameras',
    value: 3,
    backgroundColor: '#fed330',
    icon: 'camera',
  },
  {
    label: 'Cars',
    value: 4,
    backgroundColor: '#fd9644',
    icon: 'car',
  },
  {
    label: 'Games',
    value: 5,
    backgroundColor: '#26de81',
    icon: 'cards',
  },
  {
    label: 'Sports',
    value: 6,
    backgroundColor: '#45aaf2',
    icon: 'basketball',
  },
  {
    label: 'Movies & Music',
    value: 7,
    backgroundColor: '#4b7bec',
    icon: 'headphones',
  },
];

function ListingEditScreen(props) {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: '',
          price: '',
          category: null,
          description: '',
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <Picker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          size="medium"
          width="50%"
        />
        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default ListingEditScreen;
