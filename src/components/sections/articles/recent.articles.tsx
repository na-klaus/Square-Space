import React from 'react';
import Section from '../../structure/section';
import Container from '../../structure/container';
import SectionTitle from '../../blocks/section.title';
import css from '../../../styles/scss/sections/articles/recent.module.scss';

interface Article {
  title: string;
  description: string;
  image: string;
  image2x?: string;
  image3x?: string;
  types: string[];
}

interface RecentArticlesProps {
  mediumArticles: Article[];
}

const RecentArticles: React.FC<RecentArticlesProps> = ({ mediumArticles }) => {
  return (
    <Section classProp="borderBottom">
      <Container spacing={['verticalXXXXLrg']}>
        <SectionTitle
          title="Recent Articles"
          preTitle="Stay Informed"
          subTitle="Read about our latest articles and insights into the world of architecture and design."
        />
        
        <section className={css.articles}>
          {mediumArticles.map(({ title, description, image, image2x, image3x, types }, index) => (
            <article key={index} className={css.article}>
              <div className={css.imageWrapper}>
                <img 
                  src={image} 
                  alt={`Image for ${title}`} 
                  height={400} 
                  width={600} 
                  className={css.articleImage} 
                  srcSet={`${image} 1x, ${image2x} 2x, ${image3x} 3x`}
                />
              </div>
              <div className={css.textWrapper}>
                <h3 className={css.articleTitle}>{title}</h3>
                <p className={css.articleDescription}>{description}</p>
              </div>
              <div className={css.articleDetails}>
                <h4>Types of Articles:</h4>
                <ul className={css.typesList}>
                  {types.map((type, index) => (
                    <li key={index} className={css.typeItem}>
                      {type}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>
      </Container>
    </Section>
  );
};

export default RecentArticles;
