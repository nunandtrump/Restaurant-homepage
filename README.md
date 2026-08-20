# Restaurant Homepage

一个响应式的餐厅首页静态站点，用于展示品牌氛围、当季菜单、品牌故事和预订入口。

## 项目特点

- 大幅首屏视觉与清晰的餐厅品牌文案
- 菜单分组切换交互
- 品牌故事与餐厅亮点展示
- 预订行动入口
- 适配桌面端与移动端

## 文件结构

```text
.
├── index.html   # 页面结构
├── styles.css   # 页面样式与响应式布局
├── script.js    # 菜单切换与滚动显现交互
└── README.md    # 项目说明
```

## 本地预览

直接用浏览器打开 `index.html` 即可。

如果你希望通过本地服务预览，也可以在项目目录运行：

```bash
python -m http.server 4173
```

然后访问 `http://127.0.0.1:4173`。

## 页面内容

- `Hero`：餐厅定位、核心文案、预约按钮和招牌菜推荐
- `Seasonal Menu`：招牌菜、小食、甜点三组菜单切换
- `Our Story`：品牌故事和用餐体验亮点
- `Book A Table`：预订入口和联系方式

## 可自定义内容

- 在 `index.html` 中替换餐厅名称、地址、电话、邮箱和菜品信息
- 在 `styles.css` 中调整配色、字体、间距和卡片样式
- 在 `script.js` 中扩展更多交互效果

## 部署

这是一个纯静态项目，可以直接部署到 GitHub Pages、Netlify、Vercel 静态站点或任意 Nginx/Apache 静态目录。
