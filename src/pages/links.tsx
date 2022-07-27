// import { Layout } from '@site/src/components/layout';
import React, { FC, useEffect, useState } from 'react';

import clsx from 'clsx';

import ReactTooltip from 'react-tooltip';

import Image from '@theme/IdealImage';

import { Layout } from '@site/src/components/layout';

import ReactDOMServer from 'react-dom/server';

import { Parallax } from 'react-parallax';

import { linksData } from '@site/data/site';

import { LinkCategory, LinkType } from '../types';

import $styles from './links.module.css';

const LinksBlock: FC<LinkType & { id: string }> = ({
    id,
    name,
    logo,
    desc,
    href,
    target = '_blank',
}) => (
    <div className="col col--3">
        <div className={`tw-card tw-block ${$styles.link}`}>
            <a
                href={href}
                target={target}
                className="dark:tw-text-[color:var(--ifm-font-color-base)] dark:hover:tw-text-[color:var(--ifm-link-hover-color)]"
            >
                <Image img={logo} />
                <div>
                    <span className="tw-ellips">
                        <b className="tw-animate-decoration ">{name}</b>
                    </span>
                    <p
                        data-html
                        className="tw-ellips tw-m-[unset] tw-pr-2 tw-text-[color:var(--ifm-font-color-small)]"
                        data-tip={ReactDOMServer.renderToString(<span>{desc}</span>)}
                        data-for="links-block-tip"
                    >
                        {desc}
                    </p>
                </div>
            </a>
        </div>
    </div>
);

const CategoryList: FC = () => {
    const [cates, setCates] = useState<LinkCategory[]>([]);
    useEffect(() => {
        setCates(linksData);
    }, []);
    return (
        <div className={$styles.category}>
            {cates.map((cate, i) => (
                <div key={i.toFixed()}>
                    <div className={$styles.cateHeader}>
                        <span>{cate.name}</span>
                        <span>{cate.links.length}</span>
                    </div>
                    <div className={`row ${$styles.cateBody}`}>
                        {cate.links.map((link, j) => (
                            <LinksBlock key={j.toFixed()} id={`${i}-${j}`} {...link} />
                        ))}
                        <ReactTooltip
                            id="links-block-tip"
                            effect="solid"
                            place="right"
                            type="success"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};
const Header: FC = () => (
    <Parallax
        className={$styles.header}
        bgClassName="dark:tw-opacity-30"
        bgImage="/images/pages/page-links-top-bg.webp"
        bgImageAlt="link top image"
        strength={1000}
        renderLayer={(percentage) => (
            <div className="tw-bg-gradient-to-r tw-from-lime-500 tw-via-orange-400 tw-to-amber-600 tw-top-0  tw-left-0  tw-absolute tw-w-full tw-h-full tw-opacity-80 dark:tw-opacity-10" />
        )}
    >
        <div className={`container ${$styles.headerContent}`}>
            <header>生态导航</header>
            <p>
                {/* 一些值得推荐的链接 */}
                {/* <br /> */}
                <br />
                <b>
                    收集一些有利于人类进步的网站，不断更新中
                    {/* <em>入门文档和社区不包含图标</em> */}
                </b>
            </p>
        </div>
    </Parallax>
);
export default () => (
    <Layout
        title="👏"
        description="个人博客"
        className={`tw-bg-[url(/images/pages/page-links-bg.svg)] ${$styles.links}`}
    >
        <div className={$styles.wrapper}>
            <Header />
            <div className={clsx('container', $styles.container)}>
                <CategoryList />
            </div>
        </div>
    </Layout>
);
