// ============================================================
// 项目数据
// 在此数组追加对象即可添加新的项目卡片，无需修改 HTML
// ============================================================
const projects = [
    {
        name: '名著导读 · AI 问答系统',
        icon: '📚',
        desc: '面向四大名著的 AI 辅助阅读平台，双栏原文阅读 + 智能问答交互体验，前后端分离架构，已 Docker 容器化部署上线。',
        tech: ['Python', 'FastAPI', 'React', 'MySQL', 'Docker', 'RAG', 'LLM'],
        features: [
            'FastAPI 分层架构（Router → Service → Model），24 个 RESTful API',
            'JWT 认证 + 角色鉴权 + slowapi 6 端点分级限流',
            'MySQL FULLTEXT 索引实现跨书章节毫秒级全文搜索',
            'GitHub Actions CI（ruff + pytest + 前端构建 + Docker 镜像验证）',
            'Caddy 反代 + cpolar 隧道 HTTPS 公网发布'
        ],
        result: '已上线项目，Docker 容器化部署，提供在线问答体验',
        img: '',
        demo: 'https://17b821.r18.vip.cpolar.cn',
        repo: 'https://github.com/ARCHER-DAN/mingzhu-daodu'
    },
    {
        name: 'AI 短视频自动生成平台',
        icon: '🎬',
        desc: '从话题输入到成品 MP4 的全自动生成流程，覆盖分镜脚本、配图/视频、语音合成、字幕叠加与 BGM 混音四个环节。支持 Web 端一键生成与 CLI 命令行两种运行模式。',
        tech: ['Python', 'FastAPI', 'Ollama', 'ComfyUI', 'moviepy', 'SSE', 'Cloudflare Tunnel'],
        features: [
            'Pipeline 编排层，支持分步执行、断点续跑、任务停止中断',
            'ComfyUI 动态注入 Prompt，自适应 SD 生图 / Wan T2V / TTS 三套工作流',
            'moviepy v2 视频合成：多分镜拼接、SRT 字幕渲染、BGM 混音',
            'TTS 音频时长回写驱动 Wan 帧数计算，音视频对齐容差 ±0.05s'
        ],
        result: '完整落地从 Prompt 到视频的全自动化流程，Web + CLI 双模式',
        img: '',
        video: 'images/short-video-demo.mp4',
        demo: '',
        repo: ''
    },
    {
        name: '淘宝内存条智能客服问答系统',
        icon: '💬',
        desc: '基于 LangChain + DeepSeek 的智能客服 Agent 系统，覆盖内存条售前兼容检测、售中推荐/优惠计算、售后故障排查全业务链路。',
        tech: ['Python', 'FastAPI', 'LangChain', 'DeepSeek', 'Dify/RAG', 'Docker', 'Cloudflare Tunnel'],
        features: [
            'LangChain Agent 编排 4 个确定性 Tool，Prompt 约束将工具调用率提升至接近 100%',
            '自研优惠确定性计算引擎（330行），满减/件数折扣叠加，100% 可复现',
            'Dify RAG 知识库 + 8 节点意图路由，闲聊与业务请求智能分发',
            '53 条 pytest 测试用例，真实验证无 Mock；Docker Compose + 双域名部署'
        ],
        result: 'Agent 工具调用率从约 50% 提升至接近 100%，消除 LLM 幻觉导致的业务误判',
        img: '',
        demo: '',
        repo: ''
    },
    {
        name: 'AI 翻唱系统',
        icon: '🎤',
        desc: '基于 ComfyUI + RVC 模型的 AI 声音转换/翻唱系统，支持用户上传音频或通过 URL 导入，经 ComfyUI 工作流处理后产出 AI 翻唱结果。',
        tech: ['Python', 'FastAPI', 'ComfyUI', 'RVC', 'tkinter', 'PyInstaller', 'Nginx/cpolar'],
        features: [
            '三种音频输入方式：本地上传、服务器已有、外网 URL 导入',
            'BackgroundTasks 异步任务处理，解决 cpolar 隧道长连接超时问题',
            '动态修改 workflow_api.json 节点参数实现 ComfyUI 自动化提交',
            'PyInstaller 单文件 EXE 打包（~100MB），处理 frozen 环境兼容性'
        ],
        result: '完整可交付的 AI 翻唱桌面应用，一键启动 + 公网访问',
        img: '',
        demo: '',
        repo: ''
    },
    {
        name: 'XAUUSD EA 量化交易系统',
        icon: '📈',
        desc: '基于 MetaTrader 4 平台的 XAUUSD（黄金）量化交易系统，累计 4400+ 行 MQL4 代码，产出 6 套差异化策略与 18 套专用预设参数。',
        tech: ['MQL4', 'MetaTrader 4', 'SuperTrend', 'ATR', 'MACD', '遗传算法', 'Bash'],
        features: [
            '6 套策略：SuperTrend、MACD、布林带、MACD+BB 融合、Donchian 突破、SuperTrend+马丁格尔复合',
            '可拖拽图表交互面板（1300+ 行），多标签页切换 + 8 参数实时调节',
            '多层风控：K 线级防重入、点差保护、保证金预校验（20% 边距）',
            '遗传算法参数优化 + Bash 编译部署流水线（编译→校验→归档全自动）'
        ],
        result: '策略合规通过 MQL5 Market 验证，18 套预设参数覆盖多种行情',
        img: '',
        demo: '',
        repo: ''
    },
    {
        name: 'AI 图像生成系统',
        icon: '🎨',
        desc: '基于 ComfyUI 的图像生成与风格化工作流系统，覆盖图片生成、角色一致性多视图、视频动画帧控制、LoRA 模型训练与调优。',
        tech: ['ComfyUI', 'LoRA', 'Python', 'Stable Diffusion'],
        features: [
            'ComfyUI 工作流搭建（文生图、角色一致性多视图、视频动画帧控制）',
            'LoRA 模型训练与调优，适配多种风格与角色一致性需求',
            'Python 脚本实现批量生成与自动化后处理'
        ],
        result: '多套可复用的 ComfyUI 工作流，覆盖生成/一致性/动画三个方向',
        img: '',
        demo: '',
        repo: ''
    }
];

