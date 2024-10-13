import * as React from 'react';
import {useContext} from 'react';
import {FlatList, StyleProp, View, ViewStyle} from 'react-native';
import {IComment} from '../../utils/types';
import {Comment} from '../Comment/Comment';
import {styles} from './Style';
import {Text} from '../Text/Text';
import {CommentsContext} from '../../Screens/HomeScreen/HomeScreen';
import {COMMENTS_PAGE_SIZE} from '../../utils/hooks/useComments';

interface CommentsProps {
  data: IComment[];
  style?: StyleProp<ViewStyle>;
  isPageFooter?: boolean;
}

const createArray = (n: number) => {
  return Array.from({length: n}, (_, index) => index + 1);
};

export const Comments = ({data, style, isPageFooter}: CommentsProps) => {
  const {commentsCount, page, setPage} = useContext(CommentsContext);

  return (
    <FlatList
      data={data}
      style={style}
      renderItem={({item}) => (
        <View style={styles.container}>
          <Comment item={item} />
          {item.parentComments && (
            <Comments
              style={styles.commentContainer}
              data={item.parentComments}
            />
          )}
        </View>
      )}
      ListFooterComponent={
        isPageFooter
          ? () => (
              <View style={styles.footerContainer}>
                {createArray(Math.ceil(commentsCount / COMMENTS_PAGE_SIZE)).map(
                  item => (
                    <Text
                      onPress={() => {
                        setPage(item);
                      }}
                      key={item}
                      style={[
                        styles.pageText,
                        page !== item && styles.pageTextActive,
                      ]}>
                      {item}
                    </Text>
                  ),
                )}
              </View>
            )
          : undefined
      }
    />
  );
};
