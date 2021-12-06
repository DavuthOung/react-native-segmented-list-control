import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList
} from 'react-native';

type Props = {
  data: Array<{}>;
  RenderMenu: (item: any,index: number) => React.ReactElement;
}

export function Segmented (props: Props) {
  const [scrollIndex,setscrollIndex] = useState(0);

  const onViewableItemsChanged = (info: any) => {
    if (info.viewableItems && info.viewableItems.length > 0) {
        setscrollIndex(info.viewableItems[0]['index'])
    } 
  }
  
  const viewabilityConfigCallbackPairs = [
    {
      viewabilityConfig: {
          minimumViewTime: 150,
          itemVisiblePercentThreshold: 100
      },
      onViewableItemsChanged
    },
    {
      viewabilityConfig: {
          minimumViewTime: 150,
          itemVisiblePercentThreshold: 90
      },
      onViewableItemsChanged
    }
  ];

  const {data,RenderMenu} = props;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FlatList
          data={data}
          renderItem={({item}: any) => <RenderMenu item={item} />}
          keyExtractor={(item: any) => item.id}
          extraData={props}
          horizontal={true}
        />
      </View>
      <View style={styles.content}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5ddf'
  },
  header: {
    height: 60,
    borderWidth: 1
  },
  content: {
    flexGrow: 1,
    borderWidth: 1
  }

})