// ============================================================
// 渲染项目卡片
// ============================================================
function renderProjects() {
    const container = document.getElementById('project-list');
    const detailPanel = document.getElementById('project-detail');
    if (!container || !detailPanel) return;

    container.className = 'project-grid';

    container.innerHTML = projects.map((project, index) => {
        return `
            <div class="project-card" data-index="${index}">
                <div class="project-card-header">
                    <div class="project-info">
                        <h3>${project.icon || ''} ${project.name}</h3>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // 点击卡片 → 下方显示详情
    let selectedIndex = -1;
    container.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', function () {
            const idx = parseInt(this.dataset.index);

            // 点击同一张 → 取消选中
            if (selectedIndex === idx) {
                this.classList.remove('selected');
                detailPanel.classList.remove('visible');
                selectedIndex = -1;
                return;
            }

            // 取消旧选中，选中新卡片
            container.querySelectorAll('.project-card.selected').forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
            selectedIndex = idx;

            // 渲染详情
            const p = projects[idx];
            const featuresHtml = p.features.length
                ? `<div class="project-features">
                       <strong>✨ 核心功能：</strong>
                       <ul>${p.features.map(f => `<li>${f}</li>`).join('')}</ul>
                   </div>`
                : '';

            const resultHtml = p.result
                ? `<div class="project-result">📈 成果：${p.result}</div>`
                : '';

            const videoHtml = p.video
                ? `<div class="project-video">
                       <video controls style="width:100%;max-width:600px;border-radius:10px;">
                           <source src="${p.video}" type="video/mp4">
                       </video>
                   </div>`
                : '';

            const demoHtml = p.demo
                ? `<a href="${p.demo}" target="_blank">🔗 在线演示</a>`
                : '';

            const repoHtml = p.repo
                ? `<a href="${p.repo}" target="_blank">📂 GitHub</a>`
                : '';

            const hasLinks = demoHtml || repoHtml;

            detailPanel.innerHTML = `
                <h3>${p.name}</h3>
                <p class="project-desc" style="margin-bottom:1rem;">${p.desc}</p>
                <div class="tech-tags" style="margin-bottom:1rem;">${p.tech.map(t => `<span>${t}</span>`).join('')}</div>
                ${videoHtml}
                ${featuresHtml}
                ${resultHtml}
                ${hasLinks ? `<div class="project-links">${demoHtml}${repoHtml}</div>` : ''}
            `;
            detailPanel.classList.add('visible');

            // 平滑滚动到详情面板
            detailPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
    });
}

// ============================================================
// 平滑滚动
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ============================================================
// 页面加载后渲染项目
// ============================================================
document.addEventListener('DOMContentLoaded', renderProjects);

console.log('作品集网站已加载 🚀');
