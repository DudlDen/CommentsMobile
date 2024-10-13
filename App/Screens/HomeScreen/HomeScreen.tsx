import * as React from 'react';
import {createContext, Dispatch, useContext, useState} from 'react';
import {Pressable, SafeAreaView, View} from 'react-native';
import {styles} from './Style';
import {Button} from '../../Components/Button/Button';
import {LoginContext} from '../../App';
import {Comments, Input, ParentComment} from '../../Components';
import {SendIcon} from '../../Components/Icons';
import {useComments} from '../../utils/hooks/useComments';
import {IComment} from '../../utils/types';

interface HomeScreenProps {}

interface ICommentsContext {
  comments: IComment[];
  sendComment: (text: string, author: string, parentId?: string) => void;
  parentComment: IComment | null;
  setParentComment: Dispatch<IComment | null>;
  page: number;
  setPage: Dispatch<number>;
  commentsCount: number;
}

export const CommentsContext = createContext<ICommentsContext>({
  comments: [],
  sendComment: () => {},
  parentComment: null,
  setParentComment: () => {},
  page: 0,
  setPage: () => {},
  commentsCount: 0,
});

export const HomeScreen = ({}: HomeScreenProps) => {
  const {logOut, user} = useContext(LoginContext);
  const stateComments = useComments();
  const [text, setText] = useState('');

  return (
    <SafeAreaView style={styles.areaContainer}>
      <CommentsContext.Provider value={stateComments}>
        <View style={styles.mainContainer}>
          <Button style={styles.logoutButton} onPress={logOut} text={'Выйти'} />
          <Comments isPageFooter data={stateComments.comments} />

          {stateComments.parentComment && (
            <ParentComment comment={stateComments.parentComment} />
          )}
          <View style={styles.inputContainer}>
            <Input
              value={text}
              onChangeText={setText}
              placeholder={'Введите комментарий'}
              style={styles.input}
            />
            <Pressable
              onPress={() => {
                if (user && text) {
                  stateComments.sendComment(
                    text,
                    user.username,
                    stateComments.parentComment?.id,
                  );
                  stateComments.setParentComment(null);
                  setText('');
                }
              }}>
              <SendIcon size={34} />
            </Pressable>
          </View>
        </View>
      </CommentsContext.Provider>
    </SafeAreaView>
  );
};
