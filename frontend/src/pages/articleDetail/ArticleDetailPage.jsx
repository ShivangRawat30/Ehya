import React from 'react';
import { Link, useParams } from 'react-router-dom';
import MainLayout from '../../components/MainLayout';
import BreadCrumbs from '../../components/BreadCrumbs';
import { images } from '../../constants';
import SuggestedPost from './container/SuggestedPost';
import CommentsContainer from '../../components/comments/CommentsContainer';

const breadCrumbsData = [
  { name: 'Home', link: '/' },
  { name: 'Blog', link: '/blog' },
  { name: 'Article title', link: '/blog/1' },
];
const postsData = [
  {
    _id: '1',
    image: images.Post1Image,
    title: 'Help childern get better education',
    createAt: '2013-10-02T01:11:18.965Z',
  },
  {
    _id: '2',
    image: images.Post1Image,
    title: 'Help childern get better education',
    createAt: '2013-10-02T01:11:18.965Z',
  },
  {
    _id: '3',
    image: images.Post1Image,
    title: 'Help childern get better education',
    createAt: '2013-10-02T01:11:18.965Z',
  },
  {
    _id: '4',
    image: images.Post1Image,
    title: 'Help childern get better education',
    createAt: '2013-10-02T01:11:18.965Z',
  },
];

const tagsData = [
  'Medical',
  'Lifestyle',
  'Learn',
  'Healthy',
  'Food',
  'Diet',
  'Education',
];

const ArticleDetailPage = () => {
  return (
    <MainLayout>
      <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start ">
        <article className="flex-1">
          <BreadCrumbs data={breadCrumbsData} />
          <img
            className="rounded-xl w-full"
            src={images.Post1Image}
            alt="laptop"
          />
          <Link
            to="/blog?category=selectedCategory"
            className="text-primary text-sm font-roboto inline-block mt-4 md:text-base"
          >
            EDUCATION
          </Link>
          <h1 className="text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]">
            Help children get better education
          </h1>
          <div className="mt-4 text-dark-soft">
            <p className="leading-7">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Mollitia, perferendis eveniet dignissimos molestiae illo optio
              ipsam facilis dolores necessitatibus temporibus ipsa. Et aliquid
              dignissimos beatae. Accusamus architecto et quas explicabo? Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. Similique aut
              molestiae, sapiente asperiores molestias aliquid quod blanditiis
              nulla harum temporibus.
            </p>
          </div>
          <CommentsContainer className="mt-10" logginedUserId="a"/>
        </article>
        <SuggestedPost
          header="Latest Article"
          posts={postsData}
          tags={tagsData}
          className="mt-8 lg:mt-0 lg:max-w-xs"
        />
      </section>
    </MainLayout>
  );
};

export default ArticleDetailPage;
