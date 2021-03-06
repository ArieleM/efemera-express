const homeController = {
  index: (req, res) => {
    let servicos = [
      {nome: 'Dev full stack', imagem: '/imagens/undraw_dev_focus.svg'},
      {nome: 'Consultoria UX', imagem: '/imagens/undraw_mobile_apps.svg'},
      {nome: 'Marketing Digital', imagem: '/imagens/undraw_social_dashboard.svg'}
    ];

    let banners = [
      '/imagens/banner2.jpg',
      '/imagens/banner3.jpg',
      '/imagens/banner4.jpg',
      '/imagens/banner.jpg',
    ];

    res.render('index', { title: 'Home', listaServicos: servicos, listaBanners: banners });
  },
  contato: (req,res)=>{
    let {nome, email, mensagem} =  req.body;

    res.render('contato', {nome,email,mensagem, title:'Contato'});
  },
  newsletter:(req, res)=>{
    let {nome, email} =  req.body;
    res.render('newsletter', {nome, email, title:'Newsletter'});
  }
};

module.exports = homeController;
