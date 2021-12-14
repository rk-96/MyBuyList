import React from 'react';
import {ScrollView, View} from 'react-native';
import {useSelector} from 'react-redux';
import FavoriteItem from '../components/FavoriteItem';
import globalStyles from '../configs/GlobalStyles';

const FavoritScreen = () => {
  const {list} = useSelector(state => state.todo);

  return (
    <View styles={globalStyles.container}>
      <ScrollView>
        {list.map((item, index) => {
          if (item.favorite) {
            return (
              <FavoriteItem
                key={`FAVORITE_SCREEN_${item.name}`}
                item={item}
                index={index}
              />
            );
          }
        })}
      </ScrollView>
    </View>
  );
};

export default FavoritScreen;
