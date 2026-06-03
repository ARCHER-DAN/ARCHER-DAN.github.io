# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

胡古月的个人作品集展示网站。纯静态 HTML/CSS/JS，无构建工具，无后端依赖，双击 `index.html` 即可预览，可直接部署到 GitHub Pages。

## 文件架构

```
index.html      — 页面骨架（导航、Hero、项目区容器、关于、页脚）
style.css       — 全部样式（橙柚配色、响应式、动画）
script.js       — 项目数据数组 + 卡片渲染 + 点击交互 + 平滑滚动
images/         — 截图与演示视频
docs/           — 设计文档
```

## 数据驱动模式

所有项目信息存储在 `script.js` 顶部的 `projects` 数组中。页面加载时 JS 自动遍历数组渲染卡片。**添加新项目只需在数组中追加对象，无需改 HTML。**

项目对象字段：`name`, `icon`, `desc`, `tech[]`, `features[]`, `result`, `img`, `video`, `videos[{src,label}]`, `audio`, `demo`, `repo`。其中 `videos` 数组支持多视频展示（带标签），`audio` 支持嵌入 MP3 播放器。

## 交互逻辑

- 上方：项目名称标签横排，自动换行，点击选中（橙色高亮 + 边框）
- 下方：选中后显示详情面板（描述、技术标签、视频播放器、功能列表、成果、链接）
- 点击同一张卡片取消选中，点击另一张直接切换

## 配色约定

Hero 渐变：`#fbbf24` → `#f97316` → `#f4726a`
技术标签：`#fff3e0` 底 + `#e65100` 字
选中边框/强调色：`#f97316`

## 在线地址

🌐 **https://archer-dan.github.io**（GitHub Pages，推送即自动部署）

## 文字修改指引

- 个人信息（姓名/标题/简介/关于我/联系方式）：改 `index.html`
- 项目数据（名称/描述/技术/功能/成果/媒体路径）：改 `script.js` 顶部的 `projects` 数组

## 运行方式

```bash
# 双击打开
start index.html

# 或用 Python 简易服务器（如需测试跨域等场景）
python -m http.server 8080
```

## 设计文档

完整设计说明见 `docs/superpowers/specs/2026-06-03-portfolio-website-design.md`
