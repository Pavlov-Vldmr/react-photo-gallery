//
const fs = require("fs");

module.exports = function(app) {

    function isFolder(path){
        return fs.lstatSync(path).isDirectory() && fs.existsSync(path);
    }

    app.get('/', (req, res) => {
        // res.end('main');
        const base = './files/';
        const lowbase = '/files/';

        let path ='';
        let src = '';


        if ('path' in req.query) {
            path = req.query.path;
            // src = base + path
            console.log(path);
        }

        if (isFolder(base + path)){
            let id = -1;
            let files = fs.readdirSync(base + path).map(item =>{
                id = id + 1;
                const isDir = fs.lstatSync(base + path + '/' + item).isDirectory();
                console.log(item);

                let src = '';
                if (!isDir) {
                    // size = fs.statSync(base + path + '/' + item);
                    src = lowbase + path +'/'+ item 
                 

                }
                if (isDir) {
                    src = lowbase + path + item +'/' + fs.readdirSync(base + path + item)[0]

                }
                return {
                    id: id,
                    src: src,
                    name: item,
                    dir: isDir,
                    // size: size.size ?? 0
                };
                
            });
            res.json({
                path: path,
                result: true,
                files: files
            });
        }
    });
}