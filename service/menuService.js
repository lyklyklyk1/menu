var menumodule = require('../entity/menu.js');

function menuService(){
  var menuskey = 'menus';

  this.menulist = function () {
    return wx.getStorageSync(menuskey) || [];
  };
  this.addmenu = function (menu) {
    var menus = this.menulist();
    var lastId = 0;
    if (menus.length > 0){
      lastId = menus[menus.length - 1].Id;
    }
    if (isNaN(lastId)){
      lastId = 0;
    }
    menu.id = lastId + 1;
    menus.unshift(menu);
    saveMenus(menus);
  };
  this.editmenu = function (menu) {
    saveMenu(menu);
  };
  this.removemenu = function (menuid) {
    var menus = this.menulist();
    var newmenus = [];
    for (j = 0, len = menus.length; j < len; j++) {
      var menu = menus[j];
      if (!menu.Id == menuid){
        newmenus.push(menu);
      }
    }
    saveMenus(newmenus);
  };


  function saveMenus(menus) {
    wx.setStorageSync(menuskey, menus);
  };
  function saveMenu(menu) {
    var menus = this.menulist();
    for (j = 0, len = menus.length; j < len; j++) {
      var oldmenu = menus[j];
      if (menu.Id == oldmenu.Id) {
        menus[j] = menu;
      }
    }
    this.saveMenus(menus);
  };
}

/**
{
  var service = new menuService();
  console.info('测试' + (service.menulist().length + 1));
  var menu = new menumodule.menu('测试' + (service.menulist().length + 1));
  console.info(menu);
  service.addmenu(menu);
  console.info(service.menulist());
  
} */

module.exports = {
  menuService: new menuService()
}