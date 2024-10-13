import * as React from 'react';
import {useContext} from 'react';
import {Pressable, View} from 'react-native';
import {IComment} from '../../utils/types';
import {Text} from '../Text/Text';
import {CloseIcon} from '../Icons';
import {CommentsContext} from '../../Screens/HomeScreen/HomeScreen';
import {styles} from './Style';

interface ParentCommentProps {
  comment: IComment;
}

export const ParentComment = ({comment}: ParentCommentProps) => {
  const {setParentComment} = useContext(CommentsContext);
  const onPress = () => {
    setParentComment(null);
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerAuthor}>
        <Text size={'sm'} style={styles.authorText}>
          {comment.author}
        </Text>
        <Text size={'sm'}>{comment.createdAt}</Text>
      </View>
      <Text>{comment.text}</Text>
      <Pressable onPress={onPress} style={styles.closeBtn}>
        <CloseIcon />
      </Pressable>
    </View>
  );
};
