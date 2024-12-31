document.addEventListener('DOMContentLoaded', function () {
  // 加载 JSON 配置文件
  fetch('links.json')
    。then(response => response.json())
    。then(data => {
      const container = document.getElementById('social-links');

      // 遍历 JSON 数据并创建列表项
      data.links.forEach(link => {
        if (link.show) { // 仅显示 show 为 true 的链接
          const listItem = document.createElement('li');
          const anchor = document.createElement('a');
          anchor.href = link.url;
          anchor.target = "_blank";

          const icon = document.createElement('i');
          icon.className = link.icon; // 动态添加 FontAwesome 图标类

          anchor.appendChild(icon);
          listItem.appendChild(anchor);
          container.appendChild(listItem);
        }
      });
    })
    。catch(error => {
      console.error('加载社交媒体链接失败:', error);
    });
});

// 获取当前日期
document.addEventListener('DOMContentLoaded', function () {
  
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; 
  const day = currentDate.getDate();
  
  const formattedDate = `${year}年${month}月${day}日`;
  
  document.getElementById('date').textContent = formattedDate;
});

// 新年灯笼
document.addEventListener("DOMContentLoaded", function () {
  // 获取当前月份（注意，月份是从0开始的，即0代表1月，11代表12月）
  var currentMonth = new Date().getMonth();

  // 判断当前月份是否是1月或12月
  if (currentMonth === 0 || currentMonth === 11) {
    // 加载该 JS 脚本
    var script = document.createElement('script');
    script.src = "https://api.vvhan.com/api/script/denglong";
    document.head.appendChild(script);
  }
});
