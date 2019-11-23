var showdown = require('showdown'),
    fse = require('fs-extra'),
    converter = new showdown.Converter(),
    fm = require('front-matter');


function MdHelper(folderPath, folderToSave, layout) {
    console.log('folderpath', folderPath, 'foldersave', folderToSave, 'layout', layout);
    this.folderName = folderPath;
    this.folderToSave = folderToSave;
    this.layout = layout;
    this.convert = function () {
        // open tutorial layout
        var layoutContent = fse.readFileSync('./code/layouts/' + layout + '.vueLayout', {
            encoding: 'utf8'
        });

        this.getAllFilesFromFolder(this.folderName).forEach(fileName => {
            if (fse.statSync(this.getLocationFromFile(fileName)).isDirectory()) {
                // console.log(folderPath + fileName);
                // this.getAllFilesFromFolder(folderPath + "/" + fileName);
                new MdHelper(folderPath + "/" + fileName, folderToSave + "/" + fileName, this.layout).convert();
            }
            else {
                var fMData = fm(this.getContentOfFile(fileName));
                var html = converter.makeHtml(fMData.body);
                var layout = addMetaTags(layoutContent, fMData.attributes);
                // console.log(layoutContent);
                fileName = fileName.split(".")[0].trim();
                var filePath = `${folderToSave}/${fileName}.vue`;
                fse.ensureDirSync(folderToSave);
                //recreate file if exist otherwise create
                fse.closeSync(fse.openSync(filePath, 'w'));
                var index = layout.indexOf('`');
                var firstString = layout.substring(0, index + 1);
                var lastString = layout.substring(index + 1);
                html = encodeURI(html);
                fse.writeFileSync(filePath, firstString + html + lastString, {
                    encoding: 'utf8'
                });
            }
            // console.log(html);
        });
    }



}

MdHelper.prototype.getAllFilesFromFolder = function (folderName) {
    return fse.readdirSync(this.folderName);
};

MdHelper.prototype.getLocationFromFile = function (fileName) {
    return `${this.folderName}/${fileName}`;
}

MdHelper.prototype.getContentOfFile = function (fileName) {
    return fse.readFileSync(`${this.folderName}/${fileName}`, {
        encoding: 'utf8'
    });
}


exports.convertMdToVueAndSaveInFolder = function (folderPath, folderToSave, layout) {
    new MdHelper(folderPath, folderToSave, layout).convert();
}

function addMetaTags(layout, metaTags) {
    var addTag = function (stringConst, tagName) {
        // var stringConst = 'title=';
        // console.log('layout', layout);
        var index = layout.indexOf(stringConst);
        index = index + stringConst.length;
        var firstString = layout.substring(0, index + 1);
        var lastString = layout.substring(index + 1);
        var firstString = layout.substring(0, index + 1);
        return firstString + metaTags[tagName] + lastString;
    }

    layout = addTag('title=', 'Title');
    layout = addTag('keywords=', 'Keywords');
    layout = addTag('description=', 'Description');
    return layout;
}

