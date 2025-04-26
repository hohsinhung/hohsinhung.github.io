// 頁面載入完成時慢慢淡入
document.addEventListener('DOMContentLoaded', () => {
  document.body.style.opacity = '1';
});

// 點擊任何a連結時，先淡出再跳轉
document.addEventListener('click', (e) => {
  const link = e.target.closest('a');
  if (link && link.href && !link.href.startsWith('javascript:') && !link.target) {
    e.preventDefault();
    document.body.style.opacity = '0';
    setTimeout(() => {
      window.location = link.href;
    }, 500); // 0.5秒後跳轉
  }
});
