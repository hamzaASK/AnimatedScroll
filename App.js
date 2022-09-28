import { StyleSheet } from 'react-native';
import ImagesScroll from './src/ImagesScroll';

export default function App() {
  return (
    <ImagesScroll></ImagesScroll>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
