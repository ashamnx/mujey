class AppHeaderController{
    constructor($sce){
        'ngInject';

        this.$sce = $sce;
        this.menu = [{
    link: '',
    title: 'Dashboard',
    icon: 'dashboard',
    submenu: [
      {
        link: '',
        title: 'd1',
        icon: 'd1'
      },
      {
        link: '',
        title: 'd2',
        icon: 'd2'
      },{
        link: '',
        title: 'd3',
        icon: 'd3'
      },{
        link: '',
        title: 'd4',
        icon: 'd4'
      }
    ]
  }, {
    link: '',
    title: 'Friends',
    icon: 'group'
  }, {
    link: '',
    title: 'Messages',
    icon: 'message'
  }];
    }

    $onInit(){
        //defer iframe loading
        let url = 'https://ghbtns.com/github-btn.html?user=jadjoubran&repo=laravel5-angular-material-starter&type=star&count=true&size=large';
        this.githubWidget = this.$sce.trustAsResourceUrl(url);
    }
}

export const AppHeaderComponent = {
    templateUrl: './views/app/components/app-header/app-header.component.html',
    controller: AppHeaderController,
    controllerAs: 'vm',
    bindings: {}
}
