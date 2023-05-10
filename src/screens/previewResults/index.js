import React from 'react';
import { FlatList } from 'react-native';
import { CardInfoPreview } from '../../components';

const PreviewResults = ({ searchLocation }) => {

  return (
      
    <FlatList 
      data={ searchLocation.places }
      renderItem={({ item, index }) => (
      
        <CardInfoPreview 
          key={ index }
          item = { item }
        />
      )}
    />

  )
}

export default PreviewResults