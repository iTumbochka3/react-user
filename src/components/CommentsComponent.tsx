import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from '../use-stores';
import { List } from 'antd';

type CommentsComponentProps = {
    postId: string;
};

const CommentsComponent = observer(({ postId }: CommentsComponentProps) => {
    const { commentStore } = useStores();
    useEffect(() => { if (postId) commentStore.updateCommentsFromServer(postId) }, [postId]);
    return (
        <>
            <List
                dataSource={commentStore.comments}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            title={item.name}
                            description={item.email}
                        />
                        {item.body}
                    </List.Item>
                )}
            />
        </>
    );
});

export default CommentsComponent;