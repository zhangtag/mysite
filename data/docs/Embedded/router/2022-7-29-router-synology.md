---
# slug: name # 别名
title: 📢群晖
# image: '/images/blog/about.webp'
# authors: [zhang]
# rf_type: image
# rf_summary: 软路由上安装docker并扩容
# rf_banner: false #文档顶部图片
# rf_noloop: true # 主页大图显示
# rf_comment: true #评论
# rf_excerpt: true # 文档详细信息
# order: 4
sidebar_position: 6
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info

群晖，NAS界的天花板，他又不仅仅是NAS

:::

:::info 参考

[零度](https://www.freedidi.com/3938.html)，[视频](https://www.youtube.com/watch?v=tcGFwROh3Q0)

:::

## 准备

* [Loader](https://xpenology.club/downloads/)	引导固件
* [Rufus ](https://rufus.ie/zh/) 	镜像烧录
* [群晖固件](https://archive.synology.com/download/Os/DSM/5.2-5644)	

## 制作启动盘

使用Rufus写Loader到U盘，并将物理机从U盘启动

## 烧写群晖固件

打开网站`find.synology.com`或者使用物理机`IP:5000`方法进入安装界面，推荐后者