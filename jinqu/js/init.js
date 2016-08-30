// 设置
var env = 'cs', // 环境值，本地开发填dev、上测试环境填test、上正式环境填pro
    HOST = location.protocol + '//' + location.host,
    ENV = {
            dev: { // 本地开发环境配置
                    jsDir: '/QWB_Web_Integrity/web/v2.1/worker',
                    phpDir: '/QWB_Web_Integrity/web/quba/',
                    uploadPath: HOST+'/QWB_Web_Integrity/web/quba/',
                    barInfoPath: HOST+'/QWB_Web_Integrity/web/quba/uploads/images/',
                    barActivePath: HOST+'/QWB_Web_Integrity/web/quba/uploads/active_images/'
            },
            test: { // 研发环境配置
                    jsDir: '',
                    phpDir: 'https://testqwb.51qwb.com/quba/',
                    uploadPath: 'https://testqwb.51qwb.com/quba/',
                    barInfoPath: 'https://testqwb.51qwb.com/quba/uploads/images/',
                    barActivePath: 'https://testqwb.51qwb.com/quba/uploads/active_images/'
            },
            cs: { // 测试环境配置
                    jsDir: '',
                    phpDir: 'https://csqwb.51qwb.com/quba/',
                    uploadPath: 'https://csqwb.51qwb.com/quba/',
                    barInfoPath: 'https://csqwb.51qwb.com/quba/uploads/images/',
                    barActivePath: 'https://csqwb.51qwb.com/quba/uploads/active_images/'
            },
            pro: { // 正式环境配置
                    jsDir: '',
                    phpDir: 'https://51qwb.com/quba/',
                    uploadPath:'https://51qwb.com/quba/',
                    barInfoPath: 'https://51qwb.com/quba/uploads/images/',
                    barActivePath: 'https://51qwb.com/quba/uploads/active_images/'
            }
    },
    API = {
            root: HOST + ENV[env].jsDir + '/visitMainDomain.php?'    //ＰＨＰ页面控制器
    },
    ROOT_PATH = HOST + ENV[env].jsDir;

API.loginKeep = API.root + 'p=cybercafe&ac=loginDetails';
API.upload = {
	privilege: API.root + 'p=cybercafe&ac=privilege&operate=upload_image',
	cybercafe: API.root + 'p=cybercafe&ac=cybercafe&operate=upload_image'
};
API.privilege = {
	add: API.root + 'p=cybercafe&ac=privilege&operate=add',
	edit: API.root + 'p=cybercafe&ac=privilege&operate=edit'
};