import React from 'react';
import Section from '../../structure/section';
import Container from '../../structure/container';
import Image from 'next/image';
import Icon from '../../utils/icon';
import css from '../../../styles/scss/sections/projects/recent.module.scss';

export default function GitProjects({ repos, user }) {
  return (
    <Section classProp={css.section}>
      <Container classProp={css.container} spacing={'verticalXXXLrg'}>
        <h3>Recent Projects</h3>

        {/* Check if user exists and display profile */}
        {user && user[0] ? (
          <section className={css.profile}>
            <Image
              className={css.profilePhoto}
              src={`${user[0]?.avatar_url}`}
              alt="Github Profile Photo"
              height={60}
              width={60}
              loading="eager"
            />
            <span className={css.details}>
              <p>{user[0]?.name}</p>
              <a href={user[0]?.html_url} rel="noreferrer" target="_blank">
                {user[0]?.html_url} <Icon icon={['far', 'arrow-up-right-from-square']} />
              </a>
            </span>
          </section>
        ) : (
          <p>No user information available.</p>
        )}

        {/* Check if repos is an array and map over it */}
        <div className={css.projects}>
          {Array.isArray(repos) && repos.length > 0 ? (
            repos.map(
              (
                {
                  name,
                  description,
                  topics,
                  forks_count,
                  html_url,
                  language,
                  watchers,
                  homepage,
                  pushed_at,
                },
                index
              ) => {
                const date = new Date(pushed_at).toDateString();
                return (
                  <article key={index} className={css.project}>
                    <span className={css.header}>
                      <a href={html_url} rel="noreferrer" target="_blank">
                        {name} <Icon icon={['fad', 'arrow-up-right-from-square']} />
                      </a>
                      {homepage && <p className={css.homepage}>{homepage}</p>}
                    </span>
                    <span className={css.descriptionContainer}>
                      <p className={css.description}>{description || 'No description available'}</p>
                    </span>
                    <span className={css.details}>
                      {language && (
                        <p>
                          <i className={`devicon-${language.toLowerCase()}-plain colored`} /> {language}
                        </p>
                      )}
                      <p><Icon icon={['fad', 'star']} /> {watchers}</p>
                      <p><Icon icon={['fad', 'code-branch']} /> {forks_count}</p>
                      <p className={css.pushedAt}>{date}</p>
                    </span>
                    <span className={css.topicsContainer}>
                      {topics && topics.length > 0 ? (
                        topics.map((e, index) => (
                          <span key={index} className={css.topics}>
                            <i className="devicon-github-plain"></i> {e}
                          </span>
                        ))
                      ) : (
                        <p>No topics available.</p>
                      )}
                    </span>
                  </article>
                );
              }
            )
          ) : (
            <p>No projects found.</p>
          )}
        </div>

        {/* Debug information (optional) */}
        {/*
        <pre>{JSON.stringify(user, undefined, 2)}</pre>
        <pre>{JSON.stringify(repos, undefined, 2)}</pre>
        */}
      </Container>
    </Section>
  );
}
