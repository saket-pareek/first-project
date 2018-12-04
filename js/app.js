let ViewModel = function() {
  this.toggleSidebar = function() {
    $('body').toggleClass('sidebar-hidden');
    $('.main-content').toggleClass('shift-section');
    $('.dark-overlay').toggleClass('add-overlay');
  }
}

ko.applyBindings(new ViewModel());
