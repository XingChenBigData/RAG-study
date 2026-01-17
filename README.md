# RAG全栈技术从基础到精通

## 项目简介

本项目是一个关于 RAG（Retrieval-Augmented Generation）全栈技术的学习笔记，旨在帮助开发者从基础到精通掌握高精准 AI 应用的构建。
## 代办
- 夸克网盘：极客时间-AIOPS训练营/4.实战四：实现基于运维专家知识库故障排查Operator.mp4。 推荐理由：这节课工作相关。rag。链接：https://pan.quark.cn/s/c2d35fba2a7e
- 观感一般。马士兵-AI大模型全链路实战/msb-AI实战工具课
- 
## 内容结构

项目文档位于 `docs/base` 目录下，包含以下主要内容：

- **Chapter 1 项目介绍**：项目的整体介绍和学习路径
- **Chapter 6 文档分块**：递归文本分块和语义智能分块技术
- **Chapter 7 项目架构设计**：RAG 流程和项目架构设计
- **Chapter 8 RAG评估**：RAG迭代的关键评估方法
  - 8-2 RAG迭代的关键：评估_ev- 笔记
  - 8-3 RAG评估的三大步骤_ev- 笔记
  - 8-4 RAG评价神器：Ragas框架_ev- 笔记
  - 8-5 实战：用Ragas评估制度问答模块的性能_ev- 笔记

## 如何添加新文档

当您添加新的文档到 `docs/base` 目录后，请按照以下步骤操作：

1. **创建文档文件**：将新文档保存为 `.md` 文件到对应的章节目录
2. **更新配置**：编辑 `docs/.vitepress/config.js` 文件，在相应的侧边栏配置中添加新文档的链接
3. **更新首页**：编辑 `docs/index.md` 文件，在内容结构部分添加新文档的引用
4. **提交更改**：运行以下命令提交更改到 GitHub
   ```bash
   git add .
   git commit -m "feat: 添加新文档"
   git push origin main
   ```
5. **等待部署**：GitHub Actions 会自动构建和部署您的更改，通常需要几分钟时间

## 本地预览

在提交更改前，您可以在本地预览文档：

```bash
npm install
npm run dev
```

然后在浏览器中访问 `http://localhost:5173` 查看效果。

## 技术栈

- **前端框架**：VitePress（用于文档构建）
- **向量数据库**：支持 Milvus、Faiss 等
- **后端技术**：Python、FastAPI 等
- **AI 模型**：支持多种大语言模型集成

## 快速开始

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

## 项目目录

```
.
├── docs/          # 文档目录
│   ├── .vitepress/ # VitePress 配置
│   └── base/       # 基础学习笔记
├── data/          # 数据目录
├── src/           # 源代码目录
└── README.md      # 项目介绍
```

## 部署

本项目可以部署到 GitHub Pages 或其他静态网站托管服务。

## 许可

Apache-2.0 License


















