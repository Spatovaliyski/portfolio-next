import Title from '@/components/01.Atoms/Title/title.component';
import Animate from '@/components/01.Atoms/MountTransition/fader.component';

import { CiClock1, CiCalendar } from "react-icons/ci";
import styles from './../BlogPosts/blog.module.scss'

/**
 * Renders a blog post with the given postId.
 *
 * @async
 * @param {Object} props - The component props.
 * @param {string} props.postId - The ID of the blog post to render.
 * @returns {JSX.Element} - The rendered blog post.
 */
const BlogPost = async ({ post }) => {
  /** 
   * Calculates the minute read for the given article content.
   * 
   * @param {string} articleContent - The content of the article.
   * @returns {number} - The minute read for the article.
   * 
   */
  const calculateMinuteRead = (articleContent) => {
    const plainText = articleContent.replace(/<[^>]+>/g, '');
    const words = plainText.split(/\s+/).filter(word => word.trim() !== ''); // Get the amount of words
    const wordsPerMinute = 200; // Average read is ~240, slightly reducing this
    const minuteRead = Math.ceil(words.length / wordsPerMinute); // Just divide the amount of words by the average read speed; .ceil rounds it to an int (i.e minute)

    return minuteRead === 1 ? '1 minute' : `${minuteRead} minutes`;
  }

  const minuteRead = calculateMinuteRead(post.content);

  return (
    <article className={styles.article}>
      <Title type={'h1'}>{post.title}</Title>
      <Animate delay={20}>
        <div className={styles.articleMeta}>
          <div className={styles.articleMetaColumn}><CiCalendar />{post.date}</div>
          <div className={styles.articleMetaColumn}><CiClock1 />{minuteRead}</div>
        </div>
      </Animate>
      <Animate delay={30}>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </Animate>
    </article>
  )
};

export default BlogPost;