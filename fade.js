// 頁面載入完後 ➔ 慢慢淡入 + 開放滾動
document.addEventListener('DOMContentLoaded', () => {
  document.body.style.transition = 'opacity 0.8s ease';
  document.body.style.opacity = '1';

  setTimeout(() => {
    document.body.style.overflow = 'auto'; // 允許滾動
  }, 800); // 等0.8秒（和opacity動畫同步）
});

// 點擊連結時 ➔ 先淡出再跳轉
document.addEventListener('click', (e) => {
  const link = e.target.closest('a');
  if (link && link.href && !link.href.startsWith('javascript:') && !link.target) {
    e.preventDefault();
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '0';
    setTimeout(() => {
      window.location = link.href;
    }, 500); // 0.5秒後跳轉
  }
});
