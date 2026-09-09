# 数字经济专硕考研择校测评 H5（GitHub Pages 版）

纯前端静态页面，可直接托管到 GitHub Pages。

## 目录结构
```
.
├── index.html          # 主页面
├── style.css           # 样式
├── app.js              # 测评逻辑 / 画像计算 / 院校推荐
└── assets/
    ├── schools-data.js # 院校数据（来自院校库.xlsx，144 条）
    ├── qrcode.min.js   # 二维码生成库
    └── wechat-qr.jpg    # 结果页引流企业微信二维码
```

## 部署到 GitHub Pages
1. 在 GitHub 新建一个**公开仓库**（如 `sjjs-ceping`）
2. 把本目录所有文件推送到仓库（建议分支 `main`，根目录）
3. 仓库 → Settings → Pages → Source 选 `main` 分支、`/ (root)` 目录 → Save
4. 等待约 1 分钟，访问 `https://<你的用户名>.github.io/<仓库名>/`

## 说明
- 所有资源均为相对路径，项目站点 / 用户站点均可直接加载
- 首页与结果页的测评二维码由脚本动态生成，无需额外图片
- 院校数据更新后，重新生成 `assets/schools-data.js` 重新推送即可
