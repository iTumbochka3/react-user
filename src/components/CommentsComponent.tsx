import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from '../use-stores';

type CommentsComponentProps = {
    postId: string;
};

const CommentsComponent = observer(({ postId }: CommentsComponentProps) => {
    const { commentStore } = useStores();
    useEffect(() => { if (postId) commentStore.updateCommentsFromServer(postId) }, []);
    return (
        <>
            {postId}
        </>
    );
});

export default CommentsComponent;