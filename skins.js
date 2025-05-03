function setSkin(skinName) {
    document.body.className = 'skin-' + skinName;
    localStorage.setItem('retromeSkin', skinName);
  }
  
  window.onload = function() {
    const savedSkin = localStorage.getItem('retromeSkin');
    if (savedSkin) {
      document.body.className = 'skin-' + savedSkin;
    }
  };
