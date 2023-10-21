import he from 'he';
import apiService from '@/app/utils/service';
import Title from '@/components/01.Atoms/Title/title';

import styles from './../BlogPosts/blog.module.scss'

async function getPost(id) {
  const data = await apiService.getPost(id);

  const formattedPost = {
    id: data.id,
    title: he.decode(data.title.rendered),
    content: data.content.rendered,
    date: new Date(data.date).toLocaleDateString('en-GB'),
  };

  return formattedPost;
}

const BlogPost = async (props) => {
  console.log(props.postId);
  const post = await getPost(props.postId);

  return (
    <div className={styles.article}>
      <Title type={'h1'}>{post.title}</Title>
      <div className={styles.articleDate}>{post.date}</div>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  )
};

export default BlogPost;