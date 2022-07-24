import { SiteDataType, DockItem,Techbadge } from '@site/src/types';
import React from 'react';
import GithubAlt from '@ricons/fa/GithubAlt';
import Mail from '@ricons/ionicons5/Mail';
import Zhihu from '@ricons/antd/ZhihuOutlined';
import Wechat from '@ricons/antd/WechatFilled';
import QQ from '@ricons/antd/QqOutlined';
import BiliBili from '@site/static/images/icons/bilibili.svg';
import Juejin from '@site/static/images/icons/juejin.svg';
import Feishu from '@site/static/images/icons/feishu.svg';
import Gitea from '@site/static/images/icons/gitea.svg';
import { openDockModal } from '@site/src/utils';
import { TipItem } from '@site/src/components/tip';

export const badges: Techbadge[] = [];

export const siteData: SiteDataType = {
    owner: {
        name: 'zhang',
        avatar: '/custom/logo.ico',
        signature: '不积跬步，无以至千里',
    },
    // beian: {
    //     prefix: '浙ICP备',
    //     code: '18013418号 - 6',
    // },
};

//顶部通知栏
export const tips: TipItem[] = [
    {
        id: 'update',
        content:
            '欢迎',
        color: 'warning',
        pages: ['blog'],
        closeTime: 3600 * 24,
        center: true,
    },
    // {
    //     id: 'concat',
    //     content:
    //         '欢迎找我,🐧:1849600177   👉 请点击左侧(移动为底部)工具栏选择更多方式联系或关注我!',
    //     pages: ['about'],
    //     color: 'success',
    //     center: true,
    //     closeable: false,
    // },
];

export const dockItems: DockItem[] = [
    {
        name: 'github',
        href: 'https://github.com/zhangtag',
        icon: GithubAlt,
        target: '_blank',
    },
    // {
    //     name: '私有仓库',
    //     href: 'https://git.pincman.com',
    //     icon: Gitea,
    //     target: '_blank',
    // },
    {
        name: 'B站',
        href: 'https://space.bilibili.com/71383849/',
        icon: () => <BiliBili className="arco-icon" />,
        target: '_blank',
    },
    // {
    //     name: '知乎',
    //     href: 'https://www.zhihu.com/people/pincman',
    //     icon: Zhihu,
    //     target: '_blank',
    // },
    // {
    //     name: '掘金',
    //     href: 'https://juejin.cn/user/1046390798295816',
    //     icon: () => <Juejin className="arco-icon" />,
    //     target: '_blank',
    // },
    // {
    //     name: '微信',
    //     icon: Wechat,
    //     onClick: () =>
    //         openDockModal('wechat-modal', 'https://pic.pincman.com/media/202206281555555.jpg', {
    //             w: 192,
    //             h: 192,
    //         }),
    // },
    // {
    //     name: 'QQ',
    //     href: 'http://wpa.qq.com/msgrd?v=3&uin=1849600177&site=qq&menu=yes',
    //     icon: QQ,
    //     target: '_blank',
    // },
    // {
    //     name: '飞书',
    //     icon: Feishu,
    //     onClick: () =>
    //         openDockModal('feishu-modal', 'https://pic.pincman.com/media/202206281557491.jpg', {
    //             w: 160,
    //             h: 208,
    //         }),
    // },
    {
        name: '邮箱',
        href: 'mailto:1336709970@qq.com',
        icon: Mail,
    },
];
