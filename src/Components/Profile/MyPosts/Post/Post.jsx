import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.post}>
            <div>
                <img src="https://yt3.ggpht.com/a/AATXAJz6h5YKt19_J1_StrwDzaU5X9cy3mrMfyVFoSOa=s900-c-k-c0x00ffffff-no-rj" alt=""/>
            </div>
            <div>
                <div>
                    {props.post}
                </div>
                <div>
                    Like {props.likesCount}
                </div>
            </div>
        </div>
    )
}

export default Post;