const homeController = {
    index: (req, res) =>{
        let servicos = [
            {nome:'Desenvolvimento FullStack', imagem: '/imagens/undraw_dev_focus.svg'},
            {nome:'Consultoria UX', imagem: '/imagens/undraw_social_dashboard.svg'},
            {nome:'Marketing Digital', imagem: '/imagens/undraw_mobile_apps.svg'},
            {nome:'Suporte Técnico', imagem: '/imagens/undraw_social_dashboard.svg'},
            {nome:'Marketing Digital', imagem: '/imagens/undraw_mobile_apps.svg'},
        ]
        let banner = ['imagens/banner_projeto.jpg',
        'imagens/banner_reuniao.jpg',
        'imagens/banner_suporte.jpg',
        'imagens/banner.jpg'
        ]
        res.render('index', {title:'Home', listaServicos: servicos, listaBanners: banner})
    }
};
module.exports= homeController;