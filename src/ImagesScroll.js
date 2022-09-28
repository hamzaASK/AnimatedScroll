import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { data } from './data';
import Pages from './pages';

const SIZE = 100.0

function ImagesScroll(props) {
  const [translateX, setTranslateX] = React.useState(0);

  const scrollHandler = e => {
    setTranslateX(e.nativeEvent.contentOffset.x)
  }
  return (

    <ScrollView
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      onScroll={scrollHandler}
      scrollEventThrottle={16}
      horizontal
      style={styles.container}>
      {data.map((item, index) => {
        return (
          <Pages title={item.title} username={item.username} image={item.image} key={index} index={index} translateX={translateX} {...props} />
        )
      })}

    </ScrollView>
  );

}
export default ImagesScroll
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  circle: {
    width: SIZE,
    height: SIZE,
    backgroundColor: 'tomato',
    margin: 20
  }
});
