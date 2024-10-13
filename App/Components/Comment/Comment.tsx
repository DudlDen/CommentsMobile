import * as React from 'react';
import {useContext} from 'react';
import {Pressable, View} from 'react-native';
import {IComment} from '../../utils/types';
import {Text} from '../Text/Text';
import {styles} from './Style';
import {CommentsContext} from '../../Screens/HomeScreen/HomeScreen';

interface CommentProps {
  item: IComment;
}

export const Comment = React.memo(
  ({item}: CommentProps) => {
    const {setParentComment} = useContext(CommentsContext);

    const onPress = () => {
      setParentComment(item);
    };

    return (
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <View style={styles.containerAuthor}>
            <Text style={styles.authorText} size={'md'}>
              {item.author}
            </Text>
            <Text size={'sm'}>{item.createdAt}</Text>
          </View>
          <Pressable onPress={onPress} style={styles.replyBtn}>
            <Text>Ответить</Text>
          </Pressable>
        </View>
        <Text>{item.text}</Text>
      </View>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.item.id === nextProps.item.id;
  },
);
