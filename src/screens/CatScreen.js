import axios from 'axios';
import {useEffect, useState} from 'react';
import {View, Image} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

const CatsScreen = () => {
  const [imageuri, setImageUri] = useState('');
  const [loading, setLoading] = useState(true);
  const getUri = () => {
    axios
      .get('https://api.thecatapi.com/v1/images/search')
      .then(response => {
        setImageUri(response.data[0].url);
      })
      .then(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    getUri();
  }, []);

  return loading ? (
    <Spinner visible={true} />
  ) : (
    <View className="flex-1 justify-center bg-blue-200 dark:bg-slate-800">
      <View className="m-6 ">
        <Image
          className=" h-full w-full rounded-md "
          source={{
            uri: imageuri,
          }}
        />
      </View>
    </View>
  );
};

export default CatsScreen;